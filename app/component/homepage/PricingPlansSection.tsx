import Link from "next/link";

const PricingPlansSection = () => {
  return (
    <section
      aria-labelledby="pricing-plans-title"
      className="bg-gradient-to-b from-white via-[var(--color-surface-muted)] to-white py-20 text-[var(--color-foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-plans-title"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            Clear, Affordable Pricing for Online Tuition
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            BritSkill Academy offers transparent, flexible pricing with no
            hidden fees or surprise charges. Our weekly subscription model
            gives families predictable costs and the freedom to adjust as
            needed.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#d7dee6] bg-white p-8 shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
                  Weekly Subscription Plan
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-brand-primary)]">
                  What’s included:
                </h3>
              </div>
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="M8 9h8" />
                  <path d="M8 13h6" />
                </svg>
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-[#425161] md:text-base">
              {[
                "3 live lessons per week (60 minutes each)",
                "Small group classes with a maximum of 8 students",
                "Access to lesson recordings for revision and catch-up",
                "Comprehensive learning materials and resources",
                "Regular assessments and progress tracking",
                "Direct communication with tutors for academic support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-accent)]"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-lg font-semibold text-[var(--color-brand-primary)]">
              Pricing: From £XX per week (subject to course and level)
            </p>
            <p className="mt-3 text-sm text-[#425161]">
              No long-term contracts. Subscriptions run on a rolling weekly
              basis. You can cancel in accordance with our published
              cancellation policy — we require [X weeks/days] notice.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-[var(--color-brand-primary)]">
              {[
                "Rolling weekly subscription",
                "Small groups (max 8)",
                "Recordings included",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#d7dee6] bg-[var(--color-surface-muted)] px-3 py-2"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-[var(--color-brand-primary)]">
                  Payment options:
                </p>
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-[#425161]">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-accent)]"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </span>
                  <span>Secure online payment via debit/credit card</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-accent)]"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </span>
                  <span>Direct debit for automatic renewals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-accent)]"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </span>
                  <span>Invoicing available for schools and organisations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-[var(--color-brand-primary)]">
                  What you won’t find:
                </p>
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[#b42318]"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-[#425161]">
                {[
                  "Hidden registration fees",
                  "Compulsory annual subscriptions",
                  "Charges for learning materials",
                  'Premium fees for "priority support"',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[#b42318]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-base font-medium text-[#1f2933] md:text-lg">
          We believe excellent online tuition should be accessible and
          straightforward. You pay for lessons. You get results.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/get-in-touch"
          >
            Book a free trial
          </Link>
          <Link
            className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/courses"
          >
            View courses
          </Link>
          <Link
            className="text-sm font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="/policies/cancellation"
          >
            Cancellation policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
