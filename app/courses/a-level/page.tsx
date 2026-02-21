"use client";

import Link from "next/link";
import Image from "next/image";
import courses from "@/app/data/courses.json";

type Course = {
  slug: string;
  title: string;
  category: string;
  instructor: {
    name: string;
  };
  rating: number;
  reviews: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  image?: string;
};

const placeholderImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <rect width="100%" height="100%" fill="#0d2b52"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="28" font-family="Arial, sans-serif">
        BritSkill Academy
      </text>
    </svg>`
  );

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`h-4 w-4 ${filled ? "text-[#f59e0b]" : "text-[#d7dee6]"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 0 0 .95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 0 0-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.538 1.118l-3.37-2.449a1 1 0 0 0-1.175 0l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.287-3.959a1 1 0 0 0-.364-1.118L2.17 9.386c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 0 0 .95-.69l1.178-3.959z" />
  </svg>
);

export default function ALevelPage() {
  const allCourses = courses as Course[];
  const aLevelCourses = allCourses.filter(
    (course) => course.category === "A-Level"
  );

  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
              A-Level Tuition
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
              A-Level tuition for confident exam performance
            </h1>
            <p className="mt-4 text-base leading-7 text-[#425161]">
              Live, structured A-Level tuition for Years 12–13. Small groups,
              exam-focused teaching, and clear progress updates for families.
            </p>

            <div className="mt-6 rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                What you can expect
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-[#425161]">
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
                  <span>A-Level Maths, Biology, Chemistry, and English</span>
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
                  <span>Small group classes (max 8 students)</span>
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
                  <span>Live lessons with recordings for revision</span>
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
                  <span>Exam technique and regular assessment feedback</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-center text-2xl font-semibold text-[var(--color-brand-primary)]">
              Ready to get started?
            </h2>
            <p className="mt-2 text-center text-sm text-[#5b6773]">
              Book a free assessment and we’ll recommend the right level.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <Link
                className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343]"
                href="/book-assessment"
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

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
            A-Level courses
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aLevelCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group rounded-2xl border border-[#e1e6eb] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#f3f4f6]">
                  <Image
                    src={course.image || placeholderImage}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                    Live tuition
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-semibold text-[#1f2933]">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#5b6773]">
                    {course.instructor?.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#5b6773]">
                    <span className="text-sm font-semibold text-[#1f2933]">
                      {course.rating.toFixed(1)}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < Math.round(course.rating)} />
                      ))}
                    </div>
                    <span>({course.reviews})</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-[#1f2933]">
                      {course.price}
                    </span>
                    {course.oldPrice && (
                      <span className="text-xs text-[#8a94a4] line-through">
                        {course.oldPrice}
                      </span>
                    )}
                  </div>
                  {course.badge && (
                    <span className="inline-block rounded-full bg-[var(--color-brand-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                      {course.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
            {aLevelCourses.length === 0 && (
              <div className="rounded-2xl border border-[#e1e6eb] bg-white p-6 text-sm text-[#5b6773]">
                No A-Level courses available yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
