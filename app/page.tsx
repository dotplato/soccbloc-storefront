import Hero from "@/components/hero";
import CategoryGrid from "@/components/category-grid";
import FeaturedHeadphonesSection from "@/components/featured-headphones";
import FeatureHighlightSection from "@/components/feature-highlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <CategoryGrid />
      <FeaturedHeadphonesSection />
      <FeatureHighlightSection />
    </main>
  );
}
