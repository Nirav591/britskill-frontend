"use client";

import { useId, useState } from "react";
import Link from "next/link";

type QualificationItem = {
  key: "esol" | "gcse" | "alevel" | "functional";
  title: string;
  description: string;
  label: string;
  bullets: string[];
  extra: string;
  link: { label: string; href: string };
  icon: React.ReactNode;
};

const qualifications: QualificationItem[] = [
  {
    key: "esol",
    title: "ESOL Tuition (English for Speakers of Other Languages)",
    description:
      "Comprehensive ESOL courses for learners developing English language skills for education, work, or UK citizenship.",
    label: "Levels offered:",
    bullets: [
      "Entry 1, Entry 2, Entry 3",
      "Level 1, Level 2",
      "Speaking, listening, reading, and writing skills",
    ],
    extra:
      "Our ESOL tutors have specialist qualifications in teaching English as an additional language and experience supporting international students.",
    link: { label: "View ESOL courses", href: "/courses/esol" },
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
      </svg>
    ),
  },
  {
    key: "functional",
    title: "Functional Skills Tuition (Level 1 & Level 2)",
    description:
      "Functional Skills qualifications are practical, work-focused alternatives to GCSEs, accepted by employers and colleges across the UK.",
    label: "Courses available:",
    bullets: [
      "Functional Skills Maths (Level 1 and Level 2)",
      "Functional Skills English (Level 1 and Level 2)",
    ],
    extra:
      "Ideal for adult learners, apprentices, and students seeking alternative pathways to employment or further education.",
    link: { label: "View Functional Skills", href: "/courses/functional-skills" },
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h10" />
      </svg>
    ),
  },
  {
    key: "gcse",
    title: "GCSE Tuition Online",
    description:
      "Comprehensive GCSE online tuition for students in Years 10 and 11, including resit students and home-educated learners.",
    label: "Subjects available:",
    bullets: [
      "GCSE Maths tuition (Foundation and Higher tier)",
      "GCSE English Language tuition",
      "GCSE Science tuition (Combined Science and separate sciences: Biology, Chemistry, Physics)",
    ],
    extra:
      "Our GCSE tutors teach to exam board specifications including AQA, Edexcel, and OCR, covering all assessment objectives and question types students will face in their final exams.",
    link: { label: "View GCSE courses", href: "/courses/gcse" },
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8" />
        <path d="M8 13h6" />
      </svg>
    ),
  },
  {
    key: "alevel",
    title: "A-Level Tuition Online",
    description:
      "Expert A-Level online tuition for students in Years 12 and 13, supporting coursework, exam preparation, and university applications.",
    label: "Subjects available:",
    bullets: [
      "A-Level Maths tuition (Pure, Statistics, Mechanics)",
      "A-Level Biology tuition",
      "A-Level Chemistry tuition",
    ],
    extra:
      "Our A-Level tutors are subject specialists with proven track records of helping students achieve A*-B grades required for competitive university courses.",
    link: { label: "View A-Level courses", href: "/courses/a-level" },
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M7 11h10" />
      </svg>
    ),
  },


];

const SubjectsQualificationsSection = () => {
  const tabsId = useId();
  const [activeKey, setActiveKey] = useState<QualificationItem["key"]>("gcse");
  const activeItem =
    qualifications.find((item) => item.key === activeKey) ?? qualifications[0];

  return (
    <section
      aria-labelledby="subjects-qualifications-title"
      className="bg-white py-20 text-[var(--color-foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* <h2
            id="subjects-qualifications-title"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            GCSE, A-Level, Functional Skills &amp; ESOL Tuition
          </h2> */}
          {/* <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            BritSkill Academy specialises in exam-focused online tuition across
            key qualifications. All courses follow UK curriculum standards and
            prepare students for nationally recognised examinations.
          </p> */}
        </div>

        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[240px_1fr]">
          <div
            role="tablist"
            aria-label="Qualification selector"
            className="flex flex-col gap-3"
          >
            {qualifications.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <button
                  key={item.key}
                  id={`${tabsId}-${item.key}-tab`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`${tabsId}-${item.key}-panel`}
                  onClick={() => setActiveKey(item.key)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] ${isActive
                      ? "border-[var(--color-brand-primary)] bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)] shadow-sm"
                      : "border-[#e1e6eb] bg-white text-[#425161] hover:border-[#c6d1db]"
                    }`}
                >
                  <span>{item.title.split(" ")[0]}</span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${isActive
                        ? "bg-white text-[var(--color-brand-primary)]"
                        : "bg-[var(--color-surface-muted)] text-[#5b6773]"
                      }`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`${tabsId}-${activeItem.key}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-${activeItem.key}-tab`}
            className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-8 shadow-sm transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm text-[#425161] md:text-base">
                  {activeItem.description}
                </p>
              </div>
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-brand-primary)]"
                aria-hidden="true"
              >
                {activeItem.icon}
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-[#5b6773]">
              {activeItem.label}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#425161] md:text-base">
              {activeItem.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
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
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-[#425161] md:text-base">
              {activeItem.extra}
            </p>

            <Link
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--color-brand-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
              href={activeItem.link.href}
            >
              {activeItem.link.label}
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {qualifications.map((item) => {
            const panelId = `${tabsId}-${item.key}-mobile-panel`;
            return (
              <div
                key={item.key}
                className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)]"
              >
                <button
                  type="button"
                  aria-expanded={activeKey === item.key}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveKey(activeKey === item.key ? "gcse" : item.key)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--color-brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                >
                  <span>{item.title}</span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-brand-primary)]"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </button>
                {activeKey === item.key && (
                  <div
                    id={panelId}
                    className="border-t border-[#e1e6eb] px-5 pb-5"
                  >
                    <p className="mt-4 text-sm text-[#425161]">
                      {item.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#5b6773]">
                      {item.label}
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-[#425161]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
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
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-[#425161]">
                      {item.extra}
                    </p>
                    <Link
                      className="mt-5 inline-flex items-center justify-center rounded-full border border-[var(--color-brand-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                      href={item.link.href}
                    >
                      {item.link.label}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/get-in-touch"
          >
            Book a free trial
          </Link>
          <Link
            className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/courses"
          >
            View all courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubjectsQualificationsSection;
