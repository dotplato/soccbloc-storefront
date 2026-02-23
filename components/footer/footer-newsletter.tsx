import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterNewsletter() {
  return (
    <section className="bg-neutral-800 py-14 text-center sm:py-16 lg:py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xl font-semibold uppercase tracking-[0.25em] text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
            SB
          </span>
          <span className="tracking-[0.35em]">SOCC BLOC</span>
        </Link>
        <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/60">
          Stay connected to the world of better sound
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/90 sm:text-base">
          Join our community of listeners who believe every moment deserves great
          audio. From new product releases to expert tips and exclusive stories,
          our emails are designed to inspire the way you listen, live, and
          discover what sound can truly be.
        </p>
        <form className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-11 w-full max-w-xs rounded-full border-white/30 bg-white/10 px-4 text-white placeholder:text-white/50 focus-visible:ring-white/40"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-white px-8 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:bg-white/90 sm:w-auto"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
