import type { ProjectEnquiryFormData } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Returns a human-readable error message, or null when the form is valid.
 * Pure function- easy to unit-test.
 */
export function validateEnquiryForm(form: ProjectEnquiryFormData): string | null {
  if (!form.name.trim() || !form.email.trim() || !form.problem.trim() || !form.users.trim()) {
    return "Please fill in your name, email, the problem to solve and who will use it.";
  }
  if (!EMAIL_RE.test(form.email.trim())) {
    return "That email address doesn't look right- please check it.";
  }
  if (form.currency !== "USD" && form.currency !== "NGN") {
    return "Please choose a budget currency (dollar or naira).";
  }
  return null;
}
