"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AUTHOR, FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

const accentTextStyle = {
  background: "linear-gradient(135deg,#AD54F0,#D24DBC)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const heroTags = [
  { label: "Adventures", className: "bg-white border border-[#E7E8F2] text-[#4B4B6A]" },
  { label: "Solo", className: "bg-[#F4F5FA] text-[#4B4B6A]" },
  { label: "Africa", className: "text-white" },
];

const visuals = {
  heroMain: "https://picsum.photos/seed/article-hero-main/900/900",
  heroMini: "https://picsum.photos/seed/article-hero-mini/500/500",
  behindCard: "https://picsum.photos/seed/article-behind-card/500/500",
  fezTall: "https://picsum.photos/seed/article-fez-tall/700/1000",
  fezMini: "https://picsum.photos/seed/article-fez-mini/500/500",
  marrakechTall: "https://picsum.photos/seed/article-marrakech-tall/700/1100",
  socialOne: "https://picsum.photos/seed/article-social-1/400/400",
  socialTwo: "https://picsum.photos/seed/article-social-2/400/400",
  closing: "https://picsum.photos/seed/article-closing/900/900",
};

const relatedPages = [
  [
    { title: "Finding Peace in Sinai: In Morocco's Most Relaxed Family Town", image: "https://picsum.photos/seed/related-1/500/500" },
    { title: "Finding Peace in Sinai: Beyond Family Time", image: "https://picsum.photos/seed/related-2/500/500" },
    { title: "Finding Peace in Simple Rituals Around Fez", image: "https://picsum.photos/seed/related-3/500/500" },
  ],
  [
    { title: "A Chefchaouen Color Diary for Slow Travelers", image: "https://picsum.photos/seed/related-4/500/500" },
    { title: "How Rabat Teaches Quiet Street Photography", image: "https://picsum.photos/seed/related-5/500/500" },
    { title: "Three Courtyards That Changed My Lens", image: "https://picsum.photos/seed/related-6/500/500" },
  ],
  [
    { title: "Markets, Minarets, and the Art of Waiting", image: "https://picsum.photos/seed/related-7/500/500" },
    { title: "A Visual Guide to Morocco's Warmest Light", image: "https://picsum.photos/seed/related-8/500/500" },
    { title: "When the Medina Slows Down After Sunset", image: "https://picsum.photos/seed/related-9/500/500" },
  ],
];

function SocialSnippet({ platform, title, handle, image }: { platform: string; title: string; handle: string; image: string }) {
  const instagram = platform === "instagram";
  return (
    <div className="rounded-[22px] p-[0.5px] shadow-[0_18px_50px_rgba(26,26,46,0.08)]" style={{ background: "linear-gradient(135deg,#8F9CD3,#FFCAA4)" }}>
      <div className="flex items-start gap-3 rounded-[22px] bg-white p-4">
        <div
          className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: instagram ? "linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)" : "#FF2E2E" }}
        >
          <span className="text-[11px] font-bold uppercase">{instagram ? "ig" : "yt"}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-semibold text-[#1A1A2E]">{platform}</p>
          <p className="mb-1 text-[11px] text-[#9090A8]">{handle}</p>
          <p className="text-[12px] leading-[1.6] text-[#4B4B6A]">{title}</p>
        </div>
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-[16px]">
          <Image src={image} alt={title} fill className="object-cover" sizes="56px" />
        </div>
      </div>
    </div>
  );
}

