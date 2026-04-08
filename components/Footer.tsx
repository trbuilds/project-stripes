import Link from 'next/link'

// ── Footer (PRD Section 4.1 — Section 7) ──
// 2-column: copyright left, legal links right.
// © 2026 by Project Stripes. Powered and secured by Hatmaker Studio.

export default function Footer() {
  return (
    <footer className="w-full bg-ps-black border-t border-ps-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-14 py-6 max-w-[1600px] mx-auto">
        {/* Left — copyright */}
        <p className="font-display font-light text-[12px] text-ps-grey text-center md:text-left">
          © 2026 by Project Stripes. Powered and secured by{' '}
          <a
            href="https://hatmakerstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ps-white transition-colors"
          >
            Hatmaker Studio
          </a>
          .
        </p>

        {/* Right — legal links */}
        <nav aria-label="Legal links" className="flex items-center gap-0">
          <Link
            href="/shipping"
            className="font-display font-light text-[12px] text-ps-grey hover:text-ps-white transition-colors no-underline"
          >
            Shipping &amp; Returns
          </Link>
          <span className="font-light text-[12px] text-ps-border px-3">|</span>
          <Link
            href="/terms-conditions"
            className="font-display font-light text-[12px] text-ps-grey hover:text-ps-white transition-colors no-underline"
          >
            Terms &amp; Conditions
          </Link>
          <span className="font-light text-[12px] text-ps-border px-3">|</span>
          <Link
            href="/privacy-policy"
            className="font-display font-light text-[12px] text-ps-grey hover:text-ps-white transition-colors no-underline"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
