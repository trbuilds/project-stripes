import Link from 'next/link'
import Image from 'next/image'

// ── Instagram Feed Section (PRD Section 4.1 — Section 5) ──
// V1 implementation: embed widget via Behold.so (free tier, no API credentials).
//
// SETUP STEPS:
// 1. Go to https://behold.so and create a free account.
// 2. Connect your @projectstripes Instagram account.
// 3. Create a new feed widget — copy the Widget ID shown in the dashboard.
// 4. Replace BEHOLD_WIDGET_ID below with your actual ID.
// 5. The <behold-widget> custom element loads the last 6 posts automatically.
//
// FALLBACK: If the embed is unavailable, this component renders a static
// 3×2 grid of screenshot images from /public/images/instagram/
// (insta-1.webp through insta-6.webp).

const INSTAGRAM_URL = 'https://instagram.com/projectstripes'
const BEHOLD_WIDGET_ID = 'RMUFOkiCdBQonQjmgtl5'

// Static fallback images (manual screenshots from @projectstripes)
const fallbackImages = [
  { src: '/images/instagram/insta-1.webp', alt: 'Project Stripes Instagram post 1 — wildlife conservation update' },
  { src: '/images/instagram/insta-2.webp', alt: 'Project Stripes Instagram post 2 — new tee launch' },
  { src: '/images/instagram/insta-3.webp', alt: 'Project Stripes Instagram post 3 — community spotlight' },
  { src: '/images/instagram/insta-4.webp', alt: 'Project Stripes Instagram post 4 — endangered animal awareness' },
  { src: '/images/instagram/insta-5.webp', alt: 'Project Stripes Instagram post 5 — conservation partner update' },
  { src: '/images/instagram/insta-6.webp', alt: 'Project Stripes Instagram post 6 — behind the scenes' },
]

// Set to true to show fallback grid instead of Behold embed
const USE_FALLBACK = false

export default function InstagramFeed() {
  return (
    <section className="bg-ps-black py-24 px-6 md:px-14 text-center">
      <div className="section-container">
        {/* Heading */}
        <h2 className="font-display font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.01em] mb-3">
          Wild & Fresh From The Field
        </h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-light text-[16px] text-ps-grey hover:text-ps-white transition-colors no-underline block mb-12"
        >
          @projectstripes
        </a>

        {/* Feed — Behold embed or fallback static grid */}
        {USE_FALLBACK ? (
          /* ── Fallback: Static 3×2 grid ── */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[6px] mb-12">
            {fallbackImages.map((img, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group block"
                aria-label={`View on Instagram: ${img.alt}`}
              >
                {/*
                  PLACEHOLDER div — replace with <Image> once screenshots are in
                  /public/images/instagram/
                */}
                <div className="absolute inset-0 bg-ps-dark flex items-center justify-center">
                  <p className="font-display font-light text-[10px] tracking-[0.08em] uppercase text-ps-grey opacity-30">
                    insta-{i + 1}.webp
                  </p>
                  {/*
                    WHEN READY — uncomment:
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      loading="lazy"
                    />
                  */}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ps-red/0 group-hover:bg-ps-red/20 transition-colors duration-300 z-10" />
              </a>
            ))}
          </div>
        ) : (
          /* ── Live Embed: Behold.so widget ── */
          // The <behold-widget> custom element is loaded by Behold's script.
          // Add this script to app/layout.tsx <head> when activating:
          // <Script src="https://w.behold.so/widget.js" type="module" />
          <div className="mb-12">
            {/* @ts-expect-error — behold-widget is a custom element */}
            <behold-widget feed-id={BEHOLD_WIDGET_ID} />
          </div>
        )}

        {/* CTA */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  )
}
