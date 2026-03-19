import Image from "next/image";
import { IMAGES, AUTHOR } from "@/lib/constants";

interface SocialPostCardProps {
  platform: "youtube" | "instagram";
  user: string;
  handle: string;
  caption: string;
  thumbnail: string;
}

function SocialPostCard({ platform, user, handle, caption, thumbnail }: SocialPostCardProps) {
  const isYoutube = platform === "youtube";
  return (
    <div className="flex items-start gap-3 bg-white rounded-2xl border border-[#F0F0F8] shadow-sm p-4">
      {/* Platform icon */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: isYoutube
            ? "#FF0000"
            : "linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)",
        }}
      >
        {isYoutube ? (
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        )}
      </div>
      {/* Text content */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-[#1A1A2E] leading-tight">{user}</p>
        <p className="text-[11px] text-[#9090A8] mb-1">{handle}</p>
        <p className="text-[12px] text-[#4B4B6A] leading-[1.6] line-clamp-2">{caption}</p>
      </div>
      {/* Thumbnail */}
      <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
        <Image src={thumbnail} alt={user} fill className="object-cover" sizes="56px" />
      </div>
    </div>
  );
}

export default function MarrakechSection() {
  return (
    <section className="py-14 md:py-20 bg-[#F9F9FB]">
      <div className="container-site">
        {/* Title */}
        <h2 className="font-serif font-bold italic text-[26px] md:text-[32px] lg:text-[40px] text-[#1A1A2E] mb-10 md:mb-14">
          Marrakech: Heat, Motion, and Magic!
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Large portrait image */}
          <div className="w-full lg:w-[46%] flex-shrink-0">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src={IMAGES.marrakech.main}
                alt="Marrakech vibrant souk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
          </div>

          {/* Text + small images */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-5">
              Marrakech assaults the senses in the most beautiful way. The
              city&apos;s energy is palpable — from the frenetic Jemaa el-Fnaa
              square to the hushed courtyards of ancient riads. It&apos;s a
              place where every frame tells a story of contrast and
              contradiction.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-5">
              The color palette alone is extraordinary: terracotta walls baking
              under a relentless sun, emerald gardens hidden behind unassuming
              doors, and the infinite spectrum of spices piled high in the
              souks. For a photographer, Marrakech is a masterclass in color
              theory played out in real life.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.85] mb-7">
              What makes Marrakech truly special for photography is the human
              element. Street performers, artisans, merchants — each person
              carries a visual story.
            </p>

            {/* Social post cards */}
            <div className="flex flex-col gap-3">
              <SocialPostCard
                platform="youtube"
                user="Urban Spirits"
                handle="@urban_spirits_ma"
                caption="The medina at dusk — every shadow tells a story. #Marrakech #Photography"
                thumbnail={IMAGES.marrakech.souk}
              />
              <SocialPostCard
                platform="instagram"
                user="Mustapha_"
                handle="@mustapha.lens"
                caption="Lost in the souks. Found in the light. 🕌 #MoroccoTravel"
                thumbnail={IMAGES.marrakech.spices}
              />
            </div>
          </div>
        </div>

        {/* Quote block */}
        <div className="mt-12 md:mt-16 rounded-2xl bg-white border border-[#F0F0F8] shadow-sm p-7 md:p-10">
          <div className="flex gap-5 items-start">
            <svg
              className="w-8 h-8 flex-shrink-0 opacity-30 mt-1"
              fill="url(#qg)"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="qg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#AD54F0" />
                  <stop offset="100%" stopColor="#D24DBC" />
                </linearGradient>
              </defs>
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div>
              <p className="font-serif italic text-[16px] md:text-[18px] text-[#1A1A2E] leading-[1.7]">
                &ldquo;Morocco doesn&apos;t just teach you to take better photos
                — it teaches you to see better. Every shadow has depth, every
                color has meaning, and every moment is an invitation to look
                closer.&rdquo;
              </p>
              <p className="mt-4 text-[12px] text-[#9090A8] font-sans">
                — {AUTHOR.name}, {AUTHOR.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
