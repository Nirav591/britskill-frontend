"use client";

import Link from "next/link";

export default function GCSEPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
              GCSE Tuition
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
              GCSE Tuition for confident exam results
            </h1>
            <p className="mt-4 text-base leading-7 text-[#425161]">
              Live, structured GCSE tuition for Years 10–11. Small groups,
              clear weekly targets, and consistent progress updates for
              families.
            </p>

            <div className="mt-6 rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                What you can expect
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-[#425161]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>GCSE Maths, English Language, and Science</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>Small group classes (max 8 students)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>Live lessons with recordings for revision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span>Weekly progress checks and tutor feedback</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-center text-2xl font-semibold text-[var(--color-brand-primary)]">
              Ready to get started?
            </h2>
            <p className="mt-2 text-center text-sm text-[#5b6773]">
              Book a free assessment to get the right GCSE plan.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <Link
                className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343]"
                href="/assessment"
              >
                Book your free assessment
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--color-brand-primary)] underline underline-offset-4"
                href="/courses"
              >
                View all courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
