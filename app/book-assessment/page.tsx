"use client";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
              Book your free assessment
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
              Get started with a clear learning plan
            </h1>
            <p className="mt-4 text-base leading-7 text-[#425161]">
              We’ll assess your child’s current level, identify learning goals,
              and recommend the right course. No obligation. No pressure.
            </p>

            <div className="mt-6 rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                What happens next
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-[#425161]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>We review your request within one working day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>We suggest the right course and schedule options.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>You decide when to start—no long-term contracts.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-center text-2xl font-semibold text-[var(--color-brand-primary)]">
              Request your assessment
            </h2>
            <p className="mt-2 text-center text-sm text-[#5b6773]">
              Complete the form and we’ll be in touch.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Parent/Guardian name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Student level
                </label>
                <input
                  type="text"
                  name="level"
                  placeholder="e.g. GCSE Year 10, A-Level Year 12"
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Subject(s)
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Maths, English, Chemistry"
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--color-brand-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343]"
              >
                Book Your Free Assessment
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
