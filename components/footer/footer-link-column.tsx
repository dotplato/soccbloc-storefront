import Link from "next/link";

export type FooterLinkItem = { label: string; href: string };

type FooterLinkColumnProps = {
  title: string;
  links: FooterLinkItem[];
};

export function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white/90">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
