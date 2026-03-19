import Image from "next/image";
import { IMAGES, AUTHOR } from "@/lib/constants";

const SMALL_CIRCLES = [
  { src: IMAGES.behindTheLens.moroccanDoor, alt: "Moroccan doorway" },
  { src: IMAGES.behindTheLens.blueStreet, alt: "Blue streets" },
  { src: IMAGES.behindTheLens.minaret, alt: "Moroccan minaret" },
];

export default function BehindTheLens() {
  return (
    <section className="container-site py-14 md:py-20">
      {/* ── Section heading ── */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-serif font-bold text-[26px] md:text-[32px] lg:text-[38px] text-[#1A1A2E]">
          Behind The Lens
        </h2>
        <div className="section-divider" />
      </div>

      {/* ── Author / play bar ── */}
      <div className="flex flex-wrap items-center gap-3 mb-10 md:mb-12">
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-sm">
          <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
          <Image src={AUTHOR.avatar} alt={AUTHOR.name} fill className="object-cover" sizes="28px" />
        </div>
        <p className="text-[13px] text-[#4B4B6A]">
          <span className="font-semibold text-[#1A1A2E]">{AUTHOR.name}</span>
          {" · "}Travel Photographer · Editorial
        </p>
      </div>

      {/* ── Two-column: small circles + text left / large circle right ── */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* 3 small circles */}
          <div className="flex items-center gap-4 sm:gap-6">
            {SMALL_CIRCLES.map((c) => (
              <div
                key={c.alt}
                className="relative rounded-full overflow-hidden shadow-md flex-shrink-0
                  w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px]"
              >
                <Image src={c.src} alt={c.alt} fill className="object-cover" sizes="130px" />
              </div>
            ))}
          </div>
          {/* Description */}
          <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.8] max-w-[540px]">
            Morocco is a country that demands you slow down and look closer.
            Every wall, tile, doorway, and alley holds a story — and photographing
            it means learning to see the unseen. The light shifts throughout the day,
            transforming ancient medinas from warm golden tones at dawn to deep
            violet shadows at dusk.
          </p>
        </div>

        {/* Right: large sunset circle */}
        <div
          className="relative flex-shrink-0 rounded-full overflow-hidden shadow-xl
            w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]"
        >
          <Image
            src={IMAGES.behindTheLens.sunset}
            alt="Moroccan sunset"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
          />
        </div>
      </div>
    </section>
  );
}
