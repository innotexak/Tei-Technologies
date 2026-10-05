import { PenTool, Rocket, Search, Truck } from "lucide-react";
import { Section } from "@/components/ui/Section";

const STEPS = [
  {
    icon: Search,
    title: "Discover",
    body: "We map your goals, users and requirements- then scope a clear, fixed plan with timelines and cost.",
  },
  {
    icon: PenTool,
    title: "Design & build",
    body: "UI/UX, development and testing in weekly iterations. You see progress early and give feedback often.",
  },
  {
    icon: Rocket,
    title: "Launch",
    body: "Secure deployment, data migration, training and go-live support- handled end to end by our team.",
  },
  {
    icon: Truck,
    title: "Support & grow",
    body: "Hosting, monitoring, updates and new features. Your software keeps improving after launch.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title="From idea to launched software in four steps."
      intro="A simple, transparent process whether you're an individual with an idea, a firm digitising operations, or a government agency serving citizens."
      align="center"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.title} className="relative rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-navy-900">
            <p className="text-xs font-extrabold tracking-[0.18em] text-slate-300">
              {String(i + 1).padStart(2, "0")}
            </p>
            <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-50 dark:bg-white/10 text-accent-700 dark:text-teal-200">
              <s.icon size={20} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
