import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function ChasingMorocco() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif font-bold italic text-[26px] md:text-[32px] lg:text-[40px] text-[#1A1A2E] leading-[1.2]">
            Chasing Morocco as a
            <br />
            Photographic Teacher
          </h2>
        </div>

        {/* Two-column: text left + large circle right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: body text */}
          <div className="flex-1 order-2 lg:order-1">
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-5">
              Morocco is more than a destination — it&apos;s a masterclass in
              visual storytelling. Every city, every medina, every mountain pass
              offers lessons in composition, light, and the art of seeing beauty
              in complexity.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-5">
              The country challenges photographers to move beyond the obvious
              postcard shot and find deeper narratives. It teaches patience, as
              the best light often comes to those who wait. It teaches respect, as
              the most powerful portraits come from genuine human connection.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85]">
              And it teaches humility, as no photograph can fully capture the
              sensory richness of standing in a Moroccan medina at golden hour.
              Morocco doesn&apos;t just teach you to take better photos — it
              teaches you to see better.
            </p>
          </div>

          {/* Right: large centered circle */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div
              className="relative rounded-full overflow-hidden shadow-xl
                w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]"
            >
              <Image
                src={IMAGES.chasing.riad}
                alt="Chasing Morocco — a narrow alley scene"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
