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
            If Marrakech is a drumbeat, Fez is a whisper—an intricate, intelligent city built for slow looking. It has one of the world’s most complex medinas, where narrow alleys twist into tiny squares, workshops spill into streets, and carved doors appear like secret portals.
What to photograph in Fez.  Medina geometry. Fez’s lanes are a 
dream for <a href="#" className= "text-pink-700">This is an external link</a>                                           this composition.
A simple trick: place your camera at chest height, keep your frame level, and let the city’s architecture do the work. Fez is naturally cinematic.Zellige (tilework) and artisan surfaces. Tiles here aren’t decoration—they’re language. Look for mosaic fountains, courtyard walls, and doorframes. Get close for texture shots and pull back for structure. 

<br/><br/><b>Tip:</b> the smell can be strong—many visitors use mint sprigs offered nearby. Workshop portraits in dramatic light. Craft workshops often have beautiful lighting: beams through small windows, dust floating in the air, warm tones bouncing off wood and metal. If you’re invited in (or given permission), shoot gently. Expose for highlights to keep the “light beam” mood. Capture hands, tools, and faces in partial shadow. Focus on gestures: measuring, cutting, threading, polishing.
          </div>
        
        </div>
        
        {/* Image composition - responsive sizing */}
        <div className="relative flex flex-row gap-1 justify-center align-center mx-auto h-[280px] w-[260px] 
          sm:h-[320px] sm:w-[300px] 
          md:h-[340px] md:w-[320px] 
          lg:h-[390px] lg:w-[390px]">
          
          {/* Main tall image - responsive */}
          <div className="relative h-[240px] w-[165px] overflow-hidden rounded-[999px] shadow-[0_26px_60px_rgba(26,26,46,0.18)] 
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
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full  shadow-[0_24px_55px_rgba(26,26,46,0.16)] 
            sm:top-[80px] sm:h-[132px] sm:w-[132px]  
            md:top-[86px] md:h-[144px] md:w-[144px] 
            lg:top-[92px] lg:h-[156px] lg:w-[156px] ">
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
