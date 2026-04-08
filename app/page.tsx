import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import GetInvolvedSection from '@/components/GetInvolvedSection'
import CommunityGallery from '@/components/CommunityGallery'
import MissionSection from '@/components/MissionSection'
import InstagramFeed from '@/components/InstagramFeed'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Project Stripes — Raising Awareness for Endangered Animals',
  description:
    'Project Stripes is a cause-commerce brand dedicated to raising awareness about threatened and endangered animals. Shop with purpose — every purchase contributes to conservation.',
  alternates: {
    canonical: 'https://www.projectstripes.xyz',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Get Involved */}
      <GetInvolvedSection />

      {/* Section 3 — Community Gallery (Carousel) */}
      <CommunityGallery />

      {/* Section 4 — Mission / About */}
      <MissionSection />

      {/* Section 5 — Instagram Feed */}
      <InstagramFeed />

      {/* Section 6 — Contact */}
      <ContactSection />

      {/* Section 7 — Footer is rendered in layout.tsx */}
    </>
  )
}
