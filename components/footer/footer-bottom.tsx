"use client";

import Link from "next/link";
import { ArrowUp, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

const PAYMENT_LABELS = ["Visa", "Mastercard", "Amex", "PayPal", "Discover"];

export function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative border-t border-white/10 bg-neutral-950 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: language, currency, copyright */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
            >
              English
              <ChevronDown className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
            >
              United States (USD $)
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Socc Bloc. All rights reserved.{" "}
            <Link
              href="https://www.shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80"
            >
              Powered by Shopify
            </Link>
          </p>
        </div>

        {/* Right: payment icons */}
        <div className="flex flex-wrap items-center gap-2">
          {PAYMENT_LABELS.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded border border-white/20 bg-white/5 px-2 py-1 text-[0.65rem] font-medium uppercase text-white/70"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll to top */}
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className="absolute right-4 bottom-8 h-10 w-10 rounded-full border-white/30 bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white sm:right-6 lg:right-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
