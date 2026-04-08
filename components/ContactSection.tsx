'use client'

import { useState } from 'react'
import { ClockIcon } from '@/components/icons'

// ── Contact Section (PRD Section 4.1 — Section 6) ──
// • 2-column: form left (~55%), greeting right (~45%)
// • id="contact" — targeted by nav CONTACT link
// • Form backend: Formspree (server-side, no SPAM, delivers to inbox)
// • Success state: inline "Message sent!" message
// • Error state: inline "Something went wrong." message
//
// SETUP STEPS:
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form — copy the Form ID (looks like: xabcdefg).
// 3. Add NEXT_PUBLIC_FORMSPREE_ID=xabcdefg to your .env.local file.
// 4. The form will submit to Formspree and email Project Stripes inbox.

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!FORMSPREE_ID) {
      console.warn('NEXT_PUBLIC_FORMSPREE_ID is not set.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-ps-dark py-28 px-6 md:px-14">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-16 md:gap-20 items-start">

          {/* Left — Form */}
          <div>
            <p className="font-display font-normal text-[11px] tracking-[0.15em] uppercase text-ps-grey mb-3">
              Get in Touch
            </p>
            <h2 className="font-display font-extrabold text-[clamp(36px,4vw,58px)] leading-[1.05] uppercase text-ps-red mb-9 tracking-[-0.01em]">
              Contact<br />Us
            </h2>

            {status === 'success' ? (
              <div className="border border-ps-border p-8 text-center">
                <p className="font-display font-extrabold text-[18px] text-ps-white mb-2">
                  Message sent!
                </p>
                <p className="font-display font-light text-[15px] text-ps-grey">
                  We will get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="font-display font-normal text-[11px] tracking-[0.1em] uppercase text-ps-grey"
                    >
                      Full Name <span className="text-ps-red">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="
                        bg-ps-black border border-ps-border text-ps-white
                        font-display font-light text-[15px]
                        px-4 py-[13px] outline-none
                        placeholder:text-ps-border
                        focus:border-ps-grey transition-colors
                      "
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="font-display font-normal text-[11px] tracking-[0.1em] uppercase text-ps-grey"
                    >
                      Email Address <span className="text-ps-red">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="
                        bg-ps-black border border-ps-border text-ps-white
                        font-display font-light text-[15px]
                        px-4 py-[13px] outline-none
                        placeholder:text-ps-border
                        focus:border-ps-grey transition-colors
                      "
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2 mb-4">
                  <label
                    htmlFor="contact-phone"
                    className="font-display font-normal text-[11px] tracking-[0.1em] uppercase text-ps-grey"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional — faster replies"
                    className="
                      bg-ps-black border border-ps-border text-ps-white
                      font-display font-light text-[15px]
                      px-4 py-[13px] outline-none
                      placeholder:text-ps-border
                      focus:border-ps-grey transition-colors
                    "
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mb-6">
                  <label
                    htmlFor="contact-message"
                    className="font-display font-normal text-[11px] tracking-[0.1em] uppercase text-ps-grey"
                  >
                    Message <span className="text-ps-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="
                      bg-ps-black border border-ps-border text-ps-white
                      font-display font-light text-[15px]
                      px-4 py-[13px] outline-none resize-y
                      placeholder:text-ps-border
                      focus:border-ps-grey transition-colors
                    "
                  />
                </div>

                {/* Error state */}
                {status === 'error' && (
                  <p className="font-display font-light text-[13px] text-ps-red mb-4">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right — Greeting */}
          <div className="pt-3">
            <div className="font-display font-extrabold text-[clamp(52px,5vw,80px)] text-ps-red leading-[1] mb-7">
              Hello!
            </div>
            <p className="font-display font-light text-[17px] text-ps-grey leading-[1.8] mb-4">
              We&apos;d love to hear from you — whether you have a question about
              our products, want to collaborate on a conservation project,
              or simply want to connect with our community.
            </p>
            <p className="font-display font-light text-[17px] text-ps-grey leading-[1.8] mb-6">
              Drop us a message and our team will review it personally and
              get back to you as soon as possible.
            </p>
            <div className="inline-flex items-center gap-2 border border-ps-border px-4 py-[10px]">
              <ClockIcon className="w-[14px] h-[14px] text-ps-orange shrink-0" />
              <span className="font-display font-light text-[13px] text-ps-orange">
                We reply within 48 hours
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
