import Link from 'next/link'
import Image from 'next/image'
import { InstagramIcon, VolunteerIcon } from '@/components/icons'

// ── Navbar (PRD Section 5 & 2.4) ──
// Full-width #111111 bar. Logo top-left, nav links centre-right,
// Instagram icon + Volunteer icon far right.
// Volunteer icon links to the external Google Form URL.

// TODO: Replace this URL with the actual volunteer Google Form link.
const VOLUNTEER_FORM_URL = 'https://forms.google.com/your-volunteer-form'
const INSTAGRAM_URL = 'https://instagram.com/projectstripes'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-ps-black border-b border-ps-border">
      <nav
        className="flex items-center justify-between h-[68px] px-6 md:px-14 max-w-[1600px] mx-auto"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Project Stripes home">
          <Image
            src="/images/logo/PS-logo-04.png"
            alt="Project Stripes"
            width={120}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Nav links — centre */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          <li>
            <Link
              href="/"
              className="font-display font-normal text-[12px] tracking-[0.08em] uppercase text-ps-white opacity-80 hover:opacity-100 transition-opacity no-underline"
            >
              Home
            </Link>
          </li>
          <li>
            {/*
              V1: /shop shows a "Coming Soon" placeholder.
              V2: this becomes the full shop page.
            */}
            <Link
              href="/shop"
              className="font-display font-normal text-[12px] tracking-[0.08em] uppercase text-ps-white opacity-80 hover:opacity-100 transition-opacity no-underline"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="font-display font-normal text-[12px] tracking-[0.08em] uppercase text-ps-white opacity-80 hover:opacity-100 transition-opacity no-underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="font-display font-normal text-[12px] tracking-[0.08em] uppercase text-ps-white opacity-80 hover:opacity-100 transition-opacity no-underline"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons — far right */}
        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Project Stripes on Instagram"
            className="text-ps-white opacity-80 hover:opacity-100 transition-opacity flex items-center"
          >
            <InstagramIcon className="w-[19px] h-[19px] fill-ps-white" />
          </a>
          <a
            href={VOLUNTEER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Volunteer with Project Stripes"
            className="text-ps-white opacity-80 hover:opacity-100 transition-opacity flex items-center"
          >
            <VolunteerIcon className="w-[19px] h-[19px] fill-ps-white" />
          </a>
        </div>
      </nav>
    </header>
  )
}
