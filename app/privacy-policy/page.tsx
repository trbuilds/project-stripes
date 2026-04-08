import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Project Stripes privacy policy — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.projectstripes.xyz/privacy-policy',
  },
}

// ── Privacy Policy (PRD Section 6) ──
// TODO: Replace placeholder copy below with the actual policy text from the Wix site.

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ps-white min-h-screen">
      <main className="max-w-[760px] mx-auto px-6 py-20">

        <Link
          href="/"
          className="font-display font-light text-[12px] tracking-[0.08em] uppercase text-ps-grey hover:text-ps-black transition-colors no-underline block mb-12"
        >
          ← Back to Home
        </Link>

        <article className="prose-legal">
          <h1>Privacy Policy</h1>

          <p>
            Last updated: January 2026. Project Stripes
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your data when you visit
            www.projectstripes.xyz.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            {/* TODO: Replace with copy from Wix site */}
            We may collect the following categories of personal information:
          </p>
          <ul>
            <li>
              <strong>Contact information</strong> — name, email address, and
              phone number when you submit our contact form.
            </li>
            <li>
              <strong>Order information</strong> — shipping address, billing
              details, and purchase history when you place an order (V2).
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, time spent, browser
              type, and referring URLs, collected via Vercel Analytics.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and support requests.</li>
            <li>Process and fulfil your orders.</li>
            <li>Send order confirmation and shipping notification emails.</li>
            <li>Improve our website and customer experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your data with trusted service providers
            who assist us in operating our website and fulfilling orders
            (e.g., payment processors, shipping partners), subject to
            confidentiality agreements.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. You may choose to disable
            cookies through your browser settings; however, some features of
            the website may not function correctly without them.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfil the purposes outlined in this policy, or as required by
            applicable law. Contact form submissions are retained for 12
            months.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, or delete your personal information. To exercise these
            rights, please contact us via the{' '}
            <Link href="/#contact">contact form</Link>.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites (e.g.,
            Instagram, Google Forms). We are not responsible for the privacy
            practices of those sites and encourage you to review their
            privacy policies independently.
          </p>

          <h2>8. Security</h2>
          <p>
            We implement reasonable technical and organisational measures to
            protect your personal information from unauthorised access,
            disclosure, or misuse. However, no method of transmission over
            the internet is 100% secure.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The
            &quot;Last updated&quot; date at the top of this page will reflect any
            changes. Your continued use of the website after updates
            constitutes your acceptance of the revised policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For any privacy-related questions or requests, please contact us
            via the <Link href="/#contact">contact form</Link> or email us
            at [your email address].
          </p>
        </article>
      </main>
    </div>
  )
}
