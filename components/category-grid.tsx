import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CategoryLabel from "./ui/category-label";

type Category = {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  badgeColor: "red" | "yellow" | "lime" | "cyan";
  imageSrc: string;
};

const categories: Category[] = [
  {
    id: "soundbars",
    label: "SUB SOCCER",
    title: "The soundbar brings cinematic performance and rich atmospheric detail.",
    description:
      "Slim profiles, bold sound. Level up match days, movie nights, and everything in between.",
    cta: "Shop soundbars",
    href: "/shop/soundbars",
    badgeColor: "red",
    imageSrc: "/images/category-image.jpeg",
  },
  {
    id: "over-headphones",
    label: "FLAGSHIP",
    title: "Precision‑engineered sound with luxurious comfort in every detail.",
    description:
      "Over‑ear performance tuned for deep focus, travel, and training sessions.",
    cta: "Shop headphones",
    href: "/shop/headphones",
    badgeColor: "yellow",
    imageSrc: "/images/category-image.jpeg",
  },
  {
    id: "earphones",
    label: "ANTHRACITE",
    title: "Immersive wireless sound with effortless comfort for every moment.",
    description:
      "Pocket‑size power with secure fit and all‑day battery, built for on‑the‑go listening.",
    cta: "Shop earphones",
    href: "/shop/earphones",
    badgeColor: "lime",
    imageSrc: "/images/category-image.jpeg",
  },
  {
    id: "speakers",
    label: "NEW SUBSOCCER",
    title:
      "A commanding soundstage with rich lows, vibrant mids, and crystalline highs.",
    description:
      "Room‑filling speakers that keep every corner of your space in the action.",
    cta: "Shop speakers",
    href: "/shop/speakers",
    badgeColor: "cyan",
    imageSrc: "/images/category-image.jpeg",
  },
];


export function CategoryGrid() {
  return (
    <section className="bg-black  text-white ">
      <div className="flex flex-col ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="relative min-h-90  rounded-none overflow-hidden border-none bg-transparent p-0 text-white"
            >
              <div className="absolute inset-0">
                <div className="relative h-full w-full">
                  <Image
                    src={category.imageSrc}
                    alt={category.label}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out will-change-transform hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/85" />
                </div>
              </div>

              <CardContent className="relative flex h-80 flex-col justify-between px-5 py-5  sm:px-6 sm:py-6 ">
                <div className="space-y-4">
                <CategoryLabel color={category.badgeColor}  text={category.label}/>

                </div>

                <div className="space-y-3 text-[1rem] text-white sm:text-sm">
                  <p>{category.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 text-[0.7rem] font-semibold uppercase underline tracking-[0.18em] text-white hover:bg-transparent hover:text-white/80"
                  >
                    {category.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;

