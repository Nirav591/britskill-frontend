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
          {/* Left content */}
          <div>
            <h2
              id="differentiators-title"
              className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
            >
              What Makes BritSkill Academy Different?
            </h2>

            <h3 className="mt-4 text-xl font-semibold text-[#1f2933] md:text-2xl">
              Online tuition that stays focused on results
            </h3>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#425161]">
              <p>
                BritSkill Academy offers <strong>live online tuition</strong> for{" "}
                <Link
                  href="/courses/gcse"
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                >
                  GCSE
                </Link>
                ,{" "}
                <Link
                  href="/courses/a-level"
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                >
                  A-Level
                </Link>
                ,{" "}
                <Link
                  href="/courses/functional-skills"
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                >
                  Functional Skills
                </Link>{" "}
                and{" "}
                <Link
                  href="/courses/esol"
                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                >
                  ESOL
                </Link>{" "}
                learners across the UK.
              </p>

              <p>
                We teach in <strong>small groups</strong> so every student gets attention,
                clear explanations, and time to ask questions.
              </p>

              <p>
                Sessions are led by <strong>UK-qualified teachers</strong> and built around
                what exam boards actually assess.
              </p>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              What sets us apart
            </h3>

            <ul className="mt-4 space-y-4 text-sm text-[#425161] md:text-base">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>Live lessons with real tutor support</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>Small classes (max 8 students)</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>
                  UK-qualified, DBS-checked tutors with{" "}
                  <Link
                    href="/policies/safeguarding"
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                  >
                    safeguarding
                  </Link>{" "}
                  training
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>Exam board aligned teaching (AQA, Edexcel, OCR)</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>Progress tracking and regular check-ins</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--color-brand-accent)]" />
                <span>Clear exam technique and mark scheme guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;