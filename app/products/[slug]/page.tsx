import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS, productBySlug, productUrl } from "@/lib/data/products";
import { StartProjectButton } from "@/components/project-enquiry";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: `${product.name}- ${product.tagline}. ${product.longDescription}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const url = productUrl(product);
  const isExternal = url.startsWith("http");

  return (
    <div>
      <div className="relative overflow-hidden bg-navy-950 text-white">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ArrowLeft size={15} />
            All products
          </Link>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-200">
            A product of Tei Technologies · {product.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-base font-medium text-slate-300">
            {product.tagline} · {product.status}
          </p>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-300">
            {product.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-slate-200"
            >
              Open {product.name}
              <ArrowUpRight size={16} />
            </a>
            <StartProjectButton className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Ask about this product
            </StartProjectButton>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">Who it&apos;s for</h2>
            <ul className="mt-4 space-y-2.5">
              {product.audience.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-600" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-[#FAFAF8] dark:bg-white/[0.04] p-8">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">Key features</h2>
            <ul className="mt-4 space-y-2.5">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-600" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-navy-950 p-8 text-center md:p-10">
          <p className="text-lg font-semibold text-white">
            Need something like {product.name}- but built for you?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            We build custom software for individuals, firms and government.
            Tell us your idea and we&apos;ll scope it with you.
          </p>
          <StartProjectButton className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-slate-200">
            Start a project
          </StartProjectButton>
        </div>

        <p className="mt-8 border-t border-slate-200 dark:border-white/10 pt-6 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {product.name} is a product designed, built and operated by Tei
          Technologies. Product terms, privacy and support live on its own
          platform.
        </p>
      </div>
    </div>
  );
}
