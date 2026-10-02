import type { Metadata } from "next";
import { ArrowRight, Mail, User, Building2, Landmark } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tei Technologies — custom software for individuals, businesses & government, and our products TeiCraft and TeiWill.",
};

const CARDS = [
  {
    icon: User,
    title: "Individuals",
    body: "Personal apps, MVPs, and business websites. Tell us your idea and budget — we'll propose the leanest path to launch.",
  },
  {
    icon: Building2,
    title: "Businesses & firms",
    body: "Customer platforms, internal tools, e-commerce and integrations. Tell us the process you want to improve or product you want to launch.",
  },
  {
    icon: Landmark,
    title: "Government",
    body: "Portals, registries, document and data systems. Tell us the service and scale — we'll respond with approach, security and timelines.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <div className="relative overflow-hidden bg-navy-950 text-white">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-200">
            Contact
          </p>
          <h1 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-5xl md:leading-[1.08]">
            Let&apos;s build your software.
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-300">
            Whether you&apos;re an individual with an idea, a firm digitising
            operations, or a government agency serving citizens — send us a
            message and we&apos;ll reply within 1–2 business days.
          </p>
          <a
            href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Project enquiry — Tei Technologies")}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-slate-200"
          >
            <Mail size={16} />
            {SITE.contactEmail}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,30,58,0.10)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white">
                <c.icon size={22} />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-navy-900">
                {c.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-[#FAFAF8] p-8">
          <p className="font-semibold text-navy-900">
            What to include in your email
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            <li>· Who you are (individual / firm / agency)</li>
            <li>· What you want to build or improve</li>
            <li>· Who will use it, and roughly how many</li>
            <li>· Timeline and budget range, if known</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            For product support, please contact TeiCraft or TeiWill through
            their own platforms. For anything you want Tei Technologies to
            build — you&apos;re in the right place.
          </p>
        </div>
      </div>
    </div>
  );
}
