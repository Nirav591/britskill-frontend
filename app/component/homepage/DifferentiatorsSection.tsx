import Image from "next/image";
import Link from "next/link";

type DifferentiatorsSectionProps = {
  className?: string;
};

const BadgeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M13 2l-1 4-4 1 3 2-1 4 3-2 3 2-1-4 3-2-4-1-1-4z" />
    <circle cx="13" cy="12" r="9" opacity="0.12" />
  </svg>
);

const StatIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6h9l3 3v9H4z" />
    <path d="M13 6v3h3" />
    <circle cx="16.5" cy="17.5" r="3.5" />
    <path d="M16.5 16v2.5h2" />
  </svg>
);

const SupportIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 12a9 9 0 0 1 18 0" />
    <path d="M7 13v-2a5 5 0 0 1 10 0v2" />
    <rect x="5" y="12.5" width="4" height="5" rx="2" />
    <rect x="15" y="12.5" width="4" height="5" rx="2" />
    <path d="M9 18.5a3 3 0 0 0 6 0" />
  </svg>
);

const DifferentiatorsSection = ({ className }: DifferentiatorsSectionProps) => {
  return (
    <section
      aria-labelledby="differentiators-title"
      className={`bg-white pb-32 pt-20 text-[var(--color-foreground)] ${
        className ?? ""
      }`.trim()}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          {/* Media collage */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] border border-[#dde3ea] bg-white p-2 shadow-sm">
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="/images/courses/banner.png"
                  alt="Students learning online with a tutor"
                  width={520}
                  height={620}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  priority
                />
              </div>
              <button
                type="button"
                aria-label="Play introduction video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--color-brand-accent)] shadow-lg transition hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 translate-x-0.5"
                >
                  <path
                    d="M7 5l12 7-12 7V5z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute -bottom-14 right-0 w-[68%] max-w-[320px] overflow-hidden rounded-[28px] border border-[#e4e8ee] bg-white p-2 shadow-md">
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src="/images/courses/poster.jpg"
                  alt="Learners collaborating in a study session"
                  width={360}
                  height={300}
                  className="h-[220px] w-full object-cover md:h-[260px]"
                />
              </div>
            </div>

            <div className="absolute -bottom-24 left-0 rounded-full bg-[#46a596] px-6 py-4 text-white shadow-lg">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                  <SupportIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    Online Support
                  </p>
                  <p className="text-lg font-semibold">+44 07944 424467</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e2e7ee] bg-white px-4 py-2 text-sm font-semibold text-[#1f2933] shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)]">
                <BadgeIcon className="h-4 w-4" />
              </span>
              Get More About Us
            </span>

            <h2
              id="differentiators-title"
              className="mt-6 text-3xl font-semibold text-[#1f2933] md:text-4xl"
            >
              Trusted online tuition for confident learners
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4a5b6b]">
              We help students and adults succeed through live, focused lessons
              that build confidence and exam results. Lessons are taught by
              UK-qualified tutors, designed around real exam requirements, and
              delivered in small groups so every learner gets time and support.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-[#edf1f5] bg-white p-4 shadow-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfe6ee] text-[var(--color-brand-accent)]">
                  <StatIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-[var(--color-brand-accent)]">
                    Max 8
                  </p>
                  <p className="text-sm text-[#5a6b7b]">
                    students per live group session
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#edf1f5] bg-white p-4 shadow-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfe6ee] text-[var(--color-brand-accent)]">
                  <StatIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-[var(--color-brand-accent)]">
                    Exam-ready
                  </p>
                  <p className="text-sm text-[#5a6b7b]">
                    focused teaching aligned to UK boards
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-in-touch"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand-accent)] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-95"
              >
                Book a Free Assessment
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-[#dfe6ee] px-6 py-3 text-sm font-semibold text-[#1f2933] transition hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)]"
              >
                View Course Prices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
