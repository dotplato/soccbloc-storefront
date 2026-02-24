"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function SecondaryNavbar() {
  return (
    <div className="bg-lime-400 text-black ">
      <div className="flex items-center justify-between px-4 py-1.5 text-[0.7rem] font-medium tracking-wide sm:px-6 sm:text-xs lg:px-10">
        <nav className="flex items-center gap-4">
          <Link
            href="/about"
            className="transition-colors hover:text-white/80"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-white/80"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-white/80"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-[0.65rem] font-semibold tracking-[0.18em] text-black sm:text-[0.7rem]"
        >
          <span className="hidden sm:inline">United States</span>
          <span className="sm:hidden">US</span>
          <span className="opacity-90">(USD $)</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

export function Navbar({ logoWhite = true }: { logoWhite?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 text-sm text-white">
      {/* Left: nav links */}
      <nav className="hidden md:flex flex-1 items-center gap-6 text-sm font-medium tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/90 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Center: logo */}
      <div className="flex flex-1 items-center justify-center">
        <Logo href="/" width={120} height={36} white={logoWhite} />
      </div>

      {/* Right: search + icons */}
      <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
        <div className="relative w-48 lg:w-64">
          <Input
            placeholder="Search"
            className="h-9 bg-background/20 pr-9 text-xs text-white placeholder:text-white/80"
          />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="bg-background/20 text-white/80 hover:bg-background/70"
          aria-label="Account"
        >
          <User className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="bg-background/20 text-white/80 hover:bg-background/70"
          aria-label="Cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/40 text-white/80 hover:bg-background/70"
          aria-label="Cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-border/70 bg-background/70 text-foreground/90 hover:bg-background"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {open && (
        <div className="absolute inset-x-4 top-16 z-20 rounded-2xl border border-border/60 bg-background/95 p-4 shadow-lg backdrop-blur md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

const SCROLL_UP_THRESHOLD = 80;

export function NavbarShell({
  className,
}: {
  className?: string;
}) {
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [fixedNavVisible, setFixedNavVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const scrollingUp = current < lastScrollY.current;
      const pastThreshold = current > SCROLL_UP_THRESHOLD;

      setShowFixedNav(pastThreshold);

      if (!pastThreshold) {
        setFixedNavVisible(false);
      } else if (scrollingUp || hovered) {
        setFixedNavVisible(true);
      } else {
        setFixedNavVisible(false);
      }
      lastScrollY.current = current;
    };

    lastScrollY.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovered]);

  return (
    <div>


  
    <div className={cn("relative z-20", className)}>
      {/* Secondary bar: scrolls with page (not fixed) */}
      

      {/* Main navbar: in flow, visible when at top */}
      <div className="mt-2">
        <div className="px-4 py-3 sm:px-6 lg:px-10">
          <Navbar />
        </div>
      </div>

      {/* Main navbar: fixed overlay, appears on scroll up when past threshold */}
      {showFixedNav && (
        <div
          className={cn(
            "fixed left-0 right-0 top-0 z-30 bg-neutral-900/95 shadow-lg shadow-black/40 transition-transform duration-300 ease-out",
            fixedNavVisible ? "translate-y-0" : "-translate-y-full"
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="px-4 py-3 sm:px-6 lg:px-10">
            <Navbar logoWhite={false} />
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

