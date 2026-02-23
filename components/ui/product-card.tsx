import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  price: string;
  compareAtPrice?: string;
  shopUrl?: string;
  highlight?: boolean;
  className?: string;
};

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      imageSrc,
      imageAlt,
      eyebrow,
      title,
      price,
      compareAtPrice,
      shopUrl,
      highlight = false,
      className,
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-none border-none bg-transparent text-white",
          className
        )}
      >
        <div className="relative aspect-[4/5] w-full bg-neutral-700">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw,  (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          <div className="pointer-events-none absolute inset-x-6 bottom-5 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              size="sm"
              className="pointer-events-auto h-10 w-full max-w-[220px] rounded-full bg-primary text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90"
            >
              Add to cart
            </Button>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col justify-between bg-neutral-800 px-4 py-4 text-xs sm:px-5 sm:py-5">
          <div className="space-y-2">
            {eyebrow ? (
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/60">
                {eyebrow}
              </p>
            ) : null}
            <p className="text-sm font-medium text-white sm:text-base">
              {title}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between text-[0.75rem] text-white/80">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold">{price}</span>
              {compareAtPrice ? (
                <span className="text-[0.7rem] text-white/60 line-through">
                  {compareAtPrice}
                </span>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

ProductCard.displayName = "ProductCard";

