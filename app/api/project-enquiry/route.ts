import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { COMPANY } from "@/lib/config/company";
import { buildEnquiryBody, buildEnquiryHtml, buildEnquirySubject } from "@/components/project-enquiry/enquiry-mail";
import { validateEnquiryForm } from "@/components/project-enquiry/validation";
import type { ProjectEnquiryFormData } from "@/components/project-enquiry/types";

/**
 * POST /api/project-enquiry
 * Validates the visitor's project brief and emails it to the admin inbox.
 * The visitor only ever sees success / failure- never the delivery mechanism.
 */

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  return v && v.length > 0 ? v : undefined;
}

function resolveAdminEmail(): string | undefined {
  // Single point of truth lives in `@/lib/config/company`.
  return COMPANY.adminEmail.length > 0 ? COMPANY.adminEmail : undefined;
}

export async function POST(req: Request) {
  let form: ProjectEnquiryFormData;
  try {
    form = (await req.json()) as ProjectEnquiryFormData;
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }

  // `validateEnquiryForm` rejects anything that isn't USD/NGN.
  const currency = String(form?.currency ?? "NGN").toUpperCase() as "USD" | "NGN";
  const validationError = validateEnquiryForm({
    name: String(form?.name ?? ""),
    email: String(form?.email ?? ""),
    phone: String(form?.phone ?? ""),
    organisation: String(form?.organisation ?? ""),
    clientType: String(form?.clientType ?? ""),
    projectType: String(form?.projectType ?? ""),
    problem: String(form?.problem ?? ""),
    users: String(form?.users ?? ""),
    features: String(form?.features ?? ""),
    currency,
    budget: String(form?.budget ?? ""),
    timeline: String(form?.timeline ?? ""),
    links: String(form?.links ?? ""),
  });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const adminEmail = resolveAdminEmail();
  const smtpHost = getEnv("SMTP_HOST");
  const smtpUser = getEnv("SMTP_USER");
  const smtpPass = getEnv("SMTP_PASS");

  if (!adminEmail || !smtpHost || !smtpUser || !smtpPass) {
    console.error("Project enquiry email is not configured: missing ADMIN_EMAIL/SMTP_* env vars.");
    return NextResponse.json(
      { error: "Sorry, we couldn't send your request right now. Please email us directly and we'll get back to you." },
      { status: 500 }
    );
  }

  const smtpPort = Number(getEnv("SMTP_PORT") ?? "587");
  const smtpFrom = getEnv("SMTP_FROM") ?? smtpUser;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: adminEmail,
      replyTo: form.email.trim(),
      subject: buildEnquirySubject(form),
      text: buildEnquiryBody(form),
      html: buildEnquiryHtml(form),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send project enquiry email:", err);
    return NextResponse.json(
      { error: "Sorry, we couldn't send your request right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
