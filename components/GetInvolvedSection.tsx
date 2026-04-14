import Link from 'next/link'
import Image from 'next/image'

// ── Get Involved Section (PRD Section 4.1 — Section 2) ──
// 2-column: text left (~45%), product image collage right (~55%).
// Stacks to single column on mobile.
//
// IMAGE PLACEHOLDER:
// Replace `/images/product-collage.jpg` in /public/images/ with the
// actual "Project Mammals" product grid graphic from the current Wix site.
// Recommended: export as WebP, minimum 1200px wide.

export default function GetInvolvedSection() {
  return (
    <section className="bg-ps-dark py-28 px-6 md:px-14">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-16 md:gap-20 items-center">

          {/* Left — Text */}
          <div>
            <p className="font-display font-normal text-[11px] tracking-[0.15em] uppercase text-ps-grey mb-3">
              Make an Impact
            </p>
            <h2 className="font-display font-extrabold text-[clamp(36px,4vw,58px)] leading-[1.05] uppercase text-ps-red mb-7 tracking-[-0.01em]">
              Get<br />Involved!
            </h2>
            <p className="font-display font-light text-[17px] text-ps-grey leading-[1.8] mb-5">
              Every purchase you make directly contributes to wildlife
              conservation efforts around the world. We partner with
              organisations on the ground to protect endangered species
              and their habitats.
            </p>
            <p className="font-display font-light text-[17px] text-ps-grey leading-[1.8] mb-5">
              When you shop with Project Stripes, a portion of every sale
              goes directly to conservation.{' '}
              <span className="text-ps-orange font-extrabold">
                It&apos;s a win-win!
              </span>{' '}
              You get premium quality apparel and endangered animals get
              the support they need to survive.
            </p>
            <div className="mt-9">
              <Link href="/shop" className="btn-outline">
                Shop with Purpose
              </Link>
            </div>
          </div>

          {/* Right — Product collage */}
          <div className="w-full">
            <Image
              src="/images/Mammals_Showcase.gif"
              alt="Project Stripes product collage — Mammal Tees collection"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
