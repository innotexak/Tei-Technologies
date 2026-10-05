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

/** Escape visitor input so it can't break the HTML email layout. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Preserve line breaks from textareas in the HTML version. */
function paragraphs(value: string): string {
  return escapeHtml(value)
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .map((line) => `<p style="margin:0 0 8px 0;">${line}</p>`)
    .join("");
}

function detailRow(label: string, value: string): string {
  return (
    `<tr>` +
    `<td style="padding:8px 16px 8px 0;vertical-align:top;white-space:nowrap;color:#64748b;font-size:13px;">${label}</td>` +
    `<td style="padding:8px 0;vertical-align:top;color:#0b1e3a;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>` +
    `</tr>`
  );
}

function questionBlock(number: string, question: string, answer: string): string {
  return (
    `<div style="margin:0 0 20px 0;">` +
    `<p style="margin:0 0 6px 0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0d7377;">${number} · ${question}</p>` +
    `<div style="font-size:14px;line-height:1.6;color:#1e293b;">${paragraphs(answer)}</div>` +
    `</div>`
  );
}

/**
 * Branded HTML version of the enquiry (table layout + inline styles so it
 * renders in Gmail, Outlook, and Apple Mail). Always sent together with the
 * plain-text body as a fallback.
 */
export function buildEnquiryHtml(form: ProjectEnquiryFormData): string {
  const name = form.name.trim() || "New prospect";
  const email = form.email.trim();
  const phone = form.phone.trim() || "—";
  const organisation = form.organisation.trim() || "—";
  const features = form.features.trim() || "—";
  const links = form.links.trim() || "—";
  const budget =
    `${form.budget} (${form.currency === "NGN" ? "Naira ₦" : "US Dollar $"})`;

  return (
    `<!DOCTYPE html><html><body style="margin:0;padding:0;background-color:#f1f5f9;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:24px 12px;">` +
    `<tr><td align="center">` +
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">` +
    // Header
    `<tr><td style="background-color:#0b1e3a;padding:28px 32px;">` +
    `<p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#5eead4;">Tei Technologies · New project enquiry</p>` +
    `<p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">${escapeHtml(form.projectType)} — ${escapeHtml(name)}</p>` +
    `<p style="margin:8px 0 0 0;font-size:13px;color:#94a3b8;">${escapeHtml(form.clientType)} · ${escapeHtml(form.timeline)}</p>` +
    `</td></tr>` +
    // Contact details
    `<tr><td style="padding:24px 32px 8px 32px;">` +
    `<p style="margin:0 0 8px 0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0d7377;">Contact details</p>` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">` +
    detailRow("Name", name) +
    detailRow("Email", email) +
    detailRow("Phone / WhatsApp", phone) +
    detailRow("Organisation", organisation) +
    detailRow("Client type", form.clientType) +
    `</table>` +
    `</td></tr>` +
    // Project brief
    `<tr><td style="padding:16px 32px 8px 32px;">` +
    `<p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0d7377;">Project brief</p>` +
    questionBlock("1", "What problem should this solve?", form.problem.trim()) +
    questionBlock("2", "Who will use it, roughly how many?", form.users.trim()) +
    questionBlock("3", "Must-have features", features) +
    `</td></tr>` +
    // Budget / timeline / links
    `<tr><td style="padding:0 32px 8px 32px;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:12px;">` +
    `<tr><td style="padding:16px 20px;">` +
    detailRow("Budget range", budget) +
    detailRow("Timeline", form.timeline) +
    detailRow("Reference links", links) +
    `</td></tr></table>` +
    `</td></tr>` +
    // Footer
    `<tr><td style="padding:20px 32px 28px 32px;">` +
    `<p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;">Sent via teitechnologies.com “Start a project”. ` +
    `Just hit reply to respond to ${escapeHtml(name)}.</p>` +
    `<p style="margin:8px 0 0 0;font-size:12px;color:#94a3b8;">© Tei Technologies. TeiCraft and TeiWill are products of Tei Technologies.</p>` +
    `</td></tr>` +
    `</table>` +
    `</td></tr></table>` +
    `</body></html>`
  );
}
