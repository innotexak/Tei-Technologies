import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Hammer,
  Landmark,
  ShieldCheck,
  Sparkles,
  User,
  Building2,
  Landmark as GovIcon,
  Rocket,
  Search,
  PenTool,
  Truck,
} from "lucide-react";
import { Section } from "@/components/Section";
import { PRODUCTS, SERVICES, SITE, productUrl } from "@/lib/site";

const PRODUCT_ICONS = {
  teicraft: Hammer,
  teiwill: Landmark,
} as const;

const SERVICE_ICONS = {
  individuals: User,
  business: Building2,
  government: GovIcon,
} as const;

function Hero() {
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
            Tei Technologies designs and develops custom software — from
            personal apps and business platforms to secure government systems.
            We also build and run our own products,{" "}
            <strong className="font-semibold text-white">TeiCraft</strong> and{" "}
            <strong className="font-semibold text-white">TeiWill</strong>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-slate-200 hover:shadow-xl"
            >
              Start your project
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore our products
            </Link>
          </div>

          <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-slate-400">
            {[
              "Web & mobile apps",
              "Cloud & APIs",
              "Secure by design",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-teal-300" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            ["3", "Client segments"],
            ["2", "Live products"],
            ["End-to-end", "Design → launch"],
            ["100%", "Built & operated by us"],
          ].map(([v, l]) => (
            <div key={l} className="bg-navy-950/90 px-6 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-white">
                {v}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Capability marquee */}
      <div className="relative border-t border-white/10 bg-white/[0.02] py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 text-[13px] font-medium uppercase tracking-[0.14em] text-slate-400">
            {[
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
            ]
              .concat([
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
              ])
              .map((t, i) => (
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

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Custom software, built for who you are."
      intro="One team for every kind of client. Tell us the problem — we design, build, launch and support the software that solves it."
      align="center"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.slug as keyof typeof SERVICE_ICONS];
          return (
            <article
              key={s.slug}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-navy-900/20 hover:shadow-[0_20px_50px_rgba(11,30,58,0.10)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white transition-colors group-hover:bg-accent-600">
                <Icon size={22} />
              </span>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700">
                {s.audience}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {s.offerings.map((o) => (
                  <li
                    key={o}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-50">
                      <Check size={12} className="text-accent-700" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:underline"
              >
                Discuss your project
                <ArrowRight size={15} />
              </Link>
            </article>
          );
        })}
      </div>

      {/* Tech stacks */}
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
              <strong className="font-semibold text-white">
                Modern stack, enterprise discipline.
              </strong>{" "}
              Next.js, React Native, Node.js &amp; secure cloud infrastructure —
              with documentation, testing and support included.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "React Native", "Node.js", "Cloud"].map((t) => (
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
        <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white px-8 py-7">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-white md:flex">
            <span className="text-sm font-extrabold">.N</span>
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700">
              Microsoft stack
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              <strong className="font-semibold text-navy-900">
                Enterprise-grade .NET solutions.
              </strong>{" "}
              .NET back ends, Umbraco CMS, with Razor or React front ends —
              secure, scalable and easy for your team to manage.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[".NET", "Umbraco CMS", "Razor", "React"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-[#FAFAF8] px-8 py-6 text-center md:flex-row md:text-left">
        <p className="max-w-lg text-sm leading-relaxed text-slate-600">
          Not sure which stack fits? We&apos;ll recommend the right one for your
          budget, team and scale — and handle everything end to end.
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

function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Our products
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-navy-900 md:text-[2.6rem] md:leading-[1.1]">
              Products we built, run and stand behind.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-slate-600">
            TeiCraft and TeiWill are products of Tei Technologies — designed,
            engineered and operated by our team, and proof of what we can build
            for you.
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
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,30,58,0.12)]"
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
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-navy-900 hover:underline"
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

function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      body: "We map your goals, users and requirements — then scope a clear, fixed plan with timelines and cost.",
    },
    {
      icon: PenTool,
      title: "Design & build",
      body: "UI/UX, development and testing in weekly iterations. You see progress early and give feedback often.",
    },
    {
      icon: Rocket,
      title: "Launch",
      body: "Secure deployment, data migration, training and go-live support — handled end to end by our team.",
    },
    {
      icon: Truck,
      title: "Support & grow",
      body: "Hosting, monitoring, updates and new features. Your software keeps improving after launch.",
    },
  ];
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title="From idea to launched software in four steps."
      intro="A simple, transparent process whether you're an individual with an idea, a firm digitising operations, or a government agency serving citizens."
      align="center"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-3xl border border-slate-200 bg-white p-7"
          >
            <p className="text-xs font-extrabold tracking-[0.18em] text-slate-300">
              {String(i + 1).padStart(2, "0")}
            </p>
            <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-50 text-accent-700">
              <s.icon size={20} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <Section
      id="why"
      tone="navy"
      eyebrow="Why Tei Technologies"
      title="A software partner you can trust with serious work."
      intro="We don't just ship code — we take responsibility for the product, the security, and the people who depend on it."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Security & reliability first",
            body: "Tested, documented, backed-up systems with access control and audit trails — ready for business-critical and public-sector use.",
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
        ].map((f) => (
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
          <p className="text-lg font-semibold text-white">
            Tell us what you want to build.
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Free initial consultation — reply within 1–2 business days. Contact:{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-semibold text-white hover:underline"
            >
              {SITE.contactEmail}
            </a>
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-slate-200"
        >
          Get a quote
          <ArrowRight size={15} />
        </Link>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Process />
      <WhyUs />
    </>
  );
}
