import Hero from "@/components/hero";
import CategoryGrid from "@/components/category-grid";
import FeaturedHeadphonesSection from "@/components/featured-headphones";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <CategoryGrid />
      <FeaturedHeadphonesSection />
    </main>
  );
}
