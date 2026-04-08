# Project Stripes — Website

A cause-commerce website for [Project Stripes](https://www.projectstripes.xyz) — raising awareness for endangered animals.

Built with **Next.js 14 (App Router)** · **Tailwind CSS** · **TypeScript** · Deployed on **Vercel**.

---

## Quick Start

### 1. Prerequisites

- Node.js **18.17** or later — check with `node -v`
- A package manager: npm (comes with Node), pnpm, or yarn

### 2. Clone & Install

```bash
# Clone the repo
git clone https://github.com/your-org/project-stripes.git
cd project-stripes

# Install dependencies
npm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env.local

# Open .env.local and fill in:
# NEXT_PUBLIC_FORMSPREE_ID — your Formspree form ID
```

See the [Formspree Setup](#formspree-setup) section below for step-by-step instructions.

### 4. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the Project Stripes landing page.

---

## Adding Your Images

All images live in `/public/images/`. The site uses Next.js `<Image>` for automatic optimisation and lazy loading.

| File path | What it is |
|---|---|
| `/public/images/og-image.jpg` | Open Graph image — 1200×630px branded graphic |
| `/public/images/product-collage.webp` | Get Involved section — product grid collage |
| `/public/images/mission-bg.webp` | Mission section — wildlife background photo (1920×1080px+) |
| `/public/images/gallery/gallery-1.webp` … `gallery-6.webp` | Community gallery carousel photos (square, min 800×800px) |
| `/public/images/instagram/insta-1.webp` … `insta-6.webp` | Instagram feed fallback screenshots |

**Steps:**
1. Export images from the current Wix site (right-click → Save / download from Wix media manager).
2. Convert to WebP for performance (use [Squoosh](https://squoosh.app) or `cwebp` CLI).
3. Place in the paths above.
4. In `GetInvolvedSection.tsx`, `MissionSection.tsx`, `CommunityGallery.tsx`, and `InstagramFeed.tsx`, uncomment the `<Image>` blocks and remove the placeholder divs.

---

## Formspree Setup

1. Go to [formspree.io](https://formspree.io) → Create a free account.
2. Click **+ New Form** → name it "Project Stripes Contact".
3. Copy the **Form ID** (looks like `xabcdefg`).
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xabcdefg
   ```
5. In Formspree dashboard, set the notification email to the Project Stripes inbox.
6. Test by submitting the contact form — you should receive an email.

---

## Instagram Feed Setup (Behold.so)

1. Go to [behold.so](https://behold.so) → Create a free account.
2. Connect the `@projectstripes` Instagram account.
3. Create a new feed → copy the **Widget ID**.
4. Open `components/InstagramFeed.tsx`.
5. Replace `YOUR_BEHOLD_WIDGET_ID` with your actual Widget ID.
6. Add Behold's script to `app/layout.tsx` `<head>`:
   ```tsx
   import Script from 'next/script'
   // Inside <head>:
   <Script src="https://w.behold.so/widget.js" type="module" />
   ```
7. The `USE_FALLBACK` constant will automatically switch to `false` when the ID is set.

---

## Volunteer Form

Replace `VOLUNTEER_FORM_URL` in two files with the actual Google Form link:
- `components/Navbar.tsx`
- `components/HeroSection.tsx`

---

## Replacing Legal Page Copy

The three legal pages (`/shipping`, `/terms-conditions`, `/privacy-policy`) contain placeholder text. Copy the actual policy content from the current Wix site into:
- `app/shipping/page.tsx`
- `app/terms-conditions/page.tsx`
- `app/privacy-policy/page.tsx`

---

## Deploying to Vercel

### First deploy

1. Push your code to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Import Project** → select your repo.
3. Vercel auto-detects Next.js — no config needed.
4. Add environment variables in Vercel dashboard → **Settings → Environment Variables**:
   - `NEXT_PUBLIC_FORMSPREE_ID`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**.

### Custom domain

1. Vercel dashboard → **Settings → Domains**.
2. Add `projectstripes.xyz` and `www.projectstripes.xyz`.
3. Follow DNS instructions to point your domain to Vercel.
4. Vercel provisions HTTPS automatically.

### Subsequent deploys

Every push to `main` triggers an automatic deployment. Preview deployments are created for every pull request.

---

## Project Structure

```
project-stripes/
├── app/
│   ├── globals.css              # Tailwind directives + CSS variables
│   ├── layout.tsx               # Global layout: Almarai font, Navbar, Footer, metadata
│   ├── page.tsx                 # Home page (all 7 sections)
│   ├── shop/page.tsx            # V1: Coming Soon placeholder
│   ├── shipping/page.tsx        # Shipping & Returns
│   ├── terms-conditions/page.tsx
│   └── privacy-policy/page.tsx
├── components/
│   ├── icons.tsx                # Shared SVG icons
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx          # Hero + floating social icons
│   ├── GetInvolvedSection.tsx
│   ├── CommunityGallery.tsx     # Carousel (client component)
│   ├── MissionSection.tsx
│   ├── InstagramFeed.tsx        # Behold embed + static fallback
│   └── ContactSection.tsx       # Formspree form (client component)
├── data/
│   └── products.json            # V1 static catalog; migrates to Supabase in V2
├── public/
│   ├── images/                  # All photos go here
│   └── robots.txt
├── .env.example                 # Copy to .env.local
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## V1 Launch Checklist

Before going live, work through the PRD Section 11 checklist:

- [ ] All images added and `<Image>` components uncommented
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` set and form tested end-to-end
- [ ] Behold Widget ID set (or Instagram screenshot fallback images added)
- [ ] Volunteer Google Form URL replaced in Navbar and HeroSection
- [ ] Legal page copy replaced with actual Wix site content
- [ ] OG image (`/public/images/og-image.jpg`) created at 1200×630px
- [ ] Custom domain connected in Vercel, HTTPS active
- [ ] Vercel Analytics enabled (Vercel dashboard → Analytics tab)
- [ ] Google Search Console: site verified, sitemap submitted
- [ ] Lighthouse score ≥ 90 on mobile and desktop
- [ ] All nav links and anchor scrolls tested
- [ ] Site tested at 375px, 768px, 1024px, 1440px

---

## V2 Roadmap

See PRD Section 7, 12 for full V2 scope:

- Supabase (Postgres) for products, orders, users
- Razorpay payment gateway (UPI, Netbanking, Cards)
- Full Shop page + Individual product pages
- Customer accounts via Supabase Auth
- Transactional email via Resend
- Admin dashboard (Next.js `/admin` routes)
- Shiprocket shipping calculation + tracking

---

*Built by [Hatmaker Studio](https://hatmakerstudio.com) for Project Stripes.*
