import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description:
    'Project Stripes shipping policy, delivery timelines, and return & refund conditions.',
  alternates: {
    canonical: 'https://www.projectstripes.xyz/shipping',
  },
}

// ── Shipping & Returns (PRD Section 6) ──
// Copy from the existing Wix page goes here.
// Typography: inverted scheme — #111111 on #FAFAFA for long-form readability.
//
// TODO: Replace the placeholder copy below with the actual policy text
// from the current Wix site.

export default function ShippingPage() {
  return (
    <div className="bg-ps-white min-h-screen">
      {/* Override navbar/footer text for light background page */}
      <main className="max-w-[760px] mx-auto px-6 py-20">

        <Link
          href="/"
          className="font-display font-light text-[12px] tracking-[0.08em] uppercase text-ps-grey hover:text-ps-black transition-colors no-underline block mb-12"
        >
          ← Back to Home
        </Link>

        <article className="prose-legal">
          <h1>Shipping &amp; Returns</h1>

          <h2>Shipping Policy</h2>
          <p>
            {/* TODO: Replace with actual shipping policy from Wix site */}
            We ship to customers across India and select international
            destinations. All orders are processed within 2–3 business days.
          </p>

          <h2>Domestic Shipping (India)</h2>
          <p>
            Standard delivery: 5–7 business days. Express delivery: 2–3
            business days (available at checkout). Free standard shipping
            on all orders above ₹999.
          </p>

          <h2>International Shipping</h2>
          <p>
            We ship internationally to the following regions: [list
            countries here from current Wix policy]. International delivery
            typically takes 10–15 business days. Customs duties and taxes
            are the responsibility of the recipient.
          </p>

          <h2>Order Tracking</h2>
          <p>
            Once your order ships, you will receive a confirmation email
            with a tracking number. If you have not received your order
            within the estimated delivery window, please contact us via the
            contact form on our website.
          </p>

          <h2>Returns &amp; Refunds</h2>
          <p>
            We accept returns on unworn, unwashed items in original
            condition within 14 days of delivery. To initiate a return,
            contact us at [email address] with your order number and reason
            for return.
          </p>

          <h2>Return Eligibility</h2>
          <ul>
            <li>Item must be returned within 14 days of delivery.</li>
            <li>Item must be unworn, unwashed, and in original packaging.</li>
            <li>Sale items are not eligible for return.</li>
            <li>Customised or personalised items cannot be returned.</li>
          </ul>

          <h2>Refund Process</h2>
          <p>
            Once we receive and inspect the return, we will process your
            refund within 5–7 business days. Refunds are issued to the
            original payment method. Shipping costs are non-refundable
            unless the return is due to our error.
          </p>

          <h2>What if My Order Does Not Arrive?</h2>
          <p>
            If your order has not arrived within 20 business days of the
            estimated delivery date, please contact us with your order
            number. We will investigate and either reship your order or
            issue a full refund.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any shipping or returns queries, please use the{' '}
            <Link href="/#contact">contact form</Link> on our website, or
            email us directly at [your email address]. We aim to respond
            within 48 hours.
          </p>
        </article>
      </main>
    </div>
  )
}
