import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/config/site";
import { PRODUCTS, productUrl } from "@/lib/data/products";
import { StartProjectButton } from "@/components/project-enquiry";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16">
        {/* CTA card */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="max-w-md text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Have something to build? Let&apos;s talk.
            </h2>
            <p className="mt-2 max-w-md text-[15px] text-slate-400">
              Custom software for individuals, firms and government- plus our
              own products, TeiCraft and TeiWill.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <StartProjectButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-slate-200">
              Start a project
            </StartProjectButton>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {SITE.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[13px] font-extrabold text-navy-950">
                Tei
              </span>
              <p className="text-base font-bold text-white">Tei Technologies</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              An enterprise software company building custom solutions for
              individuals, businesses and government- and the parent company
              behind the products TeiCraft and TeiWill.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#services" className="hover:text-white">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  For Government
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Products
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {PRODUCTS.map((p) => {
                const url = productUrl(p);
                const isExternal = url.startsWith("http");
                return (
                  <li key={p.slug}>
                    <a
                      href={url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1 hover:text-white"
                    >
                      {p.name}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                      <span className="block w-full text-xs text-slate-500 dark:text-slate-400">
                        {p.tagline}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white">
                  Legal &amp; privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Tei Technologies. All rights reserved. TeiCraft and TeiWill
            are products of Tei Technologies.
          </p>
          <p>Built and operated by Tei Technologies.</p>
        </div>
      </div>
    </footer>
  );
}
