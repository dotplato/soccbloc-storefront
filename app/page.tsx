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
      <CategoryGrid />
      <FeaturedProductsSection />
      <FeatureHighlightSection />
      <VideoFeatureGridSection />
      <SubsoccerFeaturedSection />
      <BlogTeaserSection />
    </main>
  );
}
