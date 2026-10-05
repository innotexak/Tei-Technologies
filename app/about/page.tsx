import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { SERVICES } from "@/lib/data/services";
import { StartProjectButton } from "@/components/project-enquiry";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Tei Technologies- an enterprise software company and parent company of the products TeiCraft and TeiWill.",
};

const VALUES = [
  {
    title: "Clients first, always",
    body: "Whether it's one person with an idea or a ministry serving millions- we listen, advise honestly, and build what you actually need.",
  },
  {
    title: "Quality over shortcuts",
    body: "Tested code, thoughtful design, real documentation. Software that keeps working long after launch day.",
  },
  {
    title: "Ownership & accountability",
    body: "One team from design to support. We stand behind our client work and our own products alike.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="relative overflow-hidden bg-navy-950 text-white">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-200">
            About Tei Technologies
          </p>
          <h1 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-5xl md:leading-[1.08]">
            A software company that builds for everyone.
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-300">
            Tei Technologies is an enterprise software development company. We
            build custom software for{" "}
            <strong className="text-white">individuals</strong>,{" "}
            <strong className="text-white">businesses and firms</strong>, and{" "}
            <strong className="text-white">government</strong>- and we are the
            parent company behind our own products,{" "}
            <strong className="text-white">TeiCraft</strong> and{" "}
            <strong className="text-white">TeiWill</strong>.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">
              What we do for clients
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.slug} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent-600" />
                  <span>
                    <strong className="font-semibold text-navy-900 dark:text-white">
                      {s.title}:
                    </strong>{" "}
                    {s.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-[#FAFAF8] dark:bg-white/[0.04] p-8">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">
              Products we own
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Alongside client work, we design, build and operate our own
              products- living proof of our engineering standards:
            </p>
            <ul className="mt-4 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={p.detailHref}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all hover:border-navy-900/20 hover:shadow-md dark:border-white/10 dark:bg-navy-900"
                  >
                    <span>
                      <span className="block font-semibold text-navy-900 dark:text-white">
                        {p.name}
                      </span>
                      <span className="block text-sm text-slate-500 dark:text-slate-400">
                        {p.tagline}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-navy-900 dark:hover:text-white dark:group-hover:text-white"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-14 text-2xl font-semibold tracking-tight text-navy-900 dark:text-white md:text-3xl">
          What guides us
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-navy-900"
            >
              <p className="text-xs font-extrabold tracking-[0.18em] text-slate-300">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-semibold text-navy-900 dark:text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {v.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-navy-950 p-8 md:flex-row md:items-center">
          <p className="max-w-md text-[15px] text-slate-300">
            <strong className="font-semibold text-white">
              Want to work with us?
            </strong>{" "}
            Tell us about your project- we reply within 1–2 business days.
          </p>
          <StartProjectButton className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-slate-200">
            Contact us
            <ArrowRight size={15} />
          </StartProjectButton>
        </div>
      </div>
    </div>
  );
}
