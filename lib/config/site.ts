import { COMPANY } from "./company";

export interface SiteNavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  contactEmail: string;
  /** Inbox for project enquiries. Resolved in `@/lib/config/company`. */
  adminEmail: string;
  nav: readonly SiteNavItem[];
}

export const SITE: SiteConfig = {
  name: COMPANY.name,
  tagline: COMPANY.tagline,
  contactEmail: COMPANY.contactEmail,
  adminEmail: COMPANY.adminEmail,
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
