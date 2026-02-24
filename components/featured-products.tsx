import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/fade-in-up";

type FeaturedProduct = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  price: string;
  compareAtPrice?: string;
  shopUrl?: string;
  highlight?: boolean;
};

const featuredProducts: FeaturedProduct[] = [
  {
    id: "silence-x-elite",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Subsoccer S7 – Anthracite",
    eyebrow: "FLAGSHIP",
    title: "Subsoccer S7 – Anthracite",
    price: "$199.00",
    compareAtPrice: "$249.00",
    shopUrl: "#",
  },
  {
    id: "aura-one",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "The New Subsoccer S3",
    eyebrow: "NEW PORTABLE",
    title: "The New Subsoccer S3",
    price: "$349.00",
    compareAtPrice: "$399.00",
    shopUrl: "#",
  },
  {
    id: "aether-pro",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Subsoccer S7 - White",
    eyebrow: "LATEST",
    title: "Subsoccer S7 - White",
    price: "$429.00",
    shopUrl: "#",
    highlight: true,
  },
 
];

export function featuredProductsSection() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <FadeInUp>
          <div className="space-y-3 pb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/60">
              Premium headphones
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.5rem]">
              A curated selection of our headphones
            </h2>
          </div>
        </FadeInUp>

        <FadeInUp delay={100}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        </FadeInUp>

        <FadeInUp delay={200}>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-transparent border border-secondary px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:bg-secondary/90 hover:text-secondary-foreground/90"
          >
            Go to shop
          </Button>
        </div>
        </FadeInUp>
      </div>
    </section>
  );
}

export default featuredProductsSection;

