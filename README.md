# Tei Technologies — Website

Website for **Tei Technologies**, an enterprise software company building custom software for individuals, firms and government — and the parent company behind the products **TeiCraft** (artisan marketplace) and **TeiWill** (wills & estate management).

## Product separation (important)

This site never imports code from the product apps:

- No shared database, auth, or components.
- Only links out via `NEXT_PUBLIC_TEICRAFT_URL` / `NEXT_PUBLIC_TEIWILL_URL`.
- If unset, links fall back to in-site overviews at `/products/teicraft` and `/products/teiwill`.
- Old `/companies/*` URLs redirect to `/products/*`.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · lucide-react.

## Run

```bash
npm install
cp .env.example .env   # optional; defaults work for local dev
npm run dev            # http://localhost:3000 (use -p 3001 if siblings run on 3000)
npm run build
npm start
```

Suggested local ports: `teicraft` → 3000, `teiwill` → 3000 (separate checkouts), `website` → 3001 (`npm run dev -- -p 3001`).

## Structure

```
website/
├── app/
│   ├── page.tsx              # landing (hero, services, products, process)
│   ├── about/page.tsx        # company profile + values
│   ├── contact/page.tsx      # project enquiries
│   ├── legal/page.tsx        # legal & privacy
│   ├── products/[slug]/     # per-product overviews (teicraft, teiwill)
│   ├── layout.tsx             # metadata + header/footer shell
│   └── globals.css            # Tailwind v4 theme
├── components/
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   └── Section.tsx
├── lib/
│   └── site.ts               # products + services registry (single source of truth)
└── public/
    └── favicon.svg
```

## Editing

- Product copy/links: `lib/site.ts`
- Landing sections: `app/page.tsx`
- Nav/contact email: `lib/site.ts` (`SITE`)
- Production URLs: set `NEXT_PUBLIC_TEICRAFT_URL`, `NEXT_PUBLIC_TEIWILL_URL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`.
