export type ProductSlug = "teicraft" | "teiwill";

export interface Product {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  status: string;
  detailHref: string;
  highlights: string[];
  audience: string[];
}

export interface Service {
  slug: string;
  title: string;
  audience: string;
  description: string;
  offerings: string[];
}

/**
 * Single source of truth for product links.
 *
 * Tei Technologies is the parent software company.
 * TeiCraft and TeiWill are products built and operated by Tei Technologies —
 * not separate companies. This site never imports their code — it only links out.
 */
function externalOrFallback(env: string | undefined, fallback: string) {
  return env && env.length > 0 ? env : fallback;
}

export const PRODUCTS: Product[] = [
  {
    slug: "teicraft",
    name: "TeiCraft",
    tagline: "Verified artisan marketplace",
    description:
      "Find and book verified artisans — plumbers, electricians, carpenters and more — with secure payments, messaging, and ratings built in.",
    longDescription:
      "TeiCraft is our flagship marketplace product connecting customers with trusted, vetted artisans. Customers can search, book, pay, chat, and review — while artisans build verified professional profiles and grow their businesses.",
    category: "Marketplace · Home services",
    status: "Live",
    detailHref: "/products/teicraft",
    highlights: ["Verified artisans", "Bookings & secure payments", "Ratings & reviews"],
    audience: [
      "Homeowners booking trusted services",
      "Artisans growing a verified business",
      "Partners needing reliable service supply",
    ],
  },
  {
    slug: "teiwill",
    name: "TeiWill",
    tagline: "Wills & estate management",
    description:
      "Create wills, organise assets and beneficiaries, and keep important documents safe — with lawyer review and verification workflows.",
    longDescription:
      "TeiWill is our legal-tech product for wills and estate planning. Individuals and families can draft wills, record assets and beneficiaries, invite lawyer review, and store documents securely for the future.",
    category: "Legal-tech · Estate planning",
    status: "Live",
    detailHref: "/products/teiwill",
    highlights: ["Guided will builder", "Assets & beneficiaries", "Lawyer review"],
    audience: [
      "Individuals creating and safeguarding wills",
      "Families organising assets and beneficiaries",
      "Lawyers reviewing estate documents",
    ],
  },
];

/** Backwards-compatible aliases — old imports keep working. */
export type CompanySlug = ProductSlug;
export type PortfolioCompany = Product & { legalName: string; sector: string };
export const COMPANIES: PortfolioCompany[] = PRODUCTS.map((p) => ({
  ...p,
  legalName: `Tei Technologies — ${p.name}`,
  sector: p.category,
}));

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function companyBySlug(slug: string): PortfolioCompany | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}

export function productUrl(product: Product): string {
  if (product.slug === "teicraft") {
    return externalOrFallback(
      process.env.NEXT_PUBLIC_TEICRAFT_URL,
      product.detailHref
    );
  }
  return externalOrFallback(
    process.env.NEXT_PUBLIC_TEIWILL_URL,
    product.detailHref
  );
}

export function companyUrl(company: { slug: string; detailHref: string }): string {
  if (company.slug === "teicraft") {
    return externalOrFallback(
      process.env.NEXT_PUBLIC_TEICRAFT_URL,
      company.detailHref
    );
  }
  return externalOrFallback(
    process.env.NEXT_PUBLIC_TEIWILL_URL,
    company.detailHref
  );
}

export const SERVICES: Service[] = [
  {
    slug: "individuals",
    title: "For Individuals",
    audience: "Personal projects & startups",
    description:
      "Have an idea? We design and build personal apps, portfolios, MVPs and digital products — from concept to launch — at a pace and budget that makes sense for you.",
    offerings: [
      "MVPs & personal apps",
      "Personal & business websites",
      "Mobile-friendly web platforms",
      "Launch, hosting & support",
    ],
  },
  {
    slug: "business",
    title: "For Businesses",
    audience: "Firms, startups & enterprises",
    description:
      "We build the software your firm runs on — internal tools, customer platforms, e-commerce, integrations and automation that cut cost and unlock growth.",
    offerings: [
      "Custom web & mobile apps",
      "Dashboards & internal tools",
      "E-commerce & payments",
      "API integrations & automation",
    ],
  },
  {
    slug: "government",
    title: "For Government",
    audience: "Agencies & public sector",
    description:
      "Secure, accessible, citizen-scale systems — registries, portals, document workflows and data platforms built to public-sector standards of security and reliability.",
    offerings: [
      "Citizen portals & registries",
      "Document & workflow systems",
      "Data platforms & reporting",
      "Security, audit & compliance",
    ],
  },
];

export const SITE = {
  name: "Tei Technologies",
  tagline: "Software company",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@teitechnologies.com",
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
