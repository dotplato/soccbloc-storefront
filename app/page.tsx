import Hero from "@/components/hero";
import CategoryGrid from "@/components/category-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <CategoryGrid />
    </main>
  );
}
