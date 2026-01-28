"use client";

import { useState } from "react";
import Link from "next/link";

type ProgressItem = {
  key: "attendance" | "reports" | "recordings" | "communication" | "feedback";
  title: string;
  text: string;
  bullets?: string[];
  widget: {
    title: string;
    value: string;
    meta: string;
  };
};

const progressItems: ProgressItem[] = [
  {
    key: "attendance",
    title: "Attendance Tracking",
    text:
      "Real-time visibility of lesson attendance. You'll know immediately if your child misses a class or joins late.",
    widget: {
      title: "Attendance",
      value: "This week: 3/3 attended",
      meta: "Last update: just now",
    },
  },
  {
    key: "reports",
    title: "Progress Reports",
    text: "Regular updates on:",
    bullets: [
      "Topics covered in lessons",
      "Assessment results and grade predictions",
      "Strengths and areas for development",
      "Recommendations for additional support",
    ],
    widget: {
      title: "Progress",
      value: "Topic mastery: updating",
      meta: "Latest report: in review",
    },
  },
  {
    key: "recordings",
    title: "Access to Lesson Recordings",
    text:
      "Review what your child learned in every lesson. Recordings are available through your parent dashboard, subject to our safeguarding and consent policies.",
    widget: {
      title: "Recordings",
      value: "Latest: available",
      meta: "Retention window: policy-led",
    },
  },
  {
    key: "communication",
    title: "Direct Communication Channels",
    text: "Contact your child's tutor or our support team via:",
    bullets: [
      "Secure messaging through the parent portal",
      "Email support (response within 24 hours on working days)",
      "Scheduled parent-tutor consultations for detailed discussions",
    ],
    widget: {
      title: "Messages",
      value: "Response time: within 24 hours",
      meta: "Working days only",
    },
  },
  {
    key: "feedback",
    title: "Assessment Feedback",
    text:
      "After tests, mock exams, or coursework reviews, parents receive:",
    bullets: [
      "Detailed mark breakdowns",
      "Examiner-style feedback",
      "Target-setting for improvement",
    ],
    widget: {
      title: "Feedback",
      value: "Latest feedback: available",
      meta: "Focus: improvement targets",
    },
  },
];

const ParentProgressSection = () => {
  const [activeKey, setActiveKey] =
    useState<ProgressItem["key"]>("attendance");

  const activeItem =
    progressItems.find((item) => item.key === activeKey) ?? progressItems[0];

  return (
    <section
      aria-labelledby="parent-progress-title"
      className="bg-white py-20 text-[var(--color-foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="parent-progress-title"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            Parent Involvement and Progress Tracking
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            We believe parents should always know how their child is
            progressing. BritSkill Academy provides clear, regular
            communication to keep you informed and involved.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
                Parent dashboard preview
              </p>
              <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
                Live view
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {progressItems.map((item) => {
                const isActive = item.key === activeKey;
                return (
                  <div
                    key={item.key}
                    className={`rounded-2xl border bg-white px-4 py-3 shadow-sm transition ${
                      isActive
                        ? "border-[var(--color-brand-primary)] shadow-md"
                        : "border-[#e1e6eb]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-[var(--color-brand-primary)]">
                        {item.widget.title}
                      </p>
                      <span
                        className={`text-xs font-semibold ${
                          isActive
                            ? "text-[var(--color-brand-accent)]"
                            : "text-[#5b6773]"
                        }`}
                      >
                        {item.key === activeKey ? "Active" : "Preview"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#425161]">
                      {item.widget.value}
                    </p>
                    <p className="mt-1 text-xs text-[#5b6773]">
                      {item.widget.meta}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6773]">
              What Parents Receive:
            </p>
            <div className="mt-6 space-y-4">
              {progressItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveKey(item.key)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] ${
                    activeKey === item.key
                      ? "border-[var(--color-brand-primary)] bg-white shadow-md"
                      : "border-[#e1e6eb] bg-white hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#425161]">{item.text}</p>
                  {item.bullets && (
                    <ul className="mt-3 space-y-2 text-sm text-[#425161]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span
                            className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.key === "recordings" && (
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold text-[var(--color-brand-primary)]">
                      <Link
                        className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                        href="/policies/safeguarding"
                      >
                        Safeguarding policy
                      </Link>
                      <Link
                        className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                        href="/policies/consent"
                      >
                        Consent &amp; recordings
                      </Link>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-semibold text-[var(--color-brand-primary)] md:text-lg">
          You're not left guessing. You get facts, data, and actionable
          insights.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/contact"
          >
            Book a free trial
          </Link>
          <Link
            className="text-sm font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="/how-it-works"
          >
            How online tuition works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParentProgressSection;
