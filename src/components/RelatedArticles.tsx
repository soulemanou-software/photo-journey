"use client";

import Image from "next/image";
import { useState } from "react";
import OptimizedImage from "./ui/OptimizedImage";

const relatedPages = [
  [
    { title: "Finding Peace in Sinai: In Morocco's Most Relaxed Family Town", image: "https://picsum.photos/seed/related-1/500/500" },
    { title: "Finding Peace in Sinai: Beyond Family Time", image: "https://picsum.photos/seed/related-2/500/500" },
    { title: "Finding Peace in Simple Rituals Around Fez", image: "https://picsum.photos/seed/related-3/500/500" },
  ],
  [
    { title: "A Chefchaouen Color Diary for Slow Travelers", image: "https://picsum.photos/seed/related-4/500/500" },
    { title: "How Rabat Teaches Quiet Street Photography", image: "https://picsum.photos/seed/related-5/500/500" },
    { title: "Three Courtyards That Changed My Lens", image: "https://picsum.photos/seed/related-6/500/500" },
  ],
  [
    { title: "Markets, Minarets, and the Art of Waiting", image: "https://picsum.photos/seed/related-7/500/500" },
    { title: "A Visual Guide to Morocco's Warmest Light", image: "https://picsum.photos/seed/related-8/500/500" },
    { title: "When the Medina Slows Down After Sunset", image: "https://picsum.photos/seed/related-9/500/500" },
  ],
];

export default function RelatedArticles() {
  const [activePage, setActivePage] = useState(0);
  const page = relatedPages[activePage];

  const prevPage = () => {
    setActivePage((p) => (p - 1 + relatedPages.length) % relatedPages.length);
  };

  const nextPage = () => {
    setActivePage((p) => (p + 1) % relatedPages.length);
  };

  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      {/* Title - responsive sizing */}
      <h2 className="text-center font-serif text-[24px] font-bold text-[#1A1A2E] 
        sm:text-[28px] 
        md:text-[30px]">
        Related Articles
      </h2>
      
      {/* Articles grid - responsive layout */}
      <div className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 gap-6 
          sm:grid-cols-2 sm:gap-8 
          lg:grid-cols-3 lg:gap-8">
          {page.map((article) => (
            <article key={article.title} className="flex flex-col items-center text-center">
              {/* Circular image - responsive sizing */}
              <div className="relative mx-auto h-[180px] w-[160px] overflow-hidden rounded-[999px] shadow-[0_18px_40px_rgba(26,26,46,0.12)] 
                sm:h-[200px] sm:w-[180px] 
                lg:h-[220px] lg:w-[200px]">
                <OptimizedImage 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width:640px) 160px, (max-width:1024px) 180px, 200px" 
                />
              </div>
              
              {/* Article title - responsive sizing */}
              <h3 className="mx-auto mt-4 max-w-[90%] font-serif text-[15px] font-semibold leading-[1.35] text-[#1A1A2E] 
                sm:mt-5 sm:max-w-[240px] sm:text-[16px] 
                lg:text-[17px]">
                {article.title}
              </h3>
              
              {/* Article description - responsive sizing */}
              <p className="mx-auto mt-2 max-w-[85%] text-[11px] leading-[1.7] text-[#4B4B6A] 
                sm:max-w-[240px] sm:text-[12px] sm:leading-[1.75]">
                A slow visual story shaped by medina details, family rituals, and the calm edges of travel.
              </p>
              
              {/* Read more button - responsive sizing */}
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
            </article>
          ))}
        </div>
      </div>
      
      {/* Pagination controls - responsive sizing */}
      <div className="mt-6 flex items-center justify-center gap-4 
        sm:mt-8 sm:gap-6">
        {/* Previous button */}
        <button
          type="button"
          aria-label="Previous related articles"
          onClick={prevPage}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(26,26,46,0.1)] 
            sm:h-[42px] sm:w-[42px]">
          <span className="text-[16px] leading-none text-[#AFAFAF] 
            sm:text-[18px]">‹</span>
        </button>
        
        {/* Page indicators */}
        <div className="flex gap-2">
          {relatedPages.map((_, index) => (
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
        
        {/* Next button */}
        <button
          type="button"
          aria-label="Next related articles"
          onClick={nextPage}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(26,26,46,0.1)] 
            sm:h-[42px] sm:w-[42px]">
          <span className="text-[16px] leading-none text-[#AFAFAF] 
            sm:text-[18px]">›</span>
        </button>
      </div>
    </section>
  );
}
