import type { Metadata } from 'next'
import { Almarai } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Font: Almarai (PRD Section 2.2) ──
// Weights: ExtraBold 800, Regular 400, Light 300
const almarai = Almarai({
  weight: ['300', '400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-almarai',
})

// ── Global Metadata (PRD Section 10 — SEO) ──
export const metadata: Metadata = {
  title: {
    default: 'Project Stripes — Raising Awareness for Endangered Animals',
    template: '%s | Project Stripes',
  },
  description:
    'Project Stripes is a cause-commerce brand dedicated to raising awareness about threatened and endangered animals. Every purchase contributes to wildlife conservation.',
  keywords: ['endangered animals', 'wildlife conservation', 'cause commerce', 'project stripes', 'ForTheFauna'],
  metadataBase: new URL('https://www.projectstripes.xyz'),
  openGraph: {
    title: 'Project Stripes — Raising Awareness for Endangered Animals',
    description:
      'Shop with purpose. Every Project Stripes purchase contributes to wildlife conservation. Join our community. #ForTheFauna',
    url: 'https://www.projectstripes.xyz',
    siteName: 'Project Stripes',
    images: [
      {
        url: '/images/og-image.jpg', // 1200×630 — add your branded OG image here
        width: 1200,
        height: 630,
        alt: 'Project Stripes — For the Fauna',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Stripes — Raising Awareness for Endangered Animals',
    description: 'Shop with purpose. #ForTheFauna',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.projectstripes.xyz',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={almarai.variable}>
      <body className="font-body bg-ps-black text-ps-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script src="https://w.behold.so/widget.js" type="module" strategy="lazyOnload" />
      </body>
    </html>
  )
}
