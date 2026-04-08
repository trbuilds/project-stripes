import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Brand Colour Tokens (PRD Section 2.1 & 2.3) ──
      colors: {
        'ps-black':     '#111111', // Main page & navbar background
        'ps-dark':      '#1A1A1A', // Card and form field backgrounds
        'ps-red':       '#B01131', // Primary CTA buttons, key highlights
        'ps-orange':    '#F47E2F', // Secondary highlights, hover accents
        'ps-white':     '#FAFAFA', // Main text on dark backgrounds
        'ps-grey':      '#CCCCCC', // Body copy, captions, placeholders
        'ps-watermark': '#1F1F1F', // #ForTheFauna diagonal pattern fill
        'ps-border':    '#2A2A2A', // Form field borders, dividers
      },

      // ── Typography (PRD Section 2.2) ──
      // Almarai is loaded via next/font/google and injected as --font-almarai CSS var
      fontFamily: {
        display: ['var(--font-almarai)', 'sans-serif'],
        body:    ['var(--font-almarai)', 'sans-serif'],
      },

      // ── Layout ──
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
