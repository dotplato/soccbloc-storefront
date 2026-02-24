"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const availabilityOptions = [
  { id: "in-stock", label: "In stock", count: 18, defaultChecked: true },
  { id: "out-of-stock", label: "Out of stock", count: 5, defaultChecked: false },
];

const colorOptions = [
  { id: "beige", label: "Beige", count: 2, hex: "#D4B896", defaultChecked: true },
  { id: "blue", label: "Blue", count: 1, hex: "#2563EB", defaultChecked: false },
  { id: "brown", label: "Brown", count: 1, hex: "#92400E", defaultChecked: false },
  { id: "gold", label: "Gold", count: 1, hex: "#D97706", defaultChecked: false },
  { id: "gray", label: "Gray", count: 5, hex: "#6B7280", defaultChecked: false },
];

const technologyOptions = [
  { id: "bluetooth", label: "Bluetooth", count: 16, defaultChecked: false },
  { id: "wired", label: "Wired", count: 7, defaultChecked: false },
  { id: "wireless", label: "Wireless", count: 11, defaultChecked: false },
];

export function ShopFilters() {
  const [filtersVisible, setFiltersVisible] = useState(true);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setFiltersVisible((v) => !v)}
        className="mb-4 flex w-fit items-center gap-2 text-xs font-medium text-white/80 hover:text-white"
      >
        <Filter className="h-4 w-4" />
        {filtersVisible ? "Hide filters" : "Show filters"}
      </button>

      <aside
        className={cn(
          "w-full shrink-0 transition-all duration-300 lg:w-56",
          !filtersVisible && "hidden"
        )}
      >
      <Accordion
        type="multiple"
        defaultValue={["availability", "color", "technology"]}
        className="space-y-0 border-0"
      >
        <AccordionItem
          value="availability"
          className="border-b border-white/10 py-4"
        >
          <AccordionTrigger className="py-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/90 hover:no-underline [&[data-state=open]>svg]:rotate-180">
            Availability
          </AccordionTrigger>
          <AccordionContent className="pt-3">
            <div className="space-y-3">
              {availabilityOptions.map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-3 text-sm text-white/80"
                >
                  <Checkbox
                    defaultChecked={opt.defaultChecked}
                    className="border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span>
                    {opt.label} ({opt.count})
                  </span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color" className="border-b border-white/10 py-4">
          <AccordionTrigger className="py-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/90 hover:no-underline [&[data-state=open]>svg]:rotate-180">
            Color
          </AccordionTrigger>
          <AccordionContent className="pt-3">
            <div className="space-y-3">
              {colorOptions.map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-3 text-sm text-white/80"
                >
                  <div
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/40"
                    style={{ backgroundColor: opt.hex }}
                  />
                  <Checkbox
                    defaultChecked={opt.defaultChecked}
                    className="border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span>
                    {opt.label} ({opt.count})
                  </span>
                </label>
              ))}
              <button
                type="button"
                className="text-xs font-medium text-lime-400 hover:underline"
              >
                SHOW MORE
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="technology"
          className="border-b border-white/10 py-4"
        >
          <AccordionTrigger className="py-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/90 hover:no-underline [&[data-state=open]>svg]:rotate-180">
            Technology
          </AccordionTrigger>
          <AccordionContent className="pt-3">
            <div className="space-y-3">
              {technologyOptions.map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-3 text-sm text-white/80"
                >
                  <Checkbox
                    defaultChecked={opt.defaultChecked}
                    className="border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span>
                    {opt.label} ({opt.count})
                  </span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </aside>
    </div>
  );
}
