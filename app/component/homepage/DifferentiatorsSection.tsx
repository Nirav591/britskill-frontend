import Link from "next/link";

type DifferentiatorsSectionProps = {
  className?: string;
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);

const DifferentiatorsSection = ({ className }: DifferentiatorsSectionProps) => {
  return (
    <section
      aria-labelledby="differentiators-title"
      className={`bg-white py-16 text-[var(--color-foreground)] ${
        className ?? ""
      }`.trim()}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
       
            <h2
              id="differentiators-title"
              className="mt-3 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
            >
              What Makes BritSkill Academy Different
            </h2>
            <h3 className="mt-4 text-xl font-semibold text-[#1f2933] md:text-2xl">
              Why Choose BritSkill Academy for Online Tuition?
            </h3>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#425161]">
              <p>
                BritSkill Academy delivers high-quality online tuition designed
                specifically for students preparing for{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/gcse"
                >
                  GCSEs
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/a-level"
                >
                  A-Levels
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/functional-skills"
                >
                  Functional Skills
                </Link>{" "}
                and{" "}
                <Link
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/courses/esol"
                >
                  ESOL
                </Link>{" "}
                qualifications in the UK. Unlike pre-recorded video courses or
                overcrowded classrooms, we provide live, teacher-led lessons in
                small groups where every student receives individual attention.
              </p>
              <p>
                Our tutors are UK-qualified teachers with specialist subject
                knowledge and current teaching experience. Every lesson is
                structured around the UK national curriculum and exam board
                specifications, ensuring students learn exactly what they need
                to succeed.
              </p>
              <p>
                We combine academic excellence with a safe, supportive online
                learning environment where students build confidence, master
                challenging topics, and achieve measurable progress.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              What sets us apart:
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-[#425161] md:text-base">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>
                  Live online lessons, not recorded videos — real-time
                  interaction with expert tutors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>
                  Small class sizes capped at 8 students for personalised
                  attention
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>
                  UK-qualified tutors, DBS-checked and{" "}
                  <Link
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                    href="/policies/safeguarding"
                  >
                    safeguarding
                  </Link>{" "}
                  trained
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>
                  Structured curriculum aligned to exam boards (AQA, Edexcel,
                  OCR)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>Regular assessments and detailed progress tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>
                  Exam-focused teaching from tutors who understand mark schemes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-base font-medium text-[#1f2933]">
          Whether your child needs to catch up, stay on track, or aim for top
          grades, BritSkill Academy provides the expert support they need.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/get-in-touch"
          >
            Book a free trial
          </Link>
          <Link
            className="text-sm font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="/courses"
          >
            Subjects &amp; levels
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
