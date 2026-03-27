import Image from "next/image";
import { AUTHOR } from "@/lib/constants";
import OptimizedImage from "./ui/OptimizedImage";

const visuals = {
  behindCard: "https://picsum.photos/seed/article-behind-card/500/500",
};

export default function BehindTheLens() {
  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      {/* Title - responsive sizing */}
      <h2 className="text-center font-serif text-[24px] font-bold text-[#1A1A2E] 
        sm:text-[26px] 
        md:text-[28px] 
        lg:text-[30px]">
        Behind The Lens
      </h2>
      
      {/* Content grid - responsive layout */}
      <div className="mt-8 grid items-start gap-8 
        sm:mt-10 sm:gap-10 
        md:grid-cols-1 md:gap-12 
        lg:grid-cols-[420px_1fr] lg:gap-14">
        
        {/* Location card - responsive sizing */}
        <div className="rounded-[16px] p-[0.5px] shadow-[0_18px_50px_rgba(26,26,46,0.08)] 
          sm:rounded-[20px] 
          md:rounded-[24px]" 
          style={{ background: "linear-gradient(135deg,#8F9CD3,#FFCAA4)" }}>
          <div className="flex items-start gap-3 rounded-[16px] bg-white p-3 
            sm:gap-4 sm:p-4 
            md:rounded-[24px]">
            
            {/* Play button - responsive size */}
           
            
            {/* Text content - responsive sizing */}
            <div className="min-w-0 flex-1">
                  <div className="flex flex-row gap-1 text-center justify-start align-center ">
               <div className="mt-1 flex h-4 w-8 flex-shrink-0 items-center justify-center rounded-md drop-shadow-md bg-[#FF2E2E] text-white 
              sm:h-6 sm:w-9">
     
               <span className="ml-0.5 text-[10px] font-bold 
                sm:text-[11px]">▶</span>
               
           
  
           </div>
             <span className="text-[1rem] font-normal text-[#1A1A2E] 
                sm:text-[2rem] md:text-[1.5rem]">YouTube</span>
           </div>
              <p className="text-sm leading-[0.5] text-[#4B4B6A] 
                sm:text-sm sm:leading-[1.6]">
                  <b className="text-center sm:text-lg font-serif text-[1.5rem] font-bold text-black">Essential Viewing: Capturing magic moments</b><br/>
              Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.
               </p>
            </div>
            
            {/* Image - responsive size */}
            <div className="relative h-lg w-[80px] flex-shrink-0 overflow-hidden rounded-full 
              sm:h-lg sm:w-[92px] sm:rounded-full">
              <OptimizedImage 
                src={visuals.behindCard} 
                alt="Behind the lens" 
                fill 
                className="object-cover" 
                sizes="(max-width:640px) 80px, 82px" 
              />
            </div>
          </div>
        </div>
        
        {/* Main text content - responsive sizing */}
        <div className="max-w-full text-[13px] leading-[1.7] text-[#4B4B6A] 
          sm:text-[14px] sm:leading-[1.8] 
          md:max-w-[670px] md:text-[15px] md:leading-[1.9]">
          <p>
          Imperial cities are like living museums. Ancient walls and modern sneakers.Donkey carts beside scooters. Centuries-old craft tools next to QR-code payments. Don’t try to remove those contrasts. Use them to tell the truth of the place. The most powerful <a href="#" className="text-pink-700">This is an internal link.</a>                                          travel images show time stacked on time.
          </p>
          <p className="mt-3 sm:mt-4">
            
<b>Respect comes before the shot</b><br/>
If you want portraits, ask politely. A smile, a greeting, and a short gesture are often enough. In Morocco, some people enjoy being photographed, others don’t—and that’s completely fair. If someone says no (or looks uncomfortable), step away. You’ll still find incredible photos everywhere, and the images you do capture will feel lighter because they were taken with respect.

           </p>
        </div>
      </div>
    </section>
  );
}