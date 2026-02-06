import Link from "next/link";

type HowOnlineTuitionWorksProps = {
  className?: string;
};

const HowOnlineTuitionWorks = ({ className }: HowOnlineTuitionWorksProps) => {
  return (
    <section
      aria-labelledby="how-online-tuition-works"
      className={`bg-gradient-to-b from-white via-[var(--color-surface-muted)] to-white py-20 text-[var(--color-foreground)] ${
        className ?? ""
      }`.trim()}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="how-online-tuition-works"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            How It Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            Simple, clear steps so you know exactly what happens next.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#d7dee6] lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            <article className="group relative rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm transition motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#5b6773]">01</span>
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
                    <path d="M4 5h16v14H4z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-brand-primary)]">
                Enquire or Book a Free Assessment
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                Tell us who the learner is and what they need. We’ll recommend
                the best starting point.
              </p>
            </article>

            <article className="group relative rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm transition motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#5b6773]">02</span>
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
                    <path d="M4 4h16v12H4z" />
                    <path d="M8 20h8" />
                    <path d="M10 16h4" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-brand-primary)]">
                Level Assessment & Course Advice
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                We assess the learner’s level and goals, then match them to the
                right course and class format.
              </p>
            </article>

            <article className="group relative rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm transition motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#5b6773]">03</span>
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
                    <path d="M4 5h16v14H4z" />
                    <path d="M7 9h10" />
                    <path d="M7 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-brand-primary)]">
                Join Live Online Classes
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                Start learning with qualified UK tutors in small groups or
                1-to-1 sessions.
              </p>
            </article>

            <article className="group relative rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm transition motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#5b6773]">04</span>
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
                    <path d="M4 19V5" />
                    <path d="M8 19v-6" />
                    <path d="M12 19v-9" />
                    <path d="M16 19v-4" />
                    <path d="M20 19V8" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-brand-primary)]">
                Track Progress & Exam Support
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                We track progress, share updates, and support exam preparation
                when needed.
              </p>
            </article>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm font-semibold text-[var(--color-brand-primary)] md:text-base">
          Flexible weekly plans with no long contracts. Full details in our{" "}
          <Link
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="/policies/terms"
          >
            terms
          </Link>
          .
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/book-assessment"
          >
            Book a free assessment
          </Link>
          <Link
            className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/pricing"
          >
            View course prices
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowOnlineTuitionWorks;
