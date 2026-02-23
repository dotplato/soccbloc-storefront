import type { FooterLinkItem } from "./footer-link-column";

export type FooterLinkGroup = { title: string; links: FooterLinkItem[] };

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Influencers", href: "/influencers" },
      { label: "Find a store", href: "/stores" },
      { label: "Your privacy choices", href: "/privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Wholesale", href: "/wholesale" },
      { label: "Become a retailer", href: "/retailers" },
      { label: "Corporate orders", href: "/corporate" },
      { label: "Store locator", href: "/stores" },
      { label: "Affiliates", href: "/affiliates" },
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
      { label: "Delivery", href: "/delivery" },
      { label: "Shipping & returns", href: "/returns" },
      { label: "My account", href: "/account" },
    ],
  },
];
