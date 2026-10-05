import type { ProjectEnquiryFormData } from "./types";

/**
 * Email content for a project enquiry, sent server-side to the admin inbox.
 * Pure functions- shared by the API route (and easy to unit-test).
 */

export function buildEnquirySubject(form: ProjectEnquiryFormData): string {
  const who = form.name.trim() || "New prospect";
  return `Project enquiry- ${form.projectType}- ${who}`;
}

export function buildEnquiryBody(form: ProjectEnquiryFormData): string {
  return [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Phone / WhatsApp: ${form.phone.trim() || "-"}`,
    `Organisation: ${form.organisation.trim() || "-"}`,
    `Client type: ${form.clientType}`,
    `Project type: ${form.projectType}`,
    ``,
    `1. What problem should this solve?`,
    `${form.problem.trim()}`,
    ``,
    `2. Who will use it, roughly how many?`,
    `${form.users.trim()}`,
    ``,
    `3. Must-have features:`,
    `${form.features.trim() || "-"}`,
    ``,
    `Budget range: ${form.budget} (${form.currency === "NGN" ? "Naira ₦" : "US Dollar $"})`,
    `Timeline: ${form.timeline}`,
    `Reference links / examples: ${form.links.trim() || "-"}`,
    ``,
    `— Sent via teitechnologies.com "Start a project"`,
  ].join("\n");
}
