import Image from "next/image";
import { AUTHOR, IMAGES } from "@/lib/constants";

const SOCIALS = [
  {
    id: "facebook",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "link",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="container-site pt-10 pb-6 md:pt-14 md:pb-10 lg:pt-16 lg:pb-14">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-8">
        {/* ── Left: text content ── */}
        <div className="flex-1 min-w-0">
          {/* Pill badge */}
          <span className="inline-flex items-center px-4 py-[6px] rounded-full text-[11px]  text-black  mb-6"
           style={{ background: "linear-gradient(to right, #8F9CD3, #FFCAA4)" }}>
            Photo &amp; Journey
          </span>

          {/* Title */}
          <h1 className="font-serif font-bold text-[32px] sm:text-[40px] lg:text-[52px] xl:text-[58px] leading-[1.08] tracking-[-0.02em] text-[#1A1A2E] mb-5">
            Through the Lens:{" "}
            <br className="hidden sm:block" />
            Morocco&apos;s Imperial Cities
          </h1>

          {/* Description */}
          <p className="text-[14px] md:text-[15px] text-[#4B4B6A] leading-[1.75] max-w-[560px] mb-7">
            A photographic journey through Morocco&apos;s four imperial cities —
            Fez, Marrakech, Meknes, and Rabat — discovering the art of light,
            color, and centuries-old architecture through a modern lens.
          </p>

          {/* Author row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                <Image src={AUTHOR.avatar} alt={AUTHOR.name} fill className="object-cover" sizes="36px" />
              </div>
              <span className="text-[13px] font-semibold text-[#1A1A2E]">{AUTHOR.name}</span>
            </div>
            <span className="text-[#D0D0E0] text-sm">|</span>
            <span className="text-[12px] text-[#9090A8]">{AUTHOR.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#D0D0E0]" />
            <span className="text-[12px] text-[#9090A8]">{AUTHOR.readTime}</span>
          </div>

          {/* Social share */}
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <button
                key={s.id}
                aria-label={`Share on ${s.id}`}
                className="w-8 h-8 rounded-full bg-[#F3F3F7] hover:bg-[#E8E8F2] text-[#4B4B6A] flex items-center justify-center transition-colors duration-150"
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: circular hero image ── */}
        <div className="relative flex-shrink-0 self-start lg:self-center mx-auto lg:mx-0">
          {/* Outer gradient ring */}
          <div
            className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full p-[5px]"
            style={{ background: "linear-gradient(135deg, #8F9CD3, #FFCAA4)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={IMAGES.hero.chefchaouen}
                alt="Morocco aerial view"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
                priority
              />
            </div>
          </div>
          {/* Small decorative circle */}
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 rounded-md p-[3px] shadow-lg"
            style={{ background: "linear-gradient(135deg, #AD54F0, #D24DBC)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={IMAGES.hero.moroccoDesert}
                alt="Morocco landscape"
                fill
                className="object-cover rounded-full"
                sizes="96px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
