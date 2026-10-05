export interface Service {
  slug: string;
  title: string;
  audience: string;
  description: string;
  offerings: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "individuals",
    title: "For Individuals",
    audience: "Personal projects & startups",
    description:
      "Have an idea? We design and build personal apps, portfolios, MVPs and digital products- from concept to launch- at a pace and budget that makes sense for you.",
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
      "We build the software your firm runs on- internal tools, customer platforms, e-commerce, integrations and automation that cut cost and unlock growth.",
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
      "Secure, accessible, citizen-scale systems- registries, portals, document workflows and data platforms built to public-sector standards of security and reliability.",
    offerings: [
      "Citizen portals & registries",
      "Document & workflow systems",
      "Data platforms & reporting",
      "Security, audit & compliance",
    ],
  },
];
