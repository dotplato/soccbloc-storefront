import Image from "next/image";

export function FeatureHighlightSection() {
  return (
    <section className="bg-neutral-800 text-white">
      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="text-center space-y-3 mb-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/60">
            Hear more. Feel more.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.2rem]">
            Immersive play, reimagined from the ground up.
          </h2>
        </div>

        <div className="relative mx-auto ">
          {/* Left feature copy */}
          <div className="pointer-events-none absolute left-0 top-1/4 hidden w-52 text-left text-[0.8rem] text-white/80 sm:block">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
              Interactive training system
            </p>
            <p className="text-xs leading-relaxed text-white/70">
              AI‑assisted drills, live ball tracking, and instant feedback keep
              every session sharp and focused.
            </p>
          </div>

          {/* Right feature copy */}
          <div className="pointer-events-none absolute right-0 top-1/3 hidden w-52 text-left text-[0.8rem] text-white/80 sm:block">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              Precision ball control sensor
            </p>
            <p className="text-xs leading-relaxed text-white/70">
              Tracks speed, angle, and impact zones so you can refine first
              touch, passing, and finishing with data‑driven detail.
            </p>
          </div>

          {/* Center image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/subsoccer-labeled.png"
              alt="Subsoccer table with labeled smart features"
              width={1200}
              height={600}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
        </div>

        <p className="mt-10 text-center text-lg text-white/70 max-w-xl mx-auto">
          With optimized tracking, responsive lighting, and match‑grade build
          quality, socc bloc turns every space into a smart training ground for
          solo drills, friendlies, and competitive play.
        </p>
      </div>
    </section>
  );
}

export default FeatureHighlightSection;

