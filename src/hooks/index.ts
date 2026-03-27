import { useState, useEffect } from "react";

// Hook for managing carousel state
export function useCarousel<T>(items: T[], itemsPerPage: number = 1) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  
  const nextPage = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage
    );
  };
  
  const prevPage = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 
        ? Math.max(0, items.length - itemsPerPage)
        : prev - itemsPerPage
    );
  };
  
  const goToPage = (page: number) => {
    const newIndex = page * itemsPerPage;
    setCurrentIndex(Math.min(newIndex, items.length - itemsPerPage));
  };
  
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);
  
  return {
    currentIndex,
    currentPage,
    totalPages,
    visibleItems,
    nextPage,
    prevPage,
    goToPage,
    canGoNext: currentIndex + itemsPerPage < items.length,
    canGoPrev: currentIndex > 0,
  };
}

// Hook for managing scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return scrollPosition;
}

// Hook for managing window size
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
}

// Hook for managing local storage
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };
  
  return [storedValue, setValue] as const;
}

// Hook for managing media queries
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  
  return matches;
}

// Hook for managing dark mode
export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
  return [darkMode, setDarkMode] as const;
}

// Hook for managing async operations
export function useAsync<T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);
  
  const execute = async () => {
    setStatus("pending");
    setValue(null);
    setError(null);
    
    try {
      const response = await asyncFunction();
      setValue(response);
      setStatus("success");
    } catch (error) {
      setError(error as E);
      setStatus("error");
    }
  };
  
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]);
  
  return { execute, status, value, error };
}
