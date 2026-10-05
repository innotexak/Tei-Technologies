import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Code2,
  User,
  Landmark as GovIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { StartProjectButton } from "@/components/project-enquiry";
import { SERVICES } from "@/lib/data/services";

const SERVICE_ICONS = {
  individuals: User,
  business: Building2,
  government: GovIcon,
} as const;

const JS_STACK = ["Next.js", "React Native", "Node.js", "Cloud"];
const NET_STACK = [".NET", "Umbraco CMS", "Razor", "React"];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Custom software, built for who you are."
      intro="One team for every kind of client. Tell us the problem- we design, build, launch and support the software that solves it."
      align="center"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.slug as keyof typeof SERVICE_ICONS];
          return (
            <article
              key={s.slug}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-navy-900/20 hover:shadow-[0_20px_50px_rgba(11,30,58,0.10)] dark:border-white/10 dark:bg-navy-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white transition-colors group-hover:bg-accent-600">
                <Icon size={22} />
              </span>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700 dark:text-teal-200">
                {s.audience}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy-900 dark:text-white">{s.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">{s.description}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 dark:border-white/10 pt-5">
                {s.offerings.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-50 dark:bg-white/10">
                      <Check size={12} className="text-accent-700 dark:text-teal-200" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
              <StartProjectButton className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 dark:text-white hover:underline">
                Discuss your project
                <ArrowRight size={15} />
              </StartProjectButton>
            </article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-3xl bg-navy-950 px-8 py-7">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 md:flex">
            <Code2 size={20} className="text-teal-200" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-200">
              JavaScript stack
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              <strong className="font-semibold text-white">Modern stack, enterprise discipline.</strong>{" "}
              Next.js, React Native, Node.js &amp; secure cloud infrastructure- with
              documentation, testing and support included.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {JS_STACK.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white px-8 py-7 dark:border-white/10 dark:bg-navy-900">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-white md:flex">
            <span className="text-sm font-extrabold">.N</span>
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700 dark:text-teal-200">
              Microsoft stack
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <strong className="font-semibold text-navy-900 dark:text-white">Enterprise-grade .NET solutions.</strong>{" "}
              .NET back ends, Umbraco CMS, with Razor or React front ends- secure, scalable
              and easy for your team to manage.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {NET_STACK.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-[#FAFAF8] dark:bg-white/[0.04] px-8 py-6 text-center md:flex-row md:text-left">
        <p className="max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Not sure which stack fits? We&apos;ll recommend the right one for your budget, team
          and scale- and handle everything end to end.
        </p>
        <Link
          href="/about"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
        >
          How we work
          <ArrowRight size={15} />
        </Link>
      </div>
    </Section>
  );
}
