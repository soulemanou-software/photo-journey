import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function GradientBanner() {
  return (
    <section className="container-site my-10 md:my-14">
      {/* Rounded gradient card */}
      <div
        className="relative rounded-[28px] md:rounded-[36px] overflow-hidden px-7 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16"
        style={{ background: "linear-gradient(to right, #8F9CD3, #FFCAA4)" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 lg:gap-10">
          {/* ── Text + CTA ── */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif font-bold text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.2] mb-6">
              Before You Scroll: A Quick
              <br />
              Morocco Photography Mindset
            </h2>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-[1.5px] border-white text-white text-[13px] font-semibold tracking-wide hover:bg-white hover:text-[#8F9CD3] transition-all duration-200">
              Discover Photography Tips
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* ── 3 overlapping circles ── */}
          <div className="flex items-center flex-shrink-0">
            {[
              { src: IMAGES.hero.chefchaouen, alt: "Chefchaouen", z: "z-30" },
              { src: IMAGES.hero.marrakechCity, alt: "Marrakech", z: "z-20" },
              { src: IMAGES.hero.moroccoDesert, alt: "Desert", z: "z-10" },
            ].map((img, i) => (
              <div
                key={img.alt}
                className={`relative ${img.z} rounded-full overflow-hidden border-[3px] border-white/50 shadow-xl
                  w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]
                  ${i > 0 ? "-ml-7 sm:-ml-10 md:-ml-12 lg:-ml-14" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 110px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 190px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
