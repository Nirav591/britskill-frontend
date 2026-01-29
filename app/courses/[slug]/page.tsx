import { notFound } from "next/navigation";
import courses from "@/app/data/courses.json";
import Link from "next/link";

type Course = (typeof courses)[number];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return (courses as Course[]).map((course) => ({
    slug: course.slug,
  }));
}

const stars = Array.from({ length: 5 });
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

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="border-b border-[#e1e6eb] bg-[var(--color-brand-primary)]/95 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {course?.category}
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                {course?.title}
              </h1>
              <p className="mt-4 text-sm text-white/80 md:text-base">
                {course?.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">
                    {course?.rating?.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-1">
                    {stars.map((_, idx) => (
                      <svg
                        key={idx}
                        className="h-4 w-4 text-[#f59e0b]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 0 0 .95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 0 0-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.538 1.118l-3.37-2.449a1 1 0 0 0-1.175 0l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.287-3.959a1 1 0 0 0-.364-1.118L2.17 9.386c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 0 0 .95-.69l1.178-3.959z" />
                      </svg>
                    ))}
                  </div>
                  <span>({course?.reviews})</span>
                </div>
                <span>{course?.students}+ students</span>
                <span>Updated {course?.lastUpdated}</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-white/80">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                  {course?.level}
                </span>
                {"duration" in course && (course as { duration?: string }).duration ? (
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    {(course as { duration?: string }).duration}
                  </span>
                ) : null}
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                  {course?.language}
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-4 text-[var(--color-foreground)] shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d2b52] via-[#1f3a65] to-[#2e9e4f]">
                <img
                  src={placeholderImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                    {course?.price}
                  </span>
                  {course?.oldPrice && (
                    <span className="text-sm text-[#8a94a4] line-through">
                      {course?.oldPrice}
                    </span>
                  )}
                </div>
                <a
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="https://britskill.teachworks.com/form/student-enrollment-form"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enrol now
                </a>
                <p className="mt-3 text-center text-xs text-[#5b6773]">
                  Flexible weekly subscription available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                What you’ll learn
              </h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {course?.whatYouLearn?.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#e1e6eb] bg-white p-4 shadow-sm"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                    <p className="text-sm text-[#425161]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                Course content
              </h2>
              <div className="mt-4 space-y-3">
                {(course?.modules ?? []).map((section) => (
                  <details
                    key={section.title}
                    className="rounded-2xl border border-[#e1e6eb] bg-white shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-[#1f2933]">
                      <span>
                        Module {section.module}: {section.title}
                      </span>
                      <span className="text-[#5b6773]">{section.focus}</span>
                    </summary>
                    <div className="border-t border-[#e1e6eb] px-4 py-3 text-sm text-[#425161]">
                      <p>{section.focus}</p>
                      <ul className="mt-3 space-y-2">
                        {(section?.keySkills ?? []).map((skill) => (
                          <li key={skill} className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                Requirements
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-[#425161]">
                {course?.entryRequirements?.prerequisites?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                Description
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#425161]">
                {course?.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                This course? includes
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#425161]">
                {course?.includes?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-primary)]/10 text-sm font-semibold text-[var(--color-brand-primary)]">
                  {course?.instructor?.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1f2933]">
                    {course?.instructor?.name}
                  </p>
                  <p className="text-xs text-[#5b6773]">
                    {course?.instructor?.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#425161]">
                {course?.instructor?.bio}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
