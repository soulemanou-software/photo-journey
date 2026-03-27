import Image from "next/image";
import OptimizedImage from "./ui/OptimizedImage";

const visuals = {
  fezTall: "https://picsum.photos/seed/article-fez-tall/700/1000",
  fezMini: "https://picsum.photos/seed/article-fez-mini/500/500",
};

export default function FezSection() {
  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      {/* Grid layout - responsive */}
      <div className="grid items-center gap-8 
        sm:gap-10 
        md:gap-12 
        lg:grid-cols-[1fr_410px] lg:gap-14">
        
        {/* Text content - responsive sizing */}
        <div className="max-w-full lg:max-w-[670px]">
          <h2 className="font-serif text-[26px] font-bold leading-[1.1] text-[#1A1A2E] 
            sm:text-[30px] 
            md:text-[32px] 
            lg:text-[34px] lg:leading-[1.08]">
            Fez: The City of Detail
          </h2>
          
          {/* Paragraphs - responsive text size and spacing */}
          <div className="mt-4 space-y-3 text-[13px] leading-[1.7] text-[#4B4B6A] 
            sm:mt-5 sm:space-y-4 sm:text-[14px] sm:leading-[1.8] 
            md:text-[15px] md:leading-[1.9]">
            <p>
              Fez feels less like a place you visit and more like a place you decode. The medina opens through fragments — a brass lantern in a shadowed stall, a wall of mosaic suddenly catching the sun, a carved arch that seems to hold centuries of quiet craftsmanship in a single frame.
            </p>
            <p>
              Photographing Fez means paying attention to repetition and interruption. Pattern is everywhere, but the images that stay with you are the ones where a person, a gesture, or a sliver of moving light breaks that pattern for just a second.
            </p>
            <p>
              The city teaches detail as discipline. Not everything needs to be wide. Sometimes the strongest photograph is simply a doorway, a curve of stone, or the soft shift from blue shadow into warm afternoon color.
            </p>
          </div>
          
          {/* Decorative line - responsive width */}
          <div className="mt-4 h-[1px] w-[150px] rounded-full 
            sm:mt-5 sm:h-[1.2px] sm:w-[170px] 
            md:w-[190px]" 
            style={{ background: "linear-gradient(90deg,#AD54F0,#D24DBC)" }} />
        </div>
        
        {/* Image composition - responsive sizing */}
        <div className="relative mx-auto h-[280px] w-[260px] 
          sm:h-[320px] sm:w-[300px] 
          md:h-[340px] md:w-[320px] 
          lg:h-[390px] lg:w-[390px]">
          
          {/* Main tall image - responsive */}
          <div className="absolute bottom-0 left-0 h-[240px] w-[165px] overflow-hidden rounded-[999px] shadow-[0_26px_60px_rgba(26,26,46,0.18)] 
            sm:h-[270px] sm:w-[185px] 
            md:h-[285px] md:w-[195px] 
            lg:h-[330px] lg:w-[220px]">
            <OptimizedImage 
              src={visuals.fezTall} 
              alt="Fez at sunset" 
              fill 
              className="object-cover" 
              sizes="(max-width:640px) 165px, (max-width:768px) 185px, (max-width:1024px) 195px, 220px" 
              style={{ filter: "saturate(1.08)" }} 
            />
          </div>
          
          {/* Small circular image - responsive */}
          <div className="absolute right-0 top-[70px] h-[120px] w-[120px] overflow-hidden rounded-full border-[4px] border-white shadow-[0_24px_55px_rgba(26,26,46,0.16)] 
            sm:top-[80px] sm:h-[132px] sm:w-[132px] sm:border-[5px] 
            md:top-[86px] md:h-[144px] md:w-[144px] 
            lg:top-[92px] lg:h-[156px] lg:w-[156px] lg:border-[6px]">
            <OptimizedImage 
              src={visuals.fezMini} 
              alt="Fez street scene" 
              fill 
              className="object-cover" 
              sizes="(max-width:640px) 120px, (max-width:768px) 132px, (max-width:1024px) 144px, 156px" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
