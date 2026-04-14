'use client'

import { useState, useEffect } from 'react'
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
  { src: '/images/customer images/Aditya Jha.jpg', alt: 'Aditya Jha wearing a Project Stripes tee' },
  { src: '/images/customer images/Akash Kedia.jpeg', alt: 'Akash Kedia wearing a Project Stripes tee' },
  { src: '/images/customer images/Jyoti.png', alt: 'Jyoti wearing a Project Stripes tee' },
  { src: '/images/customer images/Meghna.jpg', alt: 'Meghna wearing a Project Stripes tee' },
  { src: '/images/customer images/Padma Puvvala.jpg', alt: 'Padma Puvvala wearing a Project Stripes tee' },
  { src: '/images/customer images/Siddharth_1 - Copy.jpeg', alt: 'Siddharth wearing a Project Stripes tee' },
  { src: '/images/customer images/roshni.jpg', alt: 'Roshni wearing a Project Stripes tee' },
  { src: '/images/customer images/siddhu.jpg', alt: 'Siddhu wearing a Project Stripes tee' },
  { src: '/images/customer images/sudhansh monica.png', alt: 'Sudhansh and Monica wearing Project Stripes tees' },
  { src: '/images/customer images/tria.jpg', alt: 'Tria wearing a Project Stripes tee' },
]

function getSlidesVisible() {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 4
}

export default function CommunityGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesVisible, setSlidesVisible] = useState(4)
  const totalSlides = galleryImages.length
  const maxIndex = totalSlides - slidesVisible

  useEffect(() => {
    const update = () => setSlidesVisible(getSlidesVisible())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

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
            absolute left-3 top-1/2 -translate-y-1/2 z-20
            w-16 h-16 flex items-center justify-center
            bg-white border border-black/10
            text-black cursor-pointer
            transition-opacity duration-200
            disabled:opacity-30
          "
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </button>

        {/* Track */}
        <div
          className="flex carousel-transition"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesVisible)}%)` }}
          aria-live="polite"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
                relative shrink-0 aspect-[3/4] overflow-hidden
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
              <div className="absolute inset-0 group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
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
            absolute right-16 top-1/2 -translate-y-1/2 z-20
            w-16 h-16 flex items-center justify-center
            bg-white border border-black/10
            text-black cursor-pointer
            transition-opacity duration-200
            disabled:opacity-30
          "
        >
          <ChevronRightIcon className="w-7 h-7" />
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
