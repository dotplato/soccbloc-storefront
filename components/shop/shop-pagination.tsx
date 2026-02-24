"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ShopPaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

export function ShopPagination({
  currentPage,
  totalPages,
  basePath = "/shop",
}: ShopPaginationProps) {
  const prevHref = currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : "#";
  const nextHref =
    currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : "#";

  const progressWidth = totalPages > 1 ? (currentPage / totalPages) * 100 : 100;

  return (
    <nav
      className="flex flex-col items-center gap-4 py-12"
      aria-label="Pagination"
    >
      <div className="flex items-center gap-4">
        <Link
          href={prevHref}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded text-white/60 transition-colors hover:text-white",
            currentPage <= 1 && "pointer-events-none opacity-50"
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`${basePath}?page=${page}`}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded text-sm font-medium transition-colors",
                page === currentPage
                  ? "text-lime-400"
                  : "text-white/60 hover:text-white"
              )}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Link>
          ))}
        </div>

        <Link
          href={nextHref}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded text-white/60 transition-colors hover:text-white",
            currentPage >= totalPages && "pointer-events-none opacity-50"
          )}
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-lime-400 transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </nav>
  );
}
