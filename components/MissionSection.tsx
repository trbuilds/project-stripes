import Image from 'next/image'
import Link from 'next/link'

// ── Mission Section (PRD Section 4.1 — Section 4) ──
// • Full-bleed wildlife photo background (elephant image)
// • Dark overlay gradient for text legibility
// • Text block on left half
// • id="about" — targeted by nav ABOUT link
// • CTA: VOLUNTEER TO HELP → external Google Form

// TODO: Replace with actual volunteer Google Form URL
const VOLUNTEER_FORM_URL = 'https://forms.google.com/your-volunteer-form'

export default function MissionSection() {
  return (
    <section
      id="about"
      className="relative min-h-[640px] flex items-center px-6 md:px-14 py-32 overflow-hidden bg-[#0C1A0C]"
    >
      <Image
        src="/images/mission_section.jpg"
        alt="African elephant in the wild — Project Stripes mission"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Dark gradient overlay — ensures text legibility over photo */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.10) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 max-w-[580px] w-full">
        <h2 className="font-display font-extrabold text-[clamp(40px,5vw,68px)] leading-[1.05] text-ps-white mb-7 tracking-[-0.01em]">
          Mission
        </h2>
        <p className="font-display font-light text-[17px] text-ps-white/90 leading-[1.85] mb-5">
          We believe that every stripe, spot, and scale tells a story
          worth saving. Project Stripes exists to transform consumer
          choices into conservation action — turning every purchase into
          a direct contribution to protecting the world&apos;s most
          endangered animals.
        </p>
        <p className="font-display font-light text-[17px] text-ps-white/90 leading-[1.85] mb-10">
          Through education, community, and cause-driven commerce,
          we&apos;re building a movement that proves fashion and wildlife
          conservation can walk hand in hand. Every tee sold puts real
          resources on the ground where endangered species need it most.
        </p>
        <a
          href={VOLUNTEER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Volunteer to Help
        </a>
      </div>
    </section>
  )
}
