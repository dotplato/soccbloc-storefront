"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Headphones", href: "/shop/headphones" },
  { label: "Speakers", href: "/shop/speakers" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 text-sm text-foreground">
      {/* Left: nav links */}
      <nav className="hidden md:flex flex-1 items-center gap-6 text-xs font-medium tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Center: logo */}
      <div className="flex flex-1 items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold uppercase tracking-[0.25em]"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
            SB
          </span>
          <span className="hidden sm:inline text-xs tracking-[0.35em]">
            SOCC BLOC
          </span>
        </Link>
      </div>

      {/* Right: search + icons */}
      <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
        <div className="relative w-48 lg:w-64">
          <Input
            placeholder="Search"
            className="h-9 bg-background/70 pr-9 text-xs text-foreground placeholder:text-muted-foreground/80"
          />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="bg-background/40 text-foreground/80 hover:bg-background/70"
          aria-label="Account"
        >
          <User className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="bg-background/40 text-foreground/80 hover:bg-background/70"
          aria-label="Cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/40 text-foreground/80 hover:bg-background/70"
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

export function NavbarShell({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-20",
        className
      )}
    >
      <Navbar />
    </div>
  );
}

