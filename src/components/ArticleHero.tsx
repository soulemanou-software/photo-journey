import React from "react";
import OptimizedImage from "./ui/OptimizedImage";
import Badge from "./ui/Badge";
import { ArticleHeroData } from "@/types";
import { cn } from "@/lib/utils";

interface ArticleHeroProps {
  data: ArticleHeroData;
  className?: string;
}

export default function ArticleHero({ data, className }: ArticleHeroProps) {
  return (
    <section className={cn("container-site pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24", className)}>
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-8">

        <div className="w-full flex-1 min-w-0">
          <Badge 
            variant="gradient" 
            size="sm"
            className="font-serif tracking-[0.14em] uppercase"
          >
            {data.category}
          </Badge>

          <h1 className="mt-5 font-serif text-[34px] font-[400] leading-[1.2] text-black sm:text-[42px] lg:text-[54px] xl:text-[60px]">
            {data.title}
          </h1>

          <p className="mt-5 max-w-[560px] text-[14px] leading-[1.8] text-[#4B4B6A] md:text-[15px]">
            {data.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {data.tags.map((tag) => (
              <Badge
                key={tag.label}
                variant={tag.variant || "default"}
                size="md"
                className="gap-1"
              >
                <OptimizedImage
                  src={tag.img}
                  alt={tag.label}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                {tag.label}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#9090A8]">
            <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
              <OptimizedImage
                src={data.author.avatar}
                alt={data.author.name}
                fill
                sizes="32px"
              />
            </div>

            <span className="font-semibold text-[#1A1A2E]">
              {data.author.name}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D2D3E2]" />
            <span>{data.author.readTime}</span>

            <span className="h-1 w-1 rounded-full bg-[#D2D3E2]" />
            <span>{data.author.date}</span>
          </div>
        </div>

        <div className="relative mx-auto h-[320px] w-[320px] flex-shrink-0 sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]">
          <div className="absolute inset-0 h-[60rem] w-[40rem] rounded-[15rem] bg-[#F0F1FA]
            md:-top-[20rem] md:-right-[13rem] md:-rotate-[15deg]
             -top-[35rem] -left-[3rem] -rotate-[40deg]
            sm:-top-[22rem] sm:-right-[15rem] sm:-rotate-[45deg]
            lg:-top-[25rem] lg:-right-[33rem] lg:-rotate-[45deg]
            xl:-top-[28rem] xl:-right-[20rem] xl:-rotate-[45deg]
          " />

          <div className="absolute z-10 h-[70%] w-[70%] overflow-hidden rounded-full shadow-[0_24px_60px_rgba(38,67,104,0.18)]
            left-[14rem] sm: top-[2rem] rotate-[-95deg] -translate-x-1/2 -translate-y-1/2
            sm:left-[16rem] sm:top-[2.5rem] sm:rotate-[-100deg]
            lg:left-[18rem] lg:top-[3rem] lg:rotate-[-105deg]
            xl:left-[20rem] xl:top-[3.5rem] xl:rotate-[-110deg]
          ">
            <OptimizedImage
              src={data.images.main}
              alt="Main visual"
              fill
              sizes="(max-width:640px) 185px,(max-width:1024px) 220px,267px"
              priority
            />

            <div className="absolute -left-[0.5rem] top-[6rem] font-medium rotate-[105deg] text-center w-[10rem] text-wrap bg-black/30 backdrop-blur-sm px-3 py-2 text-white text-[15px]">
              @This is a random copyrighted image source
            </div>
          </div>

          <div className="absolute z-10 h-[45%] w-[45%] overflow-hidden rounded-full shadow-[0_16px_40px_rgba(26,26,46,0.16)]
            bottom-3 -right-6 rotate-[-8deg]
            sm:bottom-4 sm:-right-8 sm:rotate-[-10deg]
            lg:bottom-5 lg:-right-10 lg:rotate-[-12deg]
            xl:bottom-6 xl:-right-12 xl:rotate-[-14deg]
          ">
            <OptimizedImage
              src={data.images.secondary}
              alt="Secondary visual"
              fill
            />

            <div className="absolute md:left-[1.7rem] md:font-medium md:top-[7rem] rotate-[10deg] text-center w-[9rem] text-wrap bg-black/30 backdrop-blur-sm px-2 py-1 text-white text-[11px]">
                @This is a random copyrighted image source
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}