import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export type VideoFeatureCardProps = {
  title: string;
  videoSrc: string;
  href?: string;
  className?: string;
};

export const VideoFeatureCard = React.forwardRef<
  HTMLAnchorElement,
  VideoFeatureCardProps
>(({ title, videoSrc, href = "/about", className }, ref) => {
  return (
    <Card
      asChild
      className={cn(
        "group relative h-full overflow-hidden rounded-none border-none bg-black text-white",
        className
      )}
    >
      <Link href={href} ref={ref}>
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="relative flex h-full items-start justify-start p-6 text-left">
          <h3 className="max-w-[14rem] text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl lg:text-2xl">
            {title}
          </h3>
        </div>
      </Link>
    </Card>
  );
});

VideoFeatureCard.displayName = "VideoFeatureCard";

