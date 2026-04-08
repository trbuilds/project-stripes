import type { Metadata } from 'next'
import Link from 'next/link'

// ── Shop Page — V1 Placeholder (PRD Section 3 & 5) ──
// In V1, /shop shows a "Coming Soon" state.
// V2 will replace this with the full product grid.

export const metadata: Metadata = {
  title: 'Shop — Coming Soon',
  description:
    'The Project Stripes shop is coming soon. Sign up to be the first to know when we launch.',
  robots: { index: false }, // Don't index the placeholder
}

export default function ShopPage() {
  return (
    <section className="min-h-[calc(100vh-68px-89px)] bg-ps-black watermark-bg flex items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="font-display font-normal text-[11px] tracking-[0.2em] uppercase text-ps-grey mb-4">
          Coming Soon
        </p>
        <h1 className="font-display font-extrabold text-[clamp(40px,6vw,72px)] uppercase leading-[1.05] mb-6 tracking-[-0.01em]">
          The Shop is
          <br />
          <span className="text-ps-red">Almost Ready</span>
        </h1>
        <p className="font-display font-light text-[17px] text-ps-grey leading-[1.8] mb-10">
          We&apos;re putting the finishing touches on our store. In the meantime,
          follow us on Instagram to be the first to see what&apos;s dropping.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/projectstripes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow @projectstripes
          </a>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
