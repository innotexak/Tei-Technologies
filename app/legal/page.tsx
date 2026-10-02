import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Privacy",
  description: "Legal and privacy information for the Tei Technologies website.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700">
        Legal
      </p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy-900 md:text-4xl">
        Legal &amp; privacy
      </h1>
      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-600">
        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold text-navy-900">
            About this site
          </h2>
          <p className="mt-2">
            Tei Technologies operates this website to describe our software
            development services and our products, TeiCraft and TeiWill. General
            enquiries sent here are used only to respond to you.
          </p>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-[#FAFAF8] p-8">
          <h2 className="text-lg font-semibold text-navy-900">Our products</h2>
          <p className="mt-2">
            TeiCraft and TeiWill are products designed, built and operated by
            Tei Technologies, each with its own terms of service and privacy
            policy. Use of those products is governed by their respective terms
            — not by this site.
          </p>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold text-navy-900">Privacy</h2>
          <p className="mt-2">
            This site uses no tracking cookies and collects no personal data
            beyond emails you choose to send us. Correspondence is used only to
            respond to your enquiry.
          </p>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold text-navy-900">
            Intellectual property
          </h2>
          <p className="mt-2">
            “Tei Technologies”, “TeiCraft” and “TeiWill” and associated marks
            are property of Tei Technologies. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
