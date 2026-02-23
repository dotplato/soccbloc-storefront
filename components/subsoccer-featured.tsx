import Image from "next/image";

import { Button } from "@/components/ui/button";

export function SubsoccerFeaturedSection() {
  return (
    <section className="relative flex min-h-[600px] flex-col overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/subsoccer-featured-bg.png"
          alt="Abstract fabric background"
          fill
          priority={false}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      </div>

      <div className="relative flex h-full min-h-0 flex-1 flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-8">
        {/* Top: product + large scrolling text */}
        <div className="relative flex min-h-0 flex-1 items-start justify-center overflow-hidden pt-2">
            {/* Scrolling outline text behind product */}
            <div className="pointer-events-none absolute inset-x-[-15%] top-0 flex h-1/2 items-center justify-center">
              <div className="subsoccer-marquee">
                <div className="subsoccer-marquee-inner">
                  <span>Heres how you do it&nbsp;&nbsp;</span>
                  <span>Heres how you do it&nbsp;&nbsp;</span>
                  <span>Heres how you do it&nbsp;&nbsp;</span>
                </div>
              </div>
            </div>

            {/* Product image */}
            <div className="relative z-10 mt-4 sm:mt-0">
              <Image
                src="/images/subsoccer-featured.png"
                alt="Subsoccer product"
                width={600}
                height={600}
                className="  drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              />
            </div>
        </div>

        {/* Bottom: smaller copy + CTA */}
        <div className="flex-shrink-0 max-w-lg space-y-2 pt-4 absolute mt-90">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70">
              Hear what matters
            </p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Bring the stadium atmosphere home.
            </h2>
            <p className="text-xs text-white/80 sm:text-sm">
              From backyard matches to indoor tournaments, Subsoccer turns any
              space into a pitch with fast rebounds, tight control, and
              endless, match‑day energy.
            </p>
            <Button
              size="sm"
              className="mt-1 rounded-full bg-secondary px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-secondary-foreground hover:bg-secondary/90"
            >
              Bring it home
            </Button>
        </div>
      </div>
    </section>
  );
}

export default SubsoccerFeaturedSection;

