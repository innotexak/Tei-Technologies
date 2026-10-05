import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "white" | "soft" | "navy";
  align?: "left" | "center";
}) {
  const bg =
    tone === "navy"
      ? "bg-navy-950 text-slate-200"
      : tone === "soft"
        ? "bg-[--color-cream] bg-[#FAFAF8] dark:bg-white/[0.02]"
        : "bg-white dark:bg-navy-950";
  const centered = align === "center";
  return (
    <section id={id} className={`${bg} scroll-mt-24`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {eyebrow && (
          <p
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
              tone === "navy"
                ? "border-white/15 bg-white/5 text-teal-200"
                : "border-slate-200 bg-slate-50 text-accent-700 dark:border-white/10 dark:bg-white/5 dark:text-teal-200"
            } ${centered ? "mx-auto" : ""}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-balance md:text-[2.6rem] md:leading-[1.1] ${
            tone === "navy" ? "text-white" : "text-navy-900 dark:text-white"
          } ${centered ? "mx-auto text-center" : ""}`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-4 max-w-2xl text-[16px] leading-relaxed text-pretty ${
              tone === "navy" ? "text-slate-400" : "text-slate-600 dark:text-slate-300"
            } ${centered ? "mx-auto text-center" : ""}`}
          >
            {intro}
          </p>
        )}
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700 dark:border-white/10 dark:bg-white/5 dark:text-teal-200">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
      {children}
    </p>
  );
}
