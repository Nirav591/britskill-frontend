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
            How Our Online Tuition Programme Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            Getting started with BritSkill Academy is straightforward. Our
            structured approach ensures every student gets the right level of
            support from day one.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#d7dee6] lg:block" />
          <div className="grid gap-8 lg:grid-cols-3">
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
                Choose Your Course and Level
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                Select from{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/gcse"
                >
                  GCSE tuition
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/a-level"
                >
                  A-Level tuition
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/functional-skills"
                >
                  Functional Skills
                </Link>{" "}
                or{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/esol"
                >
                  ESOL
                </Link>{" "}
                courses based on your child's current learning needs and
                academic goals. We offer expert tuition across core subjects
                including Maths, English, and Sciences.
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
                Enrol in Weekly Live Lessons
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                Students join three live online lessons per week, each lasting
                60 minutes. Classes are scheduled at consistent times to build
                routine and commitment. Our interactive virtual classroom
                technology ensures students can see, hear, and engage with
                their tutor and classmates in real-time.
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
                Learn, Practice, and Track Progress
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#425161]">
                Every lesson includes direct instruction, guided practice, and
                time for questions. Students receive homework assignments,
                access to lesson recordings for revision, and regular progress
                assessments. Parents receive updates on attendance, engagement,
                and academic development.
              </p>
            </article>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm font-semibold text-[var(--color-brand-primary)] md:text-base">
          No lengthy contracts required. Families can join on a rolling weekly
          subscription and cancel with appropriate notice as outlined in our{" "}
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
            href="/courses"
          >
            View courses
          </Link>
          <Link
            className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/get-in-touch"
          >
            Book a free trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowOnlineTuitionWorks;
