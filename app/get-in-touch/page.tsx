"use client";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
              Get in touch
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
              We’re here to help
            </h1>
            <p className="mt-4 text-base leading-7 text-[#425161]">
              Ask about courses, pricing, safeguarding, or enrolment. We’ll
              reply within one working day.
            </p>

            <div className="mt-6 rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                Contact details
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#425161]">
                <p>
                  Email:{" "}
                  <a
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                    href="mailto:info@britskillacademy.co.uk"
                  >
                    info@britskillacademy.co.uk
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                    href="tel:+44XXXXXXXXXX"
                  >
                    +44 07944 424467
                  </a>
                </p>
                <p>Support hours: Mon–Fri, 9am–5pm</p>
                <p>Address: 165 The Broadway, London SW19 1NE</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-center text-2xl font-semibold text-[var(--color-brand-primary)]">
              Send a message
            </h2>
            <p className="mt-2 text-center text-sm text-[#5b6773]">
              We’ll get back to you shortly.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Name
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
                  Email or phone
                </label>
                <input
                  type="text"
                  name="contact"
                  required
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Who is this for?
                </label>
                <select
                  name="audience"
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                  required
                >
                  <option value="">Select one</option>
                  <option value="student">Student</option>
                  <option value="adult">Adult learner</option>
                  <option value="parent">Parent</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#425161]">
                  Course interested in
                </label>
                <select
                  name="course"
                  required
                  className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
                >
                  <option value="">Select a course</option>
                  <option value="esol">ESOL</option>
                  <option value="functional-skills-english">
                    Functional Skills English
                  </option>
                  <option value="functional-skills-maths">
                    Functional Skills Maths
                  </option>
                  <option value="gcse">GCSE</option>
                  <option value="a-level">A-Level</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--color-brand-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
