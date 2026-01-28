"use client";

import Link from "next/link";
import { useState } from "react";

type Course = {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: string;
  price: string;
  oldPrice?: string;
  badges: string[];
  theme: string;
};

const tabs = ["Most popular", "New", "Trending"] as const;

const courses: Record<(typeof tabs)[number], Course[]> = {
  "Most popular": [
    {
      id: "gcse-maths",
      slug: "gcse-maths",
      title: "GCSE Maths Mastery: Foundation & Higher",
      instructor: "Mrs. Patel, Lead Maths Tutor",
      rating: 4.8,
      reviews: "12,480",
      price: "£29.99",
      oldPrice: "£39.99",
      badges: ["Premium", "Bestseller"],
      theme: "from-[#4733b3] via-[#5e3ddb] to-[#8c5cf6]",
    },
    {
      id: "alevel-chem",
      slug: "alevel-chem",
      title: "A-Level Chemistry: Exam-Focused Live Tuition",
      instructor: "Dr. James Carter",
      rating: 4.7,
      reviews: "6,902",
      price: "£24.99",
      oldPrice: "£34.99",
      badges: ["Premium", "Bestseller"],
      theme: "from-[#e05a6f] via-[#f06a80] to-[#ff8aa0]",
    },
    {
      id: "gcse-eng",
      slug: "gcse-eng",
      title: "GCSE English Language: Writing & Analysis",
      instructor: "Ms. Angela Yu",
      rating: 4.8,
      reviews: "18,211",
      price: "£27.99",
      oldPrice: "£32.99",
      badges: ["Premium", "Top rated"],
      theme: "from-[#d28a2e] via-[#e5a13e] to-[#f2c067]",
    },
    {
      id: "alevel-bio",
      slug: "alevel-bio",
      title: "A-Level Biology: Live Lessons & Revision",
      instructor: "Dr. Helen Morris",
      rating: 4.7,
      reviews: "9,734",
      price: "£25.99",
      oldPrice: "£31.99",
      badges: ["Premium", "Bestseller"],
      theme: "from-[#2b5bc6] via-[#3a71d9] to-[#5ea0f2]",
    },
  ],
  New: [
    {
      id: "functional-maths",
      slug: "functional-maths",
      title: "Functional Skills Maths (Level 1 & 2)",
      instructor: "Mr. David Clarke",
      rating: 4.6,
      reviews: "1,204",
      price: "£19.99",
      oldPrice: "£24.99",
      badges: ["New", "Flexible"],
      theme: "from-[#0d2b52] via-[#18406c] to-[#255685]",
    },
    {
      id: "esol-starter",
      slug: "esol-starter",
      title: "ESOL Starter: Entry 1–3",
      instructor: "Ms. Amina Khan",
      rating: 4.7,
      reviews: "1,840",
      price: "£18.99",
      oldPrice: "£22.99",
      badges: ["New", "Live"],
      theme: "from-[#1c7f5a] via-[#2e9e4f] to-[#6bcf7a]",
    },
    {
      id: "alevel-maths",
      slug: "alevel-maths",
      title: "A-Level Maths: Pure + Mechanics",
      instructor: "Mr. Oliver Grant",
      rating: 4.6,
      reviews: "2,104",
      price: "£26.99",
      oldPrice: "£34.99",
      badges: ["New", "Exam prep"],
      theme: "from-[#6b5b95] via-[#7567b4] to-[#9a8de4]",
    },
    {
      id: "gcse-science",
      slug: "gcse-science",
      title: "GCSE Science: Biology, Chemistry, Physics",
      instructor: "Dr. Meera Joshi",
      rating: 4.7,
      reviews: "3,028",
      price: "£28.99",
      oldPrice: "£36.99",
      badges: ["New", "Bundle"],
      theme: "from-[#2d6a4f] via-[#40916c] to-[#74c69d]",
    },
  ],
  Trending: [
    {
      id: "gcse-intensive",
      slug: "gcse-intensive",
      title: "GCSE Intensive Revision Track",
      instructor: "Mr. Liam O’Connor",
      rating: 4.8,
      reviews: "7,402",
      price: "£31.99",
      oldPrice: "£41.99",
      badges: ["Trending", "Premium"],
      theme: "from-[#1a2a6c] via-[#1f3c88] to-[#2a5298]",
    },
    {
      id: "esol-advanced",
      slug: "esol-advanced",
      title: "ESOL Advanced: Level 1 & 2",
      instructor: "Ms. Sofia Mendes",
      rating: 4.7,
      reviews: "4,210",
      price: "£21.99",
      oldPrice: "£27.99",
      badges: ["Trending", "Live"],
      theme: "from-[#0f766e] via-[#0f9d8b] to-[#20c997]",
    },
    {
      id: "functional-english",
      slug: "functional-english",
      title: "Functional Skills English (Level 1 & 2)",
      instructor: "Mrs. Priya Shah",
      rating: 4.6,
      reviews: "2,890",
      price: "£20.99",
      oldPrice: "£26.99",
      badges: ["Trending", "Flexible"],
      theme: "from-[#7f5af0] via-[#9064f2] to-[#b29bff]",
    },
    {
      id: "alevel-essay",
      slug: "alevel-essay",
      title: "A-Level English: Essay & Analysis",
      instructor: "Mr. Thomas Reed",
      rating: 4.7,
      reviews: "3,214",
      price: "£23.99",
      oldPrice: "£29.99",
      badges: ["Trending", "Top rated"],
      theme: "from-[#b21f1f] via-[#c13b3b] to-[#f25f5c]",
    },
  ],
};

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

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(
    "Most popular"
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center gap-6 border-b border-[#d7dee6]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 text-sm font-semibold transition ${
                  isActive
                    ? "text-[var(--color-brand-primary)]"
                    : "text-[#5b6773] hover:text-[var(--color-brand-primary)]"
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-[var(--color-brand-primary)]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {courses[activeTab].map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group rounded-2xl border border-[#e1e6eb] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br ${course.theme}`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                  Live tuition
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-base font-semibold text-[#1f2933]">
                  {course.title}
                </h3>
                <p className="text-xs text-[#5b6773]">{course.instructor}</p>
                <div className="flex items-center gap-2 text-xs text-[#5b6773]">
                  <span className="text-sm font-semibold text-[#1f2933]">
                    {course.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} filled={idx < 5} />
                    ))}
                  </div>
                  <span>({course.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="text-lg font-semibold text-[#1f2933]">
                    {course.price}
                  </span>
                  {course.oldPrice && (
                    <span className="text-xs text-[#8a94a4] line-through">
                      {course.oldPrice}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-[var(--color-brand-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
            Featured courses
          </h2>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e6eb] bg-white text-[var(--color-brand-primary)] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            aria-label="Scroll courses"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.5 5.25 12.25 10 7.5 14.75" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
