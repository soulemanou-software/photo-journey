import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function FezSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-site">
        {/* Title */}
        <h2 className="font-serif font-bold italic text-[26px] md:text-[32px] lg:text-[40px] text-[#1A1A2E] mb-10 md:mb-14">
          Fez: The City of Detail
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Large portrait image */}
          <div className="w-full lg:w-[46%] flex-shrink-0">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src={IMAGES.fez.main}
                alt="Fez medina archway"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-5">
              Fez is the intellectual and spiritual heart of Morocco. The medina
              — a UNESCO World Heritage site — is the world&apos;s largest
              car-free urban area. Wandering its labyrinthine alleys, you
              encounter centuries of craftsmanship in every doorway, fountain,
              and mosaic wall.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-5">
              For photographers, Fez is an endless treasure. The geometric
              patterns of zellige tilework, the warm glow of brass lanterns in
              dim souks, and the sudden burst of light at the end of a covered
              passage create compositions that feel both timeless and dynamic.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-8">
              The tanneries of Fez present one of Morocco&apos;s most iconic
              photographic subjects — colorful vats of dye arranged in
              honeycombed patterns, with workers moving between them in a
              choreography unchanged for centuries.
            </p>

            {/* Detail image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
              <Image
                src={IMAGES.fez.detail}
                alt="Fez architectural details"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
