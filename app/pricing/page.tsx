import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-[#e1e6eb] bg-[var(--color-brand-primary)]/95 text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Pricing
          </p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Clear, Simple Pricing
          </h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Transparent prices so families and adult learners can plan with
            confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--color-brand-primary)]">
              ESOL & Functional Skills
            </h2>
            <p className="mt-2 text-sm text-[#425161]">
              Flexible plans for adult learners and school-aged students.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#425161]">
              <li className="flex items-start gap-3">
                <svg
  className="mt-1 h-4 w-4 text-[var(--color-brand-accent)]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M5 12l4 4L19 6" />
</svg>
                <span>Weekly plan: £24.99 / week</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
  className="mt-1 h-4 w-4 text-[var(--color-brand-accent)]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M5 12l4 4L19 6" />
</svg>
                <span>Monthly plan: 79.99 / month</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
  className="mt-1 h-4 w-4 text-[var(--color-brand-accent)]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M5 12l4 4L19 6" />
</svg>
                <span>Unlimited plan: £199.99 / month</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--color-brand-primary)]">
              GCSE / A-Level
            </h2>
            <p className="mt-2 text-sm text-[#425161]">
              Small group classes focused on exam success.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#425161]">
              <li className="flex items-start gap-3">
                <svg
  className="mt-1 h-4 w-4 text-[var(--color-brand-accent)]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M5 12l4 4L19 6" />
</svg>
                <span>Small group classes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
  className="mt-1 h-4 w-4 text-[var(--color-brand-accent)]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M5 12l4 4L19 6" />
</svg>
                <span>From £29.99 per week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book-assessment"
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
          >
            Book a free assessment
          </Link>
          <Link
            href="/get-in-touch"
            className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
          >
            Speak to an advisor
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-[#5b6773]">
          Final pricing depends on course level, group size, and weekly hours.
          We’ll confirm exact costs after the free assessment.
        </p>
      </section>
    </main>
  );
}
