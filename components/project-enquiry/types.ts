/** Domain model for a "Start a project" enquiry. Pure data- no UI. */

export type EnquiryCurrency = "USD" | "NGN";

export interface ProjectEnquiryFormData {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  clientType: string;
  projectType: string;
  problem: string;
  users: string;
  features: string;
  currency: EnquiryCurrency;
  budget: string;
  timeline: string;
  links: string;
}
