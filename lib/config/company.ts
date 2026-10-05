/**
 * SINGLE POINT OF TRUTH for company information.
 *
 * To change an email, social link, or other company detail, edit it here
 * (or override via the env vars in `.env.example`). Every consumer-
 * site config, social cards, and the project-enquiry API route- reads
 * from `COMPANY`, so nothing drifts out of sync.
 *
 * NOTE: only `NEXT_PUBLIC_*` vars are visible in the browser. Server-only
 * vars (`ADMIN_EMAIL`, `SMTP_*`) resolve on the server; client-side they
 * read as `undefined` and fall back safely- secrets are never leaked.
 */

function firstEnv(...candidates: (string | undefined)[]): string | undefined {
  for (const c of candidates) {
    if (c && c.length > 0) return c;
  }
  return undefined;
}

const FALLBACK_EMAIL = "info@teitechnologies.com";

export const COMPANY = {
  name: "Tei Technologies",
  tagline: "Software company",

  /** General contact address (shown publicly). */
  contactEmail:
    firstEnv(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? FALLBACK_EMAIL,

  /**
   * Inbox for "Start a project" enquiries.
   * Server-only `ADMIN_EMAIL` wins when set; otherwise the public
   * `NEXT_PUBLIC_ADMIN_EMAIL`, otherwise the contact address.
   */
  adminEmail:
    firstEnv(
      process.env.ADMIN_EMAIL,
      process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      process.env.NEXT_PUBLIC_CONTACT_EMAIL
    ) ?? FALLBACK_EMAIL,

  socials: {
    linkedin:
      firstEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL) ??
      "https://linkedin.com/company/teitechnologies",
    x:
      firstEnv(process.env.NEXT_PUBLIC_X_URL) ??
      "https://x.com/teitechnologies",
    facebook:
      firstEnv(process.env.NEXT_PUBLIC_FACEBOOK_URL) ??
      "https://facebook.com/teitechnologies",
    instagram:
      firstEnv(process.env.NEXT_PUBLIC_INSTAGRAM_URL) ??
      "https://instagram.com/teitechnologies",
  },
} as const;
