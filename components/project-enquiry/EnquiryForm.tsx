"use client";

import { useState } from "react";
import { ArrowRight, Building2, Landmark, Loader2, Send, User } from "lucide-react";
import { Field, FormSectionTitle, SelectField, TextArea, TextInput } from "@/components/ui/form";
import {
  BUDGET_OPTIONS_BY_CURRENCY,
  CLIENT_TYPE_OPTIONS,
  CURRENCY_OPTIONS,
  EMPTY_ENQUIRY_FORM,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
} from "./constants";
import type { EnquiryCurrency, ProjectEnquiryFormData } from "./types";
import { validateEnquiryForm } from "./validation";

const CLIENT_TYPE_ICONS = {
  Individual: User,
  "Business / Firm": Building2,
  "Government / Agency": Landmark,
} as const;

interface EnquiryFormProps {
  /** Called with the visitor's email once the brief has been sent. */
  onSubmitted: (visitorEmail: string) => void;
}

/** Business-discovery form. Sends the brief to the team; visitor sees only the outcome. */
export function EnquiryForm({ onSubmitted }: EnquiryFormProps) {
  const [form, setForm] = useState<ProjectEnquiryFormData>(EMPTY_ENQUIRY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const set =
    (key: keyof ProjectEnquiryFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const setCurrency = (currency: EnquiryCurrency) =>
    setForm((f) => ({
      ...f,
      currency,
      // Ranges differ per currency, so restart from "Not sure yet".
      budget: BUDGET_OPTIONS_BY_CURRENCY[currency][0],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const validationError = validateEnquiryForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setSending(true);

    try {
      const res = await fetch("/api/project-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        setError(data?.error ?? "Sorry, we couldn't send your request. Please try again.");
        return;
      }
      onSubmitted(form.email.trim());
    } catch {
      setError("Sorry, we couldn't send your request. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="overflow-y-auto bg-white px-6 py-6 sm:px-8 dark:bg-navy-900">
      <FormSectionTitle>1 · Your details</FormSectionTitle>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <TextInput placeholder="Adaeze Okafor" value={form.name} onChange={set("name")} autoComplete="name" />
        </Field>
        <Field label="Email" required>
          <TextInput
            placeholder="you@company.com"
            value={form.email}
            onChange={set("email")}
            autoComplete="email"
            inputMode="email"
          />
        </Field>
        <Field label="Phone / WhatsApp">
          <TextInput placeholder="+234 …" value={form.phone} onChange={set("phone")} autoComplete="tel" />
        </Field>
        <Field label="Company / organisation">
          <TextInput
            placeholder="Firm, agency, or-"
            value={form.organisation}
            onChange={set("organisation")}
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="I am a(n)">
          <div className="grid grid-cols-3 gap-2">
            {CLIENT_TYPE_OPTIONS.map((value) => {
              const Icon = CLIENT_TYPE_ICONS[value];
              const active = form.clientType === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, clientType: value }))}
                  aria-pressed={active}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-[12.5px] font-semibold transition-all ${
                    active
                      ? "border-navy-900 bg-navy-950 text-white dark:border-teal-300 dark:bg-white dark:text-navy-950"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-white/15 dark:bg-transparent dark:text-slate-300 dark:hover:border-white/30"
                  }`}
                >
                  <Icon size={17} />
                  {value}
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <div className="mt-7">
        <FormSectionTitle>2 · The project</FormSectionTitle>
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <Field label="What do you want to build?">
          <SelectField value={form.projectType} onChange={set("projectType")}>
            {PROJECT_TYPE_OPTIONS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </SelectField>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Budget range">
            <div
              role="group"
              aria-label="Budget currency"
              className="mb-2 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 dark:bg-white/10"
            >
              {CURRENCY_OPTIONS.map((c) => {
                const active = form.currency === c.value;
                return (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setCurrency(c.value)}
                    aria-pressed={active}
                    title={c.label}
                    className={`rounded-lg px-2 py-1.5 text-xs font-bold transition-all ${
                      active
                        ? "bg-navy-950 text-white shadow-sm dark:bg-white dark:text-navy-950"
                        : "text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    {c.symbol} {c.value}
                  </button>
                );
              })}
            </div>
            <SelectField value={form.budget} onChange={set("budget")}>
              {BUDGET_OPTIONS_BY_CURRENCY[form.currency].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </SelectField>
          </Field>
          <Field label="Timeline">
            <SelectField value={form.timeline} onChange={set("timeline")}>
              {TIMELINE_OPTIONS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </SelectField>
          </Field>
        </div>
      </div>

      <div className="mt-4">
        <Field label="What problem should this solve?" required>
          <TextArea
            className="min-h-[90px] resize-y"
            placeholder="e.g. Customers call us to book artisans; we lose jobs and can't track payments…"
            value={form.problem}
            onChange={set("problem")}
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Who will use it, roughly how many?" required>
          <TextInput
            placeholder="e.g. 20 staff + ~500 customers in year one"
            value={form.users}
            onChange={set("users")}
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Must-have features">
          <TextArea
            className="min-h-[72px] resize-y"
            placeholder="e.g. bookings, payments, admin dashboard, SMS notifications…"
            value={form.features}
            onChange={set("features")}
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Reference links / examples">
          <TextInput
            placeholder="Links to apps or sites you like (optional)"
            value={form.links}
            onChange={set("links")}
            inputMode="url"
          />
        </Field>
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">
          {error}
        </p>
      )}

      <div className="sticky bottom-0 -mx-6 mt-6 border-t border-slate-100 bg-white/95 px-6 py-4 backdrop-blur sm:-mx-8 sm:px-8 dark:border-white/10 dark:bg-navy-900/95">
        <button
          type="submit"
          disabled={sending}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {sending ? "Sending…" : "Send project request"}
          {!sending && (
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          )}
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">
          We reply within 1–2 business days. No spam, ever.
        </p>
      </div>
    </form>
  );
}
