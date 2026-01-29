"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import courses from "@/app/data/courses.json";

type Course = {
  slug: string;
  title: string;
  category: string; // ✅ required for tabs
  instructor: {
    name: string;
    title: string;
    bio: string;
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

export default function CoursesPage() {
  const allCourses = courses as Course[];

  // Build tabs from categories in JSON
  const tabs = useMemo(() => {
    const categories = Array.from(new Set(allCourses.map((c) => c.category)))
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));
    return ["All", ...categories] as const;
  }, [allCourses]);

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const filteredCourses = useMemo(() => {
    if (activeTab === "All") return allCourses;
    return allCourses.filter((c) => c.category === activeTab);
  }, [activeTab, allCourses]);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h1 className="text-2xl font-semibold text-[#1f2933]">Our Courses</h1>
          <p className="text-sm text-[#5b6773]">
            Browse by category to find the right course.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 border-b border-[#e1e6eb]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative -mb-px rounded-t-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-b-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)]"
                    : "text-[#5b6773] hover:text-[var(--color-brand-primary)]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCourses.map((course) => (
            <Link
              key={course?.slug}
              href={`/courses/${course?.slug}`}
              className="group rounded-2xl border border-[#e1e6eb] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#f3f4f6]">
                <Image
                  src={course?.image || placeholderImage}
                  alt={course?.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                  Live tuition
                </span>
              </div>

              {/* Content */}
              <div className="mt-4 space-y-2">
                <h3 className="text-base font-semibold text-[#1f2933]">
                  {course?.title}
                </h3>

                <p className="text-xs text-[#5b6773]">
                  {course?.instructor?.name}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#5b6773]">
                  <span className="text-sm font-semibold text-[#1f2933]">
                    {course?.rating?.toFixed(1)}
                  </span>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < Math.round(course.rating)} />
                    ))}
                  </div>

                  <span>({course?.reviews})</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-[#1f2933]">
                    {course?.price}
                  </span>
                  {course?.oldPrice && (
                    <span className="text-xs text-[#8a94a4] line-through">
                      {course?.oldPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {course?.badge ? (
                    <span className="inline-block rounded-full bg-[var(--color-brand-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                      {course?.badge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <span className="text-xs font-semibold text-[#5b6773]">
                    {course?.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="mt-10 rounded-xl border border-[#e1e6eb] bg-[#fbfcfd] p-6 text-sm text-[#5b6773]">
            No courses found in this category.
          </div>
        )}
      </section>
    </main>
  );
}