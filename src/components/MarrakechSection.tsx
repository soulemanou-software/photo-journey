import Image from "next/image";
import SocialSnippet from "./SocialSnippet";
import OptimizedImage from "./ui/OptimizedImage";

const visuals = {
  marrakechTall: "https://picsum.photos/seed/article-marrakech-tall/700/1100",
  socialOne: "https://picsum.photos/seed/article-social-1/400/400",
  socialTwo: "https://picsum.photos/seed/article-social-2/400/400",
};

const accentTextStyle = {
  background: "linear-gradient(135deg,#AD54F0,#D24DBC)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function MarrakechSection() {
  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      {/* Grid layout - responsive */}
      <div className="grid items-start gap-8 
        sm:gap-10 
        md:gap-12 
        lg:grid-cols-[410px_1fr] lg:gap-14">
        
        {/* Image composition - responsive sizing */}
        <div className="relative mx-auto h-[320px] w-[260px] 
          sm:h-[360px] sm:w-[300px] 
          md:h-[385px] md:w-[320px] 
          lg:h-[440px] lg:w-[380px]">
          
          {/* Main tall image - responsive */}
          <div className="absolute bottom-0 left-0 h-[270px] w-[165px] overflow-hidden rounded-[999px] shadow-[0_26px_60px_rgba(26,26,46,0.18)] 
            sm:h-[300px] sm:w-[185px] 
            md:h-[315px] md:w-[195px] 
            lg:h-[370px] lg:w-[220px]">
            <OptimizedImage 
              src={visuals.marrakechTall} 
              alt="Marrakech at sunset" 
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
              src={visuals.socialOne} 
              alt="Marrakech street scene" 
              fill 
              className="object-cover" 
              sizes="(max-width:640px) 120px, (max-width:768px) 132px, (max-width:1024px) 144px, 156px" 
            />
          </div>
        </div>
        
        {/* Text content - responsive sizing */}
        <div className="max-w-full lg:max-w-[670px]">
          <h2 className="font-serif text-[26px] font-bold leading-[1.1] text-[#1A1A2E] 
            sm:text-[30px] 
            md:text-[32px] 
            lg:text-[34px] lg:leading-[1.08]">
            Marrakech: Heat, Motion, and Magic
          </h2>
          
          {/* Paragraphs - responsive text size and spacing */}
          <div className="mt-4 space-y-3 text-[13px] leading-[1.7] text-[#4B4B6A] 
            sm:mt-5 sm:space-y-4 sm:text-[14px] sm:leading-[1.8] 
            md:text-[15px] md:leading-[1.9]">
            <p>
              Marrakech moves differently from Fez. The energy is louder, the colors are warmer, and the streets feel more like stages. From the storytellers of Jemaa el-Fnaa to the hidden courtyards where time slows, Marrakech teaches you to photograph <span style={accentTextStyle}>in motion</span>.
            </p>
            <p>
              Here, the light is bold. It bounces off terracotta, filters through archways, and turns simple market scenes into visual theater. Photographing Marrakech means embracing chaos, finding patterns within it, and knowing when to stand still while everything else moves.
            </p>
            <p>
              What makes Marrakech special is the rhythm. It&apos;s a city that alternates between intense activity and sudden quiet. The best photographs capture that tension — the calm within the noise, the order within the chaos.
            </p>
          </div>
          
          {/* Social snippets - responsive spacing */}
          <div className="mt-5 space-y-3 
            sm:mt-6 sm:space-y-4 
            md:mt-7">
            <SocialSnippet 
              platform="youtube" 
              title="The medina at dusk — every shadow tells a story." 
              handle="@urban_spirits_ma" 
              image={visuals.socialOne} 
            />
            <SocialSnippet 
              platform="instagram" 
              title="Lost in the souks. Found in the light." 
              handle="@mustapha.lens" 
              image={visuals.socialTwo} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
