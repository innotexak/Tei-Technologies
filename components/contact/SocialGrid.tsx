import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, type LucideIcon } from "lucide-react";
import { SOCIALS, type SocialSlug } from "@/lib/data/socials";

const SOCIAL_ICONS: Record<SocialSlug, LucideIcon> = {
  linkedin: Linkedin,
  x: Twitter,
  facebook: Facebook,
  instagram: Instagram,
};

/** Social channel cards- the contact page has no form by design. */
export function SocialGrid() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SOCIALS.map((s) => {
        const Icon = SOCIAL_ICONS[s.slug] ?? ArrowUpRight;
        return (
          <a
            key={s.slug}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy-900/20 hover:shadow-[0_20px_50px_rgba(11,30,58,0.10)] dark:border-white/10 dark:bg-navy-900"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-950 text-white transition-colors group-hover:bg-accent-600">
              <Icon size={19} />
            </span>
            <p className="mt-4 flex items-center gap-1.5 text-[15px] font-semibold text-navy-900 dark:text-white">
              {s.label}
              <ArrowUpRight
                size={15}
                className="text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-navy-900 dark:hover:text-white dark:group-hover:text-white"
              />
            </p>
            <p className="mt-0.5 text-sm font-medium text-accent-700 dark:text-teal-200">{s.handle}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{s.blurb}</p>
          </a>
        );
      })}
    </div>
  );
}
