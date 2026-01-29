import Link from "next/link";

const upstreamNodes = [
  { label: "GCSE", className: "left-[8%] top-[14%]" },
  { label: "A‑Level", className: "left-[24%] top-[6%]" },
  { label: "ESOL", className: "left-[40%] top-[12%]" },
  { label: "Functional", className: "left-[58%] top-[8%]" },
  { label: "Parents", className: "left-[74%] top-[14%]" },
];

const downstreamNodes = [
  { label: "Live lessons", className: "left-[12%] bottom-[8%]" },
  { label: "Assessments", className: "left-[28%] bottom-[2%]" },
  { label: "Feedback", className: "left-[45%] bottom-[6%]" },
  { label: "Progress", className: "left-[62%] bottom-[2%]" },
  { label: "Reports", className: "left-[78%] bottom-[8%]" },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-[32px] border border-[#e6e9ee] bg-white/80 p-10 shadow-lg backdrop-blur">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5b6773]">
              How it works
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
              Learning that feels connected, not complicated
            </h1>
            <p className="mt-4 text-base leading-7 text-[#425161]">
              We bring students, tutors, and parents together in one secure
              space—so lessons, progress, and feedback always stay in sync.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#5b6773]">
            <span className="rounded-full border border-[#d7dee6] bg-white px-4 py-2">
              With BritSkill
            </span>
            <span className="rounded-full border border-[#d7dee6] bg-white px-4 py-2 text-[#9aa4b2]">
              Without BritSkill
            </span>
          </div>

          <div className="relative mt-10 w-full overflow-hidden rounded-[28px] border border-[#edf0f4] bg-gradient-to-br from-[#f7f7fb] via-white to-[#f1f6ff]">
            <svg
              className="absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1000 520"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M120 120 C280 140, 320 240, 500 260"
                stroke="#c9d6f2"
                strokeWidth="3"
                strokeDasharray="8 10"
              />
              <path
                d="M260 70 C360 120, 420 220, 500 260"
                stroke="#c9d6f2"
                strokeWidth="3"
                strokeDasharray="8 10"
              />
              <path
                d="M420 110 C480 180, 520 220, 500 260"
                stroke="#c9d6f2"
                strokeWidth="3"
                strokeDasharray="8 10"
              />
              <path
                d="M620 90 C540 160, 520 220, 500 260"
                stroke="#c9d6f2"
                strokeWidth="3"
                strokeDasharray="8 10"
              />
              <path
                d="M780 120 C640 160, 560 230, 500 260"
                stroke="#c9d6f2"
                strokeWidth="3"
                strokeDasharray="8 10"
              />
              <path
                d="M500 260 C420 320, 360 360, 180 420"
                stroke="#7fd8a8"
                strokeWidth="3"
              />
              <path
                d="M500 260 C460 330, 420 360, 320 440"
                stroke="#7fd8a8"
                strokeWidth="3"
              />
              <path
                d="M500 260 C500 340, 500 380, 500 440"
                stroke="#7fd8a8"
                strokeWidth="3"
              />
              <path
                d="M500 260 C560 330, 620 360, 700 440"
                stroke="#7fd8a8"
                strokeWidth="3"
              />
              <path
                d="M500 260 C620 330, 680 380, 820 420"
                stroke="#7fd8a8"
                strokeWidth="3"
              />
            </svg>

            <div className="hidden h-[420px] w-full lg:block">
              {upstreamNodes.map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.className} flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md`}
                >
                  <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
                    {node.label}
                  </span>
                </div>
              ))}

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-3xl font-semibold text-white shadow-lg">
                B.
              </div>

              {downstreamNodes.map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.className} flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md`}
                >
                  <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:hidden">
              <div className="col-span-full flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-2xl font-semibold text-white shadow-lg">
                  B.
                </div>
              </div>
              {upstreamNodes.map((node) => (
                <div
                  key={node.label}
                  className="flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-[var(--color-brand-primary)] shadow-md"
                >
                  {node.label}
                </div>
              ))}
              {downstreamNodes.map((node) => (
                <div
                  key={node.label}
                  className="flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-[var(--color-brand-primary)] shadow-md"
                >
                  {node.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. Choose a pathway",
                text: "Pick GCSE, A‑Level, ESOL, or Functional Skills. We match the right level to the learner’s goals.",
              },
              {
                title: "2. Join live weekly lessons",
                text: "Small group sessions with qualified tutors, clear structure, and lesson recordings.",
              },
              {
                title: "3. Track progress together",
                text: "Parents see attendance, assessments, and feedback—no chasing updates.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[#e1e6eb] bg-white p-5 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm text-[#425161]">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] sm:w-auto"
              href="/assessment"
            >
              Book your free assessment
            </Link>
            <Link
              className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] sm:w-auto"
              href="/courses"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
