import type { FooterLinkItem } from "./footer-link-column";

export type FooterLinkGroup = { title: string; links: FooterLinkItem[] };

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Find a store", href: "/stores" },
      { label: "Your privacy choices", href: "/privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Wholesale", href: "/shop" },
      { label: "Become a retailer", href: "/blog" },
      { label: "Corporate orders", href: "/blog" },
      { label: "Store locator", href: "/abput" },
      { label: "Affiliates", href: "/contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Pinterest", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Shipping & returns", href: "/contact" },
    ],
  },
];
