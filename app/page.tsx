import Hero from "@/components/hero";
import CategoryGrid from "@/components/category-grid";
import FeaturedHeadphonesSection from "@/components/featured-headphones";
import FeatureHighlightSection from "@/components/feature-highlight";
import VideoFeatureGridSection from "@/components/video-feature-grid";
import SubsoccerFeaturedSection from "@/components/subsoccer-featured";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <CategoryGrid />
      <FeaturedHeadphonesSection />
      <FeatureHighlightSection />
      <VideoFeatureGridSection />
      <SubsoccerFeaturedSection />
    </main>
  );
}
