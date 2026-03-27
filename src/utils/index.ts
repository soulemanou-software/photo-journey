// Format date to readable string
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate responsive image sizes
export function getResponsiveImageSizes(
  baseWidth: number,
  breakpoints?: { sm?: number; md?: number; lg?: number; xl?: number }
): string {
  const { sm = 640, md = 768, lg = 1024, xl = 1280 } = breakpoints || {};
  
  return `(max-width: ${sm}px) ${Math.min(baseWidth, sm)}px, (max-width: ${md}px) ${Math.min(baseWidth, md)}px, (max-width: ${lg}px) ${Math.min(baseWidth, lg)}px, ${baseWidth}px`;
}

// Debounce function for search/input optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Generate slug from string
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Calculate reading time based on word count
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

// Generate random ID for unique keys
export function generateId(prefix: string = "id"): string {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

// Check if element is in viewport
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Smooth scroll to element
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
