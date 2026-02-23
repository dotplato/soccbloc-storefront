"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NavbarShell } from "@/components/navbar";
import { cn } from "@/lib/utils";

type HeroSlide = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  videoSrc: string;
};

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "ULTRA‑CLEAR SOUND",
    title: "Hear Power. Feel Precision.",
    description:
      "Engineered for superior performance with advanced drivers, ultra‑clean acoustics, and immersive isolation. This is more than sound—it’s a precision‑built experience.",
    primaryCta: "Experience the sound",
    secondaryCta: "Shop headphones",
    videoSrc: "/videos/hero-1.mp4",
  },
  {
    id: 2,
    eyebrow: "WIRELESS FREEDOM",
    title: "Unplug. Stay Connected.",
    description:
      "Seamless Bluetooth connectivity, all‑day battery life, and intuitive controls give you studio‑quality sound wherever you go.",
    primaryCta: "Explore wireless",
    secondaryCta: "View collection",
    videoSrc: "/videos/hero-1.mp4",
  },
  {
    id: 3,
    eyebrow: "IMMERSIVE DETAIL",
    title: "Every Note. Every Match.",
    description:
      "From playlists to podcasts to match‑day commentary, socc bloc gear keeps you locked into every detail with comfort that lasts.",
    primaryCta: "Discover socc bloc",
    secondaryCta: "Shop all products",
    videoSrc: "/videos/hero-1.mp4",
  },
];

const AUTO_PLAY_INTERVAL = 9000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  const activeSlide = SLIDES[activeIndex];

  return (
    <section className="relative h-[95vh] min-h-[540px] overflow-hidden  bg-black text-foreground">
      {/* Background videos */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-700",
            index === activeIndex ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={index !== activeIndex}
        >
          <video
            className="h-full w-full object-cover"
            src={slide.videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
        <NavbarShell />

        <div className="mt-10 flex flex-1 flex-col justify-center gap-8 sm:mt-16 max-w-xl">
            <span className="inline-flex w-max items-center rounded-full border border-white/20 bg-black/50 px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
              {activeSlide.eyebrow}
            </span>

            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-7xl font-semibold tracking-tight text-white sm:text-7xl">
                {activeSlide.title}
              </h1>
              <p className="max-w-xl text-sm text-white/80 sm:text-base">
                {activeSlide.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-primary px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 sm:text-sm"
              >
                {activeSlide.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-black/40 px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black sm:text-sm"
              >
                {activeSlide.secondaryCta}
              </Button>
            </div>

       
        </div>

        {/* Slider controls */}
        <div className="mt-8 flex items-end justify-between pb-2 text-xs text-white/80 sm:text-sm">
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative h-[2px] w-8 overflow-hidden rounded-full bg-white/20 p-0 sm:h-[3px] sm:w-12",
                  "border-none"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
              >
                <span
                  className={cn(
                    "absolute inset-y-0 left-0 block h-full w-0 bg-white",
                    index === activeIndex && "animate-hero-progress"
                  )}
                />
              </button>
            ))}
          </div>
          <span className="font-mono text-[0.7rem] tracking-[0.3em] text-white/70 sm:text-xs">
            0{activeIndex + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

