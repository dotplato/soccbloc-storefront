import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/logos/soccbloc-logo.png";

type LogoProps = {
  href?: string;
  className?: string;
  white?: boolean;
  width?: number;
  height?: number;
};

export function Logo({
  href = "/",
  className,
  white = true,
  width = 140,
  height = 40,
}: LogoProps) {
  const img = (
    <Image
      src={LOGO_SRC}
      alt="SoccBloc"
      width={width}
      height={height}
      className={cn(
        "h-auto w-auto object-contain",
        white && "brightness-0 invert",
        className
      )}
      priority
    />
  );

  return href ? (
    <Link href={href} className="inline-flex items-center">
      {img}
    </Link>
  ) : (
    img
  );
}
