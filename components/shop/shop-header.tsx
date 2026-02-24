"use client";

import SecondaryNavbar, { NavbarShell } from "@/components/navbar";

export function ShopHeader() {
  return (
    <header className="bg-neutral-900 text-white">
      <SecondaryNavbar />
      <NavbarShell />
    </header>
  );
}
