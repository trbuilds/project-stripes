import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Project Stripes terms and conditions governing use of our website and purchase of products.',
  alternates: {
    canonical: 'https://www.projectstripes.xyz/terms-conditions',
  },
}

// ── Terms & Conditions (PRD Section 6) ──
// TODO: Replace placeholder copy below with the actual T&C text from the Wix site.

export default function TermsPage() {
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
          <h1>Terms &amp; Conditions</h1>

          <p>
            Last updated: January 2026. By using the Project Stripes
            website located at www.projectstripes.xyz, you agree to be
            bound by these Terms &amp; Conditions. Please read them carefully
            before making a purchase or using our services.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            {/* TODO: Replace with copy from Wix site */}
            By accessing or using this website, you confirm that you are at
            least 18 years of age, or accessing the site under the supervision
            of a parent or legal guardian, and that you agree to be bound by
            these Terms &amp; Conditions and our Privacy Policy.
          </p>

          <h2>2. Products</h2>
          <p>
            All products sold on the Project Stripes website are subject to
            availability. We reserve the right to discontinue any product at
            any time. Prices are listed in Indian Rupees (INR) and are
            inclusive of applicable taxes unless otherwise stated.
          </p>

          <h2>3. Orders &amp; Payments</h2>
          <p>
            By placing an order, you represent that the information you
            provide is accurate and complete. We reserve the right to refuse
            or cancel any order for any reason, including but not limited to
            product availability, errors in product or pricing information,
            or suspected fraudulent activity.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            graphics, logos, and images, is the property of Project Stripes
            and is protected by applicable intellectual property laws.
            Unauthorised use, reproduction, or distribution of our content
            is strictly prohibited.
          </p>

          <h2>5. Conservation Contribution</h2>
          <p>
            Project Stripes donates a portion of proceeds from every sale to
            wildlife conservation partners. The exact percentage and
            beneficiary organisations are disclosed on our About page.
            Conservation contributions are non-refundable once a purchase is
            complete.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Project Stripes shall not
            be liable for any indirect, incidental, special, or consequential
            damages arising from the use of, or inability to use, this website
            or our products.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by and construed in
            accordance with the laws of India. Any disputes arising under these
            terms shall be subject to the exclusive jurisdiction of the courts
            located in [your city], India.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms &amp; Conditions at any
            time. Changes will be effective immediately upon posting to the
            website. Your continued use of the website after any changes
            constitutes your acceptance of the updated terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have any questions about these Terms &amp; Conditions, please
            contact us via the{' '}
            <Link href="/#contact">contact form</Link> on our website.
          </p>
        </article>
      </main>
    </div>
  )
}