export default function ArticlePage() {
  const [activePage, setActivePage] = useState(0);

  const prevPage = () => setActivePage((p) => Math.max(0, p - 1));
  const nextPage = () => setActivePage((p) => Math.min(relatedPages.length - 1, p + 1));

  return (
    <div className="relative overflow-hidden bg-white text-[#1A1A2E]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-44 right-[-120px] h-[680px] w-[680px] rounded-full blur-[120px]" style={{ background: "#8BB5FF", opacity: 0.22 }} />
        <div className="absolute top-[-80px] left-[17%] h-[520px] w-[520px] rounded-full blur-[100px]" style={{ background: "#FFD596", opacity: 0.22 }} />
        <div className="absolute top-[80px] right-[10%] h-[480px] w-[480px] rounded-full blur-[110px]" style={{ background: "#9791EC", opacity: 0.18 }} />
        <div className="absolute top-[760px] right-[-120px] h-[820px] w-[820px] rounded-full blur-[140px]" style={{ background: "#FBE8DA", opacity: 0.52 }} />
      </div>

      <main className="relative z-10">
        <div className="container-site pt-6 md:pt-8 lg:pt-10">
          <div className="flex items-center justify-between gap-4 text-[12px] text-[#4B4B6A]">
            <Link href="/" className="inline-flex items-center gap-2 hover:text-[#1A1A2E]">
              <span className="text-[14px]">←</span>
              <span>Back to all articles</span>
            </Link>
            <button type="button" className="rounded-full bg-[#12141B] px-4 py-2 font-medium text-white shadow-[0_10px_30px_rgba(18,20,27,0.18)]">
              Share article
            </button>
          </div>

          <section className="pb-16 pt-8 md:pb-20 md:pt-12 lg:pb-24 lg:pt-14">
            <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="max-w-[620px]">
                <span className="inline-flex rounded-full bg-[#EFF0FA] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7D74B8]">
                  Travel Photography
                </span>
                <h1 className="mt-6 font-serif text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-[#1A1A2E] md:text-[48px] lg:text-[58px]">
                  Through the Lens:
                  <br />
                  Morocco&apos;s Imperial Cities
                </h1>
                <p className="mt-5 max-w-[560px] text-[14px] leading-[1.8] text-[#4B4B6A] md:text-[15px]">
                  A photographic journey through Morocco&apos;s layered medinas, quiet riads, and sun-washed courtyards — following color, texture, and light from Fez to Marrakech.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  {heroTags.map((tag, index) => (
                    <span
                      key={tag.label}
                      className={`inline-flex rounded-full px-4 py-[9px] text-[12px] font-medium ${tag.className}`}
                      style={index === 2 ? { background: "linear-gradient(135deg,#AD54F0,#D24DBC)" } : undefined}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#9090A8]">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src={AUTHOR.avatar} alt={AUTHOR.name} fill className="object-cover" sizes="32px" />
                  </div>
                  <span className="font-semibold text-[#1A1A2E]">{AUTHOR.name}</span>
                  <span className="h-1 w-1 rounded-full bg-[#D2D3E2]" />
                  <span>{AUTHOR.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#D2D3E2]" />
                  <span>{AUTHOR.readTime}</span>
                </div>
              </div>

              <div className="relative mx-auto min-h-[430px] w-full max-w-[470px] lg:min-h-[500px] lg:max-w-none">
                <div className="absolute right-0 top-0 h-[430px] w-[430px] rounded-full bg-[#F5F6FB] lg:h-[470px] lg:w-[470px]" />
                <div className="absolute right-[58px] top-[18px] h-[255px] w-[255px] overflow-hidden rounded-full shadow-[0_30px_70px_rgba(38,67,104,0.18)] lg:right-[66px] lg:h-[275px] lg:w-[275px]">
                  <Image src={visuals.heroMain} alt="Morocco rooftops" fill className="object-cover" sizes="275px" style={{ filter: "saturate(1.15) hue-rotate(150deg) brightness(1.02)" }} priority />
                  <div className="absolute bottom-[26px] left-[36px] rotate-[-10deg] rounded-[18px] border border-white/35 bg-white/18 px-4 py-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/85">Blue alley light</p>
                    <p className="mt-1 text-[12px] font-medium">Chefchaouen frames</p>
                  </div>
                </div>
                <div className="absolute right-[102px] top-[266px] h-[126px] w-[126px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_24px_50px_rgba(26,26,46,0.16)] lg:right-[114px] lg:h-[136px] lg:w-[136px]">
                  <Image src={visuals.heroMini} alt="Morocco street detail" fill className="object-cover" sizes="136px" />
                  <div className="absolute left-1/2 top-[44px] -translate-x-1/2 rotate-[9deg] rounded-[16px] border border-white/30 bg-[#2A2B33]/30 px-3 py-2 text-center text-white backdrop-blur-md">
                    <p className="text-[9px] uppercase tracking-[0.14em] text-white/80">Medina note</p>
                    <p className="mt-0.5 text-[10px] font-medium">stone + shadow</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="container-site pb-16 md:pb-20 lg:pb-24">
          <div className="mx-auto max-w-[840px] rounded-[999px] px-8 py-12 text-center text-white shadow-[0_40px_80px_rgba(143,156,211,0.18)] md:px-12 md:py-14 lg:px-16 lg:py-16" style={{ background: "linear-gradient(90deg,#8F9CD3 0%,#FFCAA4 100%)" }}>
            <h2 className="font-serif text-[28px] font-bold leading-[1.2] md:text-[34px]">Before You Shoot: A Quick Morocco Photography Mindset</h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-[1.8] text-white/92">
              Before the shutter clicks, Morocco asks for patience. The best frames reveal themselves slowly — in reflected tiles, open thresholds, and the pause between movement and stillness.
            </p>
            <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-[1.8] text-white/92">
              Let <span className="font-semibold" style={accentTextStyle}>light, texture, and silence</span> guide you before composition does.
            </p>
            <button type="button" className="mt-7 rounded-full bg-white px-6 py-3 text-[12px] font-semibold text-[#1A1A2E] shadow-[0_18px_40px_rgba(255,255,255,0.22)]">
              Discover Photography Tips
            </button>
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20 lg:pb-24">
          <h2 className="text-center font-serif text-[30px] font-bold text-[#1A1A2E]">Behind The Lens</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
            <div className="rounded-[24px] p-[0.5px] shadow-[0_18px_50px_rgba(26,26,46,0.08)]" style={{ background: "linear-gradient(135deg,#8F9CD3,#FFCAA4)" }}>
            <div className="flex items-start gap-4 rounded-[24px] bg-white p-4">
              <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FF2E2E] text-white">
                <span className="ml-0.5 text-[11px] font-bold">▶</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-semibold text-[#1A1A2E]">On Location</p>
                <p className="mb-1 text-[11px] text-[#9090A8]">with {AUTHOR.name}</p>
                <p className="text-[12px] leading-[1.6] text-[#4B4B6A]">Following the medina, one doorway at a time, and learning how shadow can shape the whole story of a frame.</p>
              </div>
              <div className="relative h-[92px] w-[92px] flex-shrink-0 overflow-hidden rounded-[20px]">
                <Image src={visuals.behindCard} alt="Behind the lens" fill className="object-cover" sizes="92px" />
              </div>
            </div>
            </div>
            <div className="max-w-[670px] text-[14px] leading-[1.9] text-[#4B4B6A] md:text-[15px]">
              <p>Morocco rewards the photographer who slows down. In every city, the subject is never only the architecture — it is the relationship between people, stone, sunlight, and time. You notice it in the way tilework softens a shadow, in the way a doorway frames a passing figure, and in the quiet rhythm of a courtyard before the crowd arrives.</p>
              <p className="mt-4">This article is not a checklist of landmarks. It is a visual journal shaped by observation — a record of how Fez and Marrakech taught me to read texture, wait for stillness, and trust subtle details over obvious spectacle.</p>
              <div className="mt-5 h-[1.2px] w-[190px] rounded-full" style={{ background: "linear-gradient(90deg,#AD54F0,#D24DBC)" }} />
            </div>
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20 lg:pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_410px] lg:gap-14">
            <div className="max-w-[670px]">
              <h2 className="font-serif text-[34px] font-bold leading-[1.08] text-[#1A1A2E]">Fez: The City of Detail</h2>
              <div className="mt-6 space-y-4 text-[14px] leading-[1.9] text-[#4B4B6A] md:text-[15px]">
                <p>Fez feels less like a place you visit and more like a place you decode. The medina opens through fragments — a brass lantern in a shadowed stall, a wall of mosaic suddenly catching the sun, a carved arch that seems to hold centuries of quiet craftsmanship in a single frame.</p>
                <p>Photographing Fez means paying attention to repetition and interruption. Pattern is everywhere, but the images that stay with you are the ones where a person, a gesture, or a sliver of moving light breaks that pattern for just a second.</p>
                <p>The city teaches detail as discipline. Not everything needs to be wide. Sometimes the strongest photograph is simply a doorway, a curve of stone, or the soft shift from blue shadow into warm afternoon color.</p>
              </div>
              <div className="mt-5 h-[1.2px] w-[190px] rounded-full" style={{ background: "linear-gradient(90deg,#AD54F0,#D24DBC)" }} />
            </div>
            <div className="relative mx-auto h-[360px] w-[340px] lg:h-[390px] lg:w-[390px]">
              <div className="absolute bottom-0 left-0 h-[300px] w-[205px] overflow-hidden rounded-[999px] shadow-[0_26px_60px_rgba(26,26,46,0.18)] lg:h-[330px] lg:w-[220px]">
                <Image src={visuals.fezTall} alt="Fez at sunset" fill className="object-cover" sizes="220px" style={{ filter: "saturate(1.08)" }} />
              </div>
              <div className="absolute right-0 top-[92px] h-[145px] w-[145px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_24px_55px_rgba(26,26,46,0.16)] lg:h-[156px] lg:w-[156px]">
                <Image src={visuals.fezMini} alt="Fez street scene" fill className="object-cover" sizes="156px" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-site pb-14 md:pb-16 lg:pb-20">
          <h2 className="text-center font-serif text-[34px] font-bold leading-[1.08] text-[#1A1A2E]">Marrakech: Heat, Motion, and Magic!</h2>
          <div className="mx-auto mt-8 max-w-[860px] space-y-4 text-center text-[14px] leading-[1.9] text-[#4B4B6A] md:text-[15px]">
            <p>Marrakech arrives in motion. It is louder, warmer, and more immediate — a city of red walls, drifting spice, echoing courtyards, and sudden human theater. For the camera, it is a lesson in contrast: shadow beside glare, stillness beside spectacle, quiet texture beside vibrant public life.</p>
            <p>The challenge here is not finding a subject. It is deciding what deserves the frame. The best images often come when you step half a beat away from the obvious center and let the edges of the scene — a glance, a threshold, the dust in the light — speak first.</p>
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20 lg:pb-24">
          <div className="grid items-center gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
            <div className="mx-auto lg:mx-0">
              <div className="relative h-[330px] w-[215px] overflow-hidden rounded-[999px] shadow-[0_26px_60px_rgba(26,26,46,0.2)] lg:h-[360px] lg:w-[230px]">
                <Image src={visuals.marrakechTall} alt="Marrakech archway" fill className="object-cover" sizes="230px" />
                <div className="absolute bottom-6 left-1/2 w-[72%] -translate-x-1/2 rotate-[-8deg] rounded-[18px] border border-white/35 bg-white/18 px-3 py-2 text-center text-white backdrop-blur-md">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-white/80">Jemaa notes</p>
                  <p className="mt-0.5 text-[10px] font-medium">heat + shadow</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <SocialSnippet platform="instagram" handle="@urban_spirits_ma" title="Best of the square | peaceful medina light, just before the evening rush begins." image={visuals.socialOne} />
              <SocialSnippet platform="instagram" handle="@mustapha.lens" title="Best of the square | peaceful medina detail, where color and quiet meet in one frame." image={visuals.socialTwo} />
              <div className="mt-3 inline-block rounded-md px-5 py-1 text-[12px] font-semibold text-white" style={{ background: "linear-gradient(90deg,#AD54F0,#D24DBC)" }}>Continue Reading</div>
            </div>
          </div>
        </section>

        <section className="container-site pb-20 md:pb-24 lg:pb-24">
          <h2 className="mx-auto max-w-[640px] text-center font-serif text-[34px] font-bold leading-[1.08] text-[#1A1A2E]">Closing: Morocco as a Photographic Teacher</h2>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-[14px] leading-[1.9] text-[#4B4B6A] md:text-[15px]">
            More than anything, Morocco teaches the photographer how to notice. It asks you to wait for gesture, trust texture, and understand that the emotional center of an image is often quieter than its brightest color.
          </p>
          <div className="relative mx-auto mt-10 h-[280px] w-[380px] overflow-hidden rounded-[9999px] shadow-[0_28px_70px_rgba(26,26,46,0.18)] md:h-[300px] md:w-[430px] lg:h-[300px] lg:w-[400px]">
            <Image src={visuals.closing} alt="Closing Morocco scene" fill className="object-cover" sizes="400px" />
          </div>
          <div className="mx-auto mt-10 max-w-[820px] space-y-4 text-[14px] leading-[1.9] text-[#4B4B6A] md:text-[15px]">
            <p>When you leave, you take more than photographs. You carry a sharper sense of rhythm — of when to step closer, when to pull back, and when to let a scene breathe. The medinas, markets, and courtyards become lessons in <span style={accentTextStyle}>light, patience, and presence</span>.</p>
            <p>That is why Morocco lingers. Not only because it is visually beautiful, but because it trains the eye to look with care. And once you have learned that way of seeing, every place after it feels richer.</p>
            <div className="mt-5 inline-block rounded-md px-5 py-1 text-[12px] font-semibold text-white" style={{ background: "linear-gradient(90deg,#AD54F0,#D24DBC)" }}>Continue Reading</div>
          </div>
        </section>

        <section className="container-site pb-20 md:pb-24 lg:pb-28">
          <h2 className="text-center font-serif text-[34px] font-bold leading-[1.08] text-[#1A1A2E]">Related Articles</h2>
          <div className="mt-10 overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activePage * 100}%)` }}>
              {relatedPages.map((page, index) => (
                <div key={index} className="grid min-w-full gap-8 px-1 md:grid-cols-2 lg:grid-cols-3">
                  {page.map((article) => (
                    <article key={article.title} className="text-center">
                      <div className="relative mx-auto h-[190px] w-full overflow-hidden rounded-[9999px] shadow-[0_18px_40px_rgba(26,26,46,0.12)]">
                        <Image src={article.image} alt={article.title} fill className="object-cover" sizes="395px" />
                      </div>
                      <h3 className="mx-auto mt-5 max-w-[260px] font-serif text-[18px] font-semibold leading-[1.35] text-[#1A1A2E]">{article.title}</h3>
                      <p className="mx-auto mt-3 max-w-[260px] text-[13px] leading-[1.75] text-[#4B4B6A]">A slow visual story shaped by medina details, family rituals, and the calm edges of travel.</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous related articles"
              onClick={prevPage}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(26,26,46,0.1)]"
            >
              <span className="text-[18px] leading-none text-[#AFAFAF]">‹</span>
            </button>
            <div className="flex gap-2.5">
              {relatedPages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show related article page ${index + 1}`}
                  onClick={() => setActivePage(index)}
                  className={`h-[15px] w-[15px] rounded-full transition-all duration-200 ${activePage === index ? "bg-[#8F9CD3]" : "bg-[#8F9CD3]/50"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next related articles"
              onClick={nextPage}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(26,26,46,0.1)]"
            >
              <span className="text-[18px] leading-none text-[#AFAFAF]">›</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden text-[#D2D5E5]" style={{ background: "linear-gradient(180deg,#474A57 0%,#262936 52%,#12141B 100%)" }}>
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 18% 8%, rgba(255,255,255,0.18), transparent 28%), radial-gradient(circle at 82% 100%, rgba(143,156,211,0.28), transparent 24%)" }} />
        <div className="container-site relative py-16 md:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <p className="font-serif text-[22px] font-semibold text-white">{SITE_NAME}</p>
              <p className="mt-4 max-w-[250px] text-[13px] leading-[1.8] text-[#B8BDD1]">Exploring cities through photography, slowness, and visual storytelling.</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                  <span className="text-[12px] text-white"></span>
                  <span className="text-[11px] text-white/80">App Store</span>
                </a>
                <a href="#" className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                  <span className="text-[12px] text-white">▶</span>
                  <span className="text-[11px] text-white/80">Google Play</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">Quick Links</p>
              <ul className="mt-5 space-y-3 text-[13px] text-[#B8BDD1]">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">Categories</p>
              <ul className="mt-5 space-y-3 text-[13px] text-[#B8BDD1]">
                {FOOTER_LINKS.categories.map((link) => (
                  <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">Subscribe To Newsletter</p>
              <p className="mt-4 text-[13px] leading-[1.8] text-[#B8BDD1]">Receive new photo stories, reflective essays, and visual notes from the road.</p>
              <div className="mt-5 flex rounded-full border border-white/50 bg-white/5 p-1">
                <input type="email" placeholder="Your email" className="min-w-0 flex-1 bg-transparent px-4 text-[13px] text-white placeholder:text-white/35 outline-none" />
                <button type="button" className="rounded-full px-5 py-2.5 text-[12px] font-semibold text-white" style={{ background: "linear-gradient(90deg,#AD54F0,#D24DBC)" }}>Join</button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-[12px] text-[#9AA0B5]">© 2026 {SITE_NAME}. All rights reserved.</p>
            <div className="flex items-center gap-3 text-[11px] text-[#9AA0B5]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">f</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">x</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">ig</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">yt</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
