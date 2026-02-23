import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

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

const featuredHeadphones: FeaturedProduct[] = [
  {
    id: "silence-x-elite",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Silence X Elite Model headphones in copper finish",
    eyebrow: "HORIZON AUDIO LABS",
    title: "Silence X Elite Model",
    price: "$199.00",
    compareAtPrice: "$249.00",
    shopUrl: "#",
  },
  {
    id: "aura-one",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Aura One Signature Edition headphones in champagne gold",
    eyebrow: "AURUM ACOUSTICS",
    title: "Aura One Signature Edition",
    price: "$349.00",
    compareAtPrice: "$399.00",
    shopUrl: "#",
  },
  {
    id: "aether-pro",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Aether Pro Advanced Series headphones in navy and silver",
    eyebrow: "VERTEX SOUNDWORKS",
    title: "Aether Pro Advanced Series",
    price: "$429.00",
    shopUrl: "#",
    highlight: true,
  },
  {
    id: "element-studio",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Element Studio Master Edition headphones in yellow and silver",
    eyebrow: "NORTHPEAK ENGINEERING",
    title: "Element Studio Master Edition",
    price: "From $499.00",
    shopUrl: "#",
  },
];

export function FeaturedHeadphonesSection() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="space-y-3 pb-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/60">
            Premium headphones
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.5rem]">
            A curated selection of our headphones
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredHeadphones.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-primary px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
          >
            Go to shop
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedHeadphonesSection;

