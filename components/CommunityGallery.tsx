'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'

// ── Community Gallery — Carousel (PRD Section 4.1 — Section 3) ──
// • Pure React state (no external carousel library)
// • Desktop: 4 photos visible | Tablet: 2 | Mobile: 1
// • Smooth CSS translateX transition at 60fps (will-change: transform)
// • No autoplay
// • Left/right arrow buttons with aria-labels

// ── Gallery Images ──
// Add your lifestyle photos to /public/images/gallery/
// Filenames: gallery-1.webp, gallery-2.webp ... gallery-N.webp
// Recommended: square crops (1:1), minimum 800×800px, WebP format.
// Alt text: describe what the photo shows (person + animal/product).

const galleryImages = [
  {
    src: '/images/gallery/gallery-1.webp',
    alt: 'Community member wearing a Project Stripes tiger tee at an outdoor event',
  },
  {
    src: '/images/gallery/gallery-2.webp',
    alt: 'Friends sporting Project Stripes elephant tees on a nature hike',
  },
  {
    src: '/images/gallery/gallery-3.webp',
    alt: 'Project Stripes supporter at a wildlife conservation rally',
  },
  {
    src: '/images/gallery/gallery-4.webp',
    alt: 'Customer showing off their Project Stripes leopard tee',
  },
  {
    src: '/images/gallery/gallery-5.webp',
    alt: 'Group of Project Stripes community members in matching tees',
  },
  {
    src: '/images/gallery/gallery-6.webp',
    alt: 'Volunteer wearing Project Stripes tee during a conservation event',
  },
]

// Slides visible per breakpoint (handled via CSS, JS tracks desktop default)
const SLIDES_VISIBLE = 4 // desktop; override with CSS for tablet/mobile

export default function CommunityGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = galleryImages.length
  const maxIndex = totalSlides - SLIDES_VISIBLE // desktop max

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1))
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section className="bg-ps-black py-24">
      {/* Header */}
      <div className="text-center px-6 md:px-14 mb-12">
        <h2 className="font-display font-extrabold text-[clamp(32px,4vw,48px)] uppercase tracking-[-0.01em] mb-3">
          Community Gallery
        </h2>
        <p className="font-display font-light text-[16px] text-ps-grey">
          Real people, real impact — our community wearing Project Stripes
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous photo"
          className="
            absolute left-3 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 flex items-center justify-center
            bg-black/65 border border-white/15
            text-ps-white cursor-pointer
            transition-opacity duration-200
            disabled:opacity-30
          "
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Track */}
        <div
          className="flex carousel-transition"
          style={{ transform: `translateX(-${currentIndex * (100 / SLIDES_VISIBLE)}%)` }}
          aria-live="polite"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
                relative shrink-0 aspect-square overflow-hidden
                w-full
                sm:w-1/2
                lg:w-1/4
              "
            >
              {/*
                IMAGE PLACEHOLDER:
                Once gallery photos are added to /public/images/gallery/,
                the Image component below will render them.
                Until then, the placeholder div is shown.
              */}
              <div className="absolute inset-0 bg-ps-dark flex items-center justify-center group">
                {/* Swap this div for <Image> once assets are ready */}
                <p className="font-display font-light text-[10px] tracking-[0.08em] uppercase text-ps-grey opacity-30 text-center px-4">
                  gallery-{index + 1}.webp
                </p>

                {/*
                  WHEN READY — uncomment this and remove the placeholder div above:
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                */}
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Next photo"
          className="
            absolute right-3 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 flex items-center justify-center
            bg-black/65 border border-white/15
            text-ps-white cursor-pointer
            transition-opacity duration-200
            disabled:opacity-30
          "
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 px-6">
        <Link href="/shop" className="btn-primary">
          Join the Cause
        </Link>
      </div>
    </section>
  )
}
