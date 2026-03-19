import Image from "next/image";
import Link from "next/link";
import { RELATED_ARTICLES } from "@/lib/constants";

export default function RelatedArticles() {
  return (
    <section className="py-14 md:py-20 bg-[#F9F9FB]">
      <div className="container-site">
        {/* Section heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif font-bold text-[26px] md:text-[32px] lg:text-[38px] text-[#1A1A2E]">
            Related Articles
          </h2>
          <div className="section-divider" />
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {RELATED_ARTICLES.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Circular image */}
              <div className="flex justify-center pt-7 pb-4 px-7">
                <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="160px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pb-6">
                <div className="flex items-center gap-2 text-[11px] text-[#9090A8] mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D0D0E0]" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif font-bold text-[16px] md:text-[17px] text-[#1A1A2E] leading-[1.4] mb-2 group-hover:text-[#AD54F0] transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-[13px] text-[#4B4B6A] leading-[1.7] mb-5 flex-1">
                  {article.excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-1 text-[13px] font-semibold"
                  style={{ background: "linear-gradient(135deg,#AD54F0,#D24DBC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Read More
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" fill="none" stroke="#AD54F0" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
