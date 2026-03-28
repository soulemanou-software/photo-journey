"use client";

import Image from "next/image";
import React, { useState } from "react";
import OptimizedImage from "./ui/OptimizedImage";

const allArticles = [
  { title: "Finding Peace in Sinai: In Morocco's Most Relaxed Family Town", image: "https://picsum.photos/seed/related-1/500/500" },
  { title: "Finding Peace in Sinai: Beyond Family Time", image: "https://picsum.photos/seed/related-2/500/500" },
  { title: "Finding Peace in Simple Rituals Around Fez", image: "https://picsum.photos/seed/related-3/500/500" },
  { title: "A Chefchaouen Color Diary for Slow Travelers", image: "https://picsum.photos/seed/related-4/500/500" },
  { title: "How Rabat Teaches Quiet Street Photography", image: "https://picsum.photos/seed/related-5/500/500" },
  { title: "Three Courtyards That Changed My Lens", image: "https://picsum.photos/seed/related-6/500/500" },
  { title: "Markets, Minarets, and the Art of Waiting", image: "https://picsum.photos/seed/related-7/500/500" },
  { title: "A Visual Guide to Morocco's Warmest Light", image: "https://picsum.photos/seed/related-8/500/500" },
  { title: "When the Medina Slows Down After Sunset", image: "https://picsum.photos/seed/related-9/500/500" },
];

export default function RelatedArticles() {
  const [activePage, setActivePage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  React.useEffect(() => {
    setActivePage(0);
  }, [isMobile]);

  const getCurrentPageData = () => {
    const currentIsMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
    
    if (currentIsMobile) {
      const articleIndex = activePage % allArticles.length;
      return [allArticles[articleIndex]];
    } else {
      const pageIndex = activePage % 3;
      const startIndex = pageIndex * 3;
      return allArticles.slice(startIndex, startIndex + 3);
    }
  };

  const getTotalPages = () => {
    const currentIsMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
    return currentIsMobile ? allArticles.length : 3;
  };

  const prevPage = () => {
    setActivePage((p) => (p - 1 + getTotalPages()) % getTotalPages());
  };

  const nextPage = () => {
    setActivePage((p) => (p + 1) % getTotalPages());
  };

  const page = getCurrentPageData();

  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      <h2 className="text-center font-serif text-[24px] font-bold text-[#1A1A2E] 
        sm:text-[28px] 
        md:text-[30px]">
        Related Articles
      </h2>
      
      <div className="mt-8 sm:mt-10 relative">
        <button
          type="button"
          aria-label="Previous related articles"
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(26,26,46,0.1)] 
            sm:-translate-x-full sm:h-[42px] sm:w-[42px] 
            lg:translate-x-12">
          <span className="text-[16px] leading-none text-[#AFAFAF] 
            sm:text-[18px]">‹</span>
        </button>
        
        <button
          type="button"
          aria-label="Next related articles"
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(26,26,46,0.1)] 
            sm:translate-x-full sm:h-[42px] sm:w-[42px] 
            lg:translate-x-12">
          <span className="text-[16px] leading-none text-[#AFAFAF] 
            sm:text-[18px]">›</span>
        </button>
        
        <div className="mx-auto px-12 
          sm:px-16 
          lg:px-20">
          <div className="flex flex-col gap-6 
            sm:grid sm:grid-cols-3 sm:gap-8 
            lg:grid lg:grid-cols-3 lg:gap-8">
            {page.map((article) => (
              <article key={article.title} className="flex flex-row items-center justify-center gap-6 text-center sm:flex-col sm:items-center sm:gap-0">
                <div className="relative mx-auto h-[180px] w-[220px] overflow-hidden rounded-[999px] shadow-[0_18px_40px_rgba(26,26,46,0.12)] 
                  sm:h-[200px] sm:w-[250px] 
                  lg:h-[220px] lg:w-[280px]">
                  <OptimizedImage 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width:640px) 220px, (max-width:1024px) 250px, 280px" 
                  />
                </div>
                
                <div className="flex flex-col items-start text-left max-w-[200px] sm:items-center sm:text-center sm:max-w-none">
                  <h3 className="font-serif text-[15px] font-semibold leading-[1.35] text-[#1A1A2E] 
                    sm:mt-5 sm:mx-auto sm:max-w-[240px] sm:text-[16px] sm:text-center
                    lg:text-[17px]">
                    {article.title}
                  </h3>
                  
                  <p className="mt-2 text-[11px] leading-[1.7] text-[#4B4B6A] 
                    sm:mx-auto sm:max-w-[240px] sm:text-[12px] sm:leading-[1.75] sm:text-center">
                    A slow visual story shaped by medina details, family rituals, and the calm edges of travel.
                  </p>
                  
                  <button 
                    type="button" 
                    className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold 
                    sm:text-[12px]" 
                    style={{ color: "#AD54F0" }}>
                    Read more
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-center gap-2 
        sm:mt-8">
        {Array.from({ length: getTotalPages() }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show related article page ${index + 1}`}
            onClick={() => setActivePage(index)}
            className={`h-[12px] w-[12px] rounded-full transition-all duration-200 
              sm:h-[15px] sm:w-[15px] 
              ${activePage === index ? "bg-[#8F9CD3]" : "bg-[#8F9CD3]/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
