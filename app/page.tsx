import { FadeInUp } from "@/components/ui/fade-in-up";
import Hero from "@/components/hero";
import CategoryGrid from "@/components/category-grid";
import FeaturedProductsSection from "@/components/featured-products";
import FeatureHighlightSection from "@/components/feature-highlight";
import VideoFeatureGridSection from "@/components/video-feature-grid";
import SubsoccerFeaturedSection from "@/components/subsoccer-featured";
import BlogTeaserSection from "@/components/blog-teaser";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <FadeInUp>
        <CategoryGrid />
      </FadeInUp>
      <FadeInUp>
        <FeaturedProductsSection />
      </FadeInUp>
      <FadeInUp>
        <FeatureHighlightSection />
      </FadeInUp>
      <FadeInUp>
        <VideoFeatureGridSection />
      </FadeInUp>
      <FadeInUp>
        <SubsoccerFeaturedSection />
      </FadeInUp>
      <FadeInUp>
        <BlogTeaserSection />
      </FadeInUp>
    </main>
  );
}
