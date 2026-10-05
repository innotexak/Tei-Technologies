import { COMPANY } from "@/lib/config/company";

export type SocialSlug = "linkedin" | "x" | "facebook" | "instagram";

export interface SocialProfile {
  slug: SocialSlug;
  label: string;
  handle: string;
  href: string;
  blurb: string;
}

/**
 * Social profiles shown on the Contact page.
 * URLs resolve in `@/lib/config/company`- edit them in that one place.
 */
export const SOCIALS: SocialProfile[] = [
  {
    slug: "linkedin",
    label: "LinkedIn",
    handle: "@teitechnologies",
    href: COMPANY.socials.linkedin,
    blurb: "Company news, launches and hiring.",
  },
  {
    slug: "x",
    label: "X (Twitter)",
    handle: "@teitechnologies",
    href: COMPANY.socials.x,
    blurb: "Short updates and release notes.",
  },
  {
    slug: "facebook",
    label: "Facebook",
    handle: "Tei Technologies",
    href: COMPANY.socials.facebook,
    blurb: "Community, events and stories.",
  },
  {
    slug: "instagram",
    label: "Instagram",
    handle: "@teitechnologies",
    href: COMPANY.socials.instagram,
    blurb: "Behind the scenes and product peeks.",
  },
];
