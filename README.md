# Mersin Nakliyat — Premium Landing

Modern, conversion-focused landing page for a Mersin-based moving company.

## Stack

- **Next.js 15** (App Router, RSC) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3.4** + shadcn-style design system + CSS variables for theming
- **Framer Motion** for production-grade motion (fade-up, blur reveal, stagger)
- **Radix UI** primitives (Accordion, Label, Slot)
- **React Hook Form + Zod** for form validation
- **Lucide React** icons

## Local Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, JSON-LD (LocalBusiness)
│  ├─ page.tsx          # composes the sections
│  ├─ globals.css       # tailwind + design tokens
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ ui/               # design system primitives
│  └─ site/             # landing page sections
└─ lib/
   ├─ site.ts           # site config (brand, phone, whatsapp, rating)
   └─ utils.ts          # cn() helper
```

## Sections

- `Navbar` — sticky, glass-on-scroll, mobile drawer
- `Hero` — headline, stats, CTAs, animated floating cards
- `TrustBar` — auto-scrolling trust signals
- `Services` — 6 service cards with hover motion
- `Process` — 4-step "how it works"
- `WhyUs` — dark section with reasons + stats
- `Coverage` — Mersin districts grid
- `Testimonials` — customer reviews
- `FAQ` — Radix accordion
- `QuoteForm` — Hook Form + Zod; submits via WhatsApp
- `CTA` — dark gradient conversion banner
- `Footer` — links, social, contact
- `WhatsAppFloating` — pulsing CTA button

## Customization

Update `src/lib/site.ts` with your real brand info:

- `name`, `phone`, `phoneDisplay`, `whatsapp`, `email`, `address`
- `rating.value`, `rating.count`
- `stats.moves`, `stats.years`, `stats.rating`, `stats.coverage`

Drop your real images into `public/images/` (current placeholders: `logo.svg`,
`truck.svg`). The truck SVG renders inside the hero card.

## SEO

- `<title>` template, OpenGraph, Twitter cards in `app/layout.tsx`
- LocalBusiness JSON-LD with aggregateRating
- `sitemap.ts` + `robots.ts`
- Turkish locale (`lang="tr"`, `tr_TR`)
- Add Google Search Console verification once the domain is live.

## Deploy

The fastest path is **Vercel**:

```bash
npx vercel
```

Or connect this repo on <https://vercel.com/new>. Set the custom domain from
the dashboard — SSL is automatic.
