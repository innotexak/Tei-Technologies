import Link from "next/link";
import { ArrowRight, ArrowUpRight, Hammer, Landmark } from "lucide-react";
import { PRODUCTS, productUrl } from "@/lib/data/products";

const PRODUCT_ICONS = {
  teicraft: Hammer,
  teiwill: Landmark,
} as const;

export function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-[#FAFAF8] dark:bg-white/[0.04]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700 dark:text-teal-200 dark:border-white/10 dark:bg-navy-900">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Our products
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-navy-900 dark:text-white md:text-[2.6rem] md:leading-[1.1]">
              Products we built, run and stand behind.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
            TeiCraft and TeiWill are products of Tei Technologies- designed, engineered and
            operated by our team, and proof of what we can build for you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((p) => {
            const Icon = PRODUCT_ICONS[p.slug];
            const url = productUrl(p);
            const external = url.startsWith("http");
            return (
              <article
                key={p.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,30,58,0.12)] dark:border-white/10 dark:bg-navy-900"
              >
                <div className="relative bg-navy-950 px-8 pb-8 pt-8">
                  <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy-950">
                      <Icon size={22} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {p.status}
                    </span>
                  </div>
                  <p className="relative mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {p.category}
                  </p>
                  <h3 className="relative mt-2 text-3xl font-semibold tracking-tight text-white">
                    {p.name}
                  </h3>
                  <p className="relative mt-1 text-sm font-medium text-slate-300">
                    {p.tagline} · by Tei Technologies
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-100 dark:border-white/10 pt-6">
                    <Link
                      href={p.detailHref}
                      className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      About {p.name}
                      <ArrowRight size={15} />
                    </Link>
                    <a
                      href={url}
                      target={external ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:underline"
                    >
                      Open {p.name}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
