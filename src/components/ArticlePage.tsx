"use client";

import ArticleHeader from "./ArticleHeader";
import ArticleHero from "./ArticleHero";
import GradientBanner from "./GradientBanner";
import BehindTheLens from "./BehindTheLens";
import FezSection from "./FezSection";
import MarrakechSection from "./MarrakechSection";
import ChasingMorocco from "./ChasingMorocco";
import RelatedArticles from "./RelatedArticles";
import Footer from "./Footer";
import { ARTICLE_DATA } from "@/constants";
import { ArticleHeroData } from "@/types";

export default function ArticlePage() {
  return (
    <>
      <ArticleHeader />

      <main className="bg-white">
        
        <ArticleHero
          data={{
            category: ARTICLE_DATA.category,
            title: ARTICLE_DATA.title,
            description: ARTICLE_DATA.description,
            tags: ARTICLE_DATA.tags,
            author: {
              name: ARTICLE_DATA.author,
              avatar: "/images/3pp.png",
              readTime: ARTICLE_DATA.readTime,
              date: ARTICLE_DATA.date,
            },
            images: {
              main: "/images/2.jpg",
              secondary: "/images/3.png",
            },
          } as ArticleHeroData}
        />

        <GradientBanner />
        <BehindTheLens />
        <FezSection />
        <MarrakechSection />
        <ChasingMorocco />
        <RelatedArticles />
      </main>

      <Footer />
    </>
  );
}