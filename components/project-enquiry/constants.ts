import type { EnquiryCurrency, ProjectEnquiryFormData } from "./types";

/** Option lists for the enquiry form. Data only- icons live in the UI layer. */

export const CLIENT_TYPE_OPTIONS = [
  "Individual",
  "Business / Firm",
  "Government / Agency",
] as const;

export const PROJECT_TYPE_OPTIONS = [
  "Web platform",
  "Mobile app",
  "E-commerce",
  "Internal tool / dashboard",
  "Government portal / system",
  "MVP / prototype",
  "Business website",
  "Something else",
] as const;

export const CURRENCY_OPTIONS: ReadonlyArray<{
  value: EnquiryCurrency;
  symbol: string;
  label: string;
}> = [
  { value: "NGN", symbol: "₦", label: "Naira (₦)" },
  { value: "USD", symbol: "$", label: "Dollar ($)" },
];

const UNSURE = "Not sure yet";

export const BUDGET_OPTIONS_BY_CURRENCY: Record<EnquiryCurrency, readonly string[]> = {
  NGN: [
    UNSURE,
    "Under ₦500k",
    "₦500k – ₦2M",
    "₦2M – ₦5M",
    "₦5M – ₦15M",
    "₦15M+",
  ],
  USD: [
    UNSURE,
    "Under $500",
    "$500 – $2k",
    "$2k – $5k",
    "$5k – $15k",
    "$15k+",
  ],
};

/** Backwards-compatible default list (NGN). Prefer `BUDGET_OPTIONS_BY_CURRENCY`. */
export const BUDGET_OPTIONS = BUDGET_OPTIONS_BY_CURRENCY.NGN;

export const TIMELINE_OPTIONS = [
  "Flexible",
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
] as const;

export const EMPTY_ENQUIRY_FORM: ProjectEnquiryFormData = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  clientType: "Business / Firm",
  projectType: "Web platform",
  problem: "",
  users: "",
  features: "",
  currency: "NGN",
  budget: "Not sure yet",
  timeline: "Flexible",
  links: "",
};
