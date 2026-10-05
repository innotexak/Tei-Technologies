import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { StartProjectButton } from "@/components/project-enquiry";

const TRUST_POINTS = ["Web & mobile apps", "Cloud & APIs", "Secure by design"];

const STATS: Array<[string, string]> = [
  ["3", "Client segments"],
  ["2", "Live products"],
  ["End-to-end", "Design → launch"],
  ["100%", "Built & operated by us"],
];

const CAPABILITIES = [
  "Custom Software",
  ".NET & Umbraco",
  "Web Platforms",
  "Mobile Apps",
  "Government Systems",
  "E-Commerce",
  "APIs & Integrations",
  "TeiCraft",
  "TeiWill",
  "Cloud & DevOps",
  "UI/UX Design",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-24 h-[380px] w-[380px] rounded-full bg-navy-700/60 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-200 backdrop-blur">
            <Sparkles size={13} className="text-teal-300" />
            Tei Technologies · Enterprise Software Company
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
            We build software for{" "}
            <span className="bg-gradient-to-r from-teal-200 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              people, businesses
            </span>{" "}
            &amp; government.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-slate-300 md:text-lg">
            Tei Technologies designs and develops custom software- from personal apps and
            business platforms to secure government systems. We also build and run our own
            products, <strong className="font-semibold text-white">TeiCraft</strong> and{" "}
            <strong className="font-semibold text-white">TeiWill</strong>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <StartProjectButton className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-slate-200 hover:shadow-xl">
              Start your project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </StartProjectButton>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore our products
            </Link>
          </div>

          <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-slate-400">
            {TRUST_POINTS.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-teal-300" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {STATS.map(([v, l]) => (
            <div key={l} className="bg-navy-950/90 px-6 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-white">{v}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.02] py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 text-[13px] font-medium uppercase tracking-[0.14em] text-slate-400">
            {[...CAPABILITIES, ...CAPABILITIES].map((t, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                {t}
                <span className="h-1 w-1 rounded-full bg-teal-400/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
