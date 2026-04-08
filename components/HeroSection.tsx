import Link from 'next/link'
import { ChevronDownIcon, InstagramIcon, VolunteerIcon } from '@/components/icons'

// ── Hero Section (PRD Section 4.1 — Section 1) ──
// • Full-viewport #111111 background
// • Repeating diagonal #ForTheFauna watermark at ~7% opacity, -30deg
// • Headline: "Raising Awareness about [white] Endangered [red] Animals [white]"
// • CTA 1: SHOP FOR A CAUSE (solid red, /shop)
// • CTA 2: JOIN COMMUNITY (outline white, Instagram)
// • Scroll chevron with bounce animation
// • Floating icons (Instagram + Volunteer) fixed to right edge of viewport

const INSTAGRAM_URL = 'https://instagram.com/projectstripes'
// TODO: Replace with actual Google Form URL
const VOLUNTEER_FORM_URL = 'https://forms.google.com/your-volunteer-form'

export default function HeroSection() {
  return (
    <>
      {/* ── Floating Social Icons (PRD Section 2.4 & 4.1) ── */}
      {/* Fixed to the right edge of viewport on all pages — rendered inside Hero
          so it's scoped to this section in the markup, but visually fixed. */}
      <div
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
        aria-label="Social links"
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Project Stripes on Instagram"
          className="w-10 h-10 flex items-center justify-center bg-ps-black/80 border border-ps-border text-ps-white opacity-75 hover:opacity-100 transition-opacity"
        >
          <InstagramIcon className="w-[18px] h-[18px] fill-current" />
        </a>
        <a
          href={VOLUNTEER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Volunteer with Project Stripes"
          className="w-10 h-10 flex items-center justify-center bg-ps-black/80 border border-ps-border text-ps-white opacity-75 hover:opacity-100 transition-opacity"
        >
          <VolunteerIcon className="w-[18px] h-[18px] fill-current" />
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-68px)] bg-ps-black watermark-bg flex flex-col items-center justify-center text-center px-6 md:px-14 py-20 overflow-hidden">

        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="font-display font-extrabold text-[clamp(44px,6.5vw,80px)] leading-[1.05] uppercase tracking-[-0.01em] mb-12">
            Raising Awareness
            <br />
            about{' '}
            <span className="text-ps-red">Endangered</span>
            <br />
            Animals
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/shop" className="btn-primary">
              Shop for a Cause
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Join Community
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 text-ps-white opacity-40">
            <span className="font-display font-light text-[10px] tracking-[0.15em] uppercase">
              Scroll
            </span>
            <ChevronDownIcon className="w-5 h-5 animate-bounce-y" />
          </div>
        </div>
      </section>
    </>
  )
}
