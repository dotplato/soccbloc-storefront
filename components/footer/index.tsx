import { FooterBottom } from "./footer-bottom";
import { FooterLinkColumn } from "./footer-link-column";
import { FOOTER_LINK_GROUPS } from "./footer-links";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <FooterNewsletter />
      <div className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_LINK_GROUPS.map((group) => (
            <FooterLinkColumn
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}

export { FooterNewsletter } from "./footer-newsletter";
export { FooterLinkColumn } from "./footer-link-column";
export { FooterBottom } from "./footer-bottom";
export { FOOTER_LINK_GROUPS } from "./footer-links";
