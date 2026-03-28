import Image from "next/image";
import OptimizedImage from "./ui/OptimizedImage";

const visuals = {
  closing: "https://picsum.photos/seed/article-closing/900/900",
};

const accentTextStyle = {
  background: "linear-gradient(135deg,#AD54F0,#D24DBC)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function ChasingMorocco() {
  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      {/* Title - responsive sizing */}
      <h2 className="text-center font-serif text-[22px] font-bold text-[#1A1A2E] 
        sm:text-[26px] 
        md:text-[28px] 
        lg:text-[32px]">
       Closing: Morocco as a Photographic Teacher
      </h2>

      {/* Content layout - responsive */}
      <div className="mt-8 flex flex-col items-center gap-8 
        sm:mt-10 sm:gap-10 
        md:gap-12 
        lg:flex-row lg:items-center lg:gap-14">
        
        {/* Left: body text - responsive sizing */}
        <div className="flex-1 space-y-3 text-[13px] leading-[1.7] text-[#4B4B6A] 
          sm:space-y-4 sm:text-[14px] sm:leading-[1.8] 
          md:text-[15px] md:leading-[1.9]">
          <p>
            Morocco is more than a destination — it&apos;s a teacher. The country doesn&apos;t just offer beautiful scenes; it changes how you see them. It slows you down, sharpens your patience, and shows you that the best photographs often come not from seeking subjects, but from waiting for moments to reveal themselves.
          </p>
          <p>
            More than anything, Morocco teaches the photographer how to notice. It asks you to wait for gesture, trust texture, and understand that the emotional center of an image is often quieter than its brightest color.
          </p>

          
          <p>
            When you leave, you take more than photographs. You carry a sharper sense of rhythm — of when to step closer, when to pull back, and when to let a scene breathe. The medinas, markets, and courtyards become lessons in <span style={accentTextStyle}>light, patience, and presence</span>.
          </p>
          <p>
            That is why Morocco lingers. Not only because it is visually beautiful, but because it trains the eye to look with care. And once you have learned that way of seeing, every place after it feels richer.
          </p>
          
          
        </div>

        {/* Right: large oval image - responsive sizing */}
        <div className="relative mx-auto w-[280px] h-[280px] flex-shrink-0 overflow-hidden rounded-[999px] shadow-[0_28px_70px_rgba(26,26,46,0.18)] 
          sm:w-[320px] sm:h-[320px] 
          md:w-[380px] md:h-[350px] 
          lg:w-[460px] lg:h-[340px] 
          xl:w-[480px] xl:h-[360px] ">
          <OptimizedImage 
            src={visuals.closing} 
            alt="Closing Morocco scene" 
            fill 
            className="object-cover" 
            sizes="(max-width:640px) 280px, (max-width:768px) 320px, (max-width:1024px) 380px, 480px" 
          />
        </div>
      </div>
    </section>
  );
}
