"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 text-[13px] font-extrabold tracking-tight text-white shadow-sm"
      >
        Tei
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight text-navy-900">
          Tei Technologies
        </span>
        <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Software Company
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-shadow ${
        scrolled ? "border-slate-200 shadow-[0_4px_24px_rgba(11,30,58,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {SITE.nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${
                  active
                    ? "text-navy-900"
                    : "text-slate-500 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-5 py-2.5 text-[13.5px] font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg"
          >
            Start a project
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-navy-900 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <ul className="space-y-1">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
              >
                Start a project
                <ArrowRight size={15} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
