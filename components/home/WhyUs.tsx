import { ArrowRight, Building2, Code2, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { StartProjectButton } from "@/components/project-enquiry";
import { SITE } from "@/lib/config/site";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Security & reliability first",
    body: "Tested, documented, backed-up systems with access control and audit trails- ready for business-critical and public-sector use.",
  },
  {
    icon: Code2,
    title: "Real products, real proof",
    body: "TeiCraft and TeiWill run in production today. We use the same engineering standards for client work as for our own products.",
  },
  {
    icon: Building2,
    title: "One accountable team",
    body: "Design, engineering, deployment and support from a single team. No handoffs to strangers, no disappearing contractors.",
  },
];

export function WhyUs() {
  return (
    <Section
      id="why"
      tone="navy"
      eyebrow="Why Tei Technologies"
      title="A software partner you can trust with serious work."
      intro="We don't just ship code- we take responsibility for the product, the security, and the people who depend on it."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {PILLARS.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.07]"
          >
            <f.icon size={22} className="text-teal-200" />
            <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-accent-600/30 to-transparent p-8 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-semibold text-white">Tell us what you want to build.</p>
          <p className="mt-1 text-sm text-slate-400">
            Free initial consultation- reply within 1–2 business days. Contact:{" "}
            <a href={`mailto:${SITE.contactEmail}`} className="font-semibold text-white hover:underline">
              {SITE.contactEmail}
            </a>
          </p>
        </div>
        <StartProjectButton className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-slate-200">
          Get a quote
          <ArrowRight size={15} />
        </StartProjectButton>
      </div>
    </Section>
  );
}
