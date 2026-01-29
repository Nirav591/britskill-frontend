"use client";

import { useId, useState } from "react";
import Link from "next/link";

type TrustSection = {
  key: "tutors" | "classes" | "live" | "structured" | "results";
  title: string;
  intro: string;
  bullets?: string[];
  extra?: string;
  after?: string;
  icon: JSX.Element;
};

const trustSections: TrustSection[] = [
  {
    key: "tutors",
    title: "UK-Based, Qualified Tutors",
    intro: "Every tutor on our team is:",
    bullets: [
      "UK qualified with teaching credentials (QTS, PGCE, or equivalent)",
      "DBS-checked (Disclosure and Barring Service) for child safety",
      "Safeguarding trained in line with UK education requirements",
      "Experienced in UK curriculum delivery and exam preparation",
    ],
    extra:
      "Our tutors aren't just subject experts — they're trained educators who understand how students learn, how to manage online classrooms effectively, and how to prepare students for exam success.",
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
    key: "classes",
    title: "Small Class Sizes That Work",
    intro:
      "We cap every class at 8 students maximum. This isn't arbitrary — it's the group size proven to balance interaction, individual attention, and peer learning. In our small group tuition model:",
    bullets: [
      "Tutors know every student by name",
      "Students can ask questions without hesitation",
      "Progress is monitored closely",
      "Shy students build confidence safely",
    ],
    after:
      "Large online classes with 20, 30, or 50 students cannot offer this level of support.",
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
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6" />
        <path d="M15 14c3.3 0 6 2.7 6 6" />
      </svg>
    ),
  },
  {
    key: "live",
    title: "Live Interactive Lessons, Not Videos",
    intro:
      "BritSkill Academy delivers live online teaching, not pre-recorded content. Students interact with their tutor in real-time, ask questions as they arise, and engage with classmates in collaborative learning. Lessons are dynamic, responsive, and adapted to student needs.",
    extra:
      "Recordings are provided for revision purposes, but the core learning happens live.",
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
        <path d="M4 6h16v12H4z" />
        <path d="M10 10l4 2-4 2z" />
      </svg>
    ),
  },
  {
    key: "structured",
    title: "Structured Learning with Clear Goals",
    intro:
      'We don\'t offer casual tutoring or "homework help." Our courses follow structured schemes of work aligned to exam specifications, with:',
    bullets: [
      "Clear learning objectives for every lesson",
      "Progressive skill development across topics",
      "Regular low-stakes assessments to identify gaps",
      "Mock exams and exam technique practice",
    ],
    after:
      "Students know what they're learning, why it matters, and how it connects to their exams.",
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
        <path d="M5 4h14v16H5z" />
        <path d="M9 8h6" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
      </svg>
    ),
  },
  {
    key: "results",
    title: "Proven Results",
    intro: "Our students achieve measurable progress:",
    bullets: [
      "Grade improvements averaging [X grades/levels]",
      "[X%] of GCSE students achieve target grades or higher",
      "[X%] of A-Level students secure A*-B grades",
      "Functional Skills pass rate of [X%]",
    ],
    extra:
      "(Insert actual data where available — even anonymised case studies work well here)",
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
        <path d="M4 19V5" />
        <path d="M8 19v-6" />
        <path d="M12 19v-9" />
        <path d="M16 19v-4" />
        <path d="M20 19V8" />
      </svg>
    ),
  },
];

const ParentsTrustSection = () => {
  const tabsId = useId();
  const [activeKey, setActiveKey] = useState<TrustSection["key"]>("tutors");
  const activeSection =
    trustSections.find((section) => section.key === activeKey) ??
    trustSections[0];

  return (
    <section
      aria-labelledby="parents-trust-title"
      className="bg-white py-20 text-[var(--color-foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="parents-trust-title"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            The BritSkill Academy Difference — Quality, Safety, Results
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            Parents choose BritSkill Academy because we combine academic
            excellence with the safeguarding standards expected in UK schools.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--color-brand-primary)]">
          {[
            "UK-qualified tutors",
            "DBS checked",
            "Max 8 students",
            "Live lessons",
          ].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-[#d7dee6] bg-[var(--color-surface-muted)] px-3 py-2"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[240px_1fr]">
          <div
            role="tablist"
            aria-label="Parent trust sections"
            className="flex flex-col gap-3"
          >
            {trustSections.map((section) => {
              const isActive = section.key === activeKey;
              return (
                <button
                  key={section.key}
                  id={`${tabsId}-${section.key}-tab`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`${tabsId}-${section.key}-panel`}
                  onClick={() => setActiveKey(section.key)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] ${
                    isActive
                      ? "border-[var(--color-brand-primary)] bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)] shadow-sm"
                      : "border-[#e1e6eb] bg-white text-[#425161] hover:border-[#c6d1db]"
                  }`}
                >
                  <span>{section.title}</span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-white text-[var(--color-brand-primary)]"
                        : "bg-[var(--color-surface-muted)] text-[#5b6773]"
                    }`}
                    aria-hidden="true"
                  >
                    {section.icon}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`${tabsId}-${activeSection.key}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-${activeSection.key}-tab`}
            className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-8 shadow-sm transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                  {activeSection.title}
                </h3>
                <p className="mt-3 text-sm text-[#425161] md:text-base">
                  {activeSection.intro}
                </p>
              </div>
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-brand-primary)]"
                aria-hidden="true"
              >
                {activeSection.icon}
              </span>
            </div>

            {activeSection.bullets && (
              <ul className="mt-5 space-y-3 text-sm text-[#425161] md:text-base">
                {activeSection.bullets.map((bullet) => {
                  const content =
                    bullet ===
                    "DBS-checked (Disclosure and Barring Service) for child safety" ? (
                      <span>
                        <Link
                          className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                          href="/policies/safeguarding"
                        >
                          DBS-checked
                        </Link>{" "}
                        (Disclosure and Barring Service) for child safety
                      </span>
                    ) : bullet ===
                      "Safeguarding trained in line with UK education requirements" ? (
                      <span>
                        <Link
                          className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                          href="/policies/safeguarding"
                        >
                          Safeguarding
                        </Link>{" "}
                        trained in line with UK education requirements
                      </span>
                    ) : (
                      <span>{bullet}</span>
                    );

                  return (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]"
                        aria-hidden="true"
                      />
                      {content}
                    </li>
                  );
                })}
              </ul>
            )}

            {activeSection.extra && (
              <p className="mt-5 text-sm text-[#425161] md:text-base">
                {activeSection.extra}
              </p>
            )}

            {activeSection.after && (
              <p className="mt-5 text-sm font-semibold text-[#1f2933]">
                {activeSection.after}
              </p>
            )}

            {activeSection.key === "results" && (
              <>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {activeSection.bullets?.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-2xl border border-[#d7dee6] bg-white px-4 py-3 text-xs font-semibold text-[var(--color-brand-primary)]"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[#5b6773]">
                  Figures shown are placeholders until updated.{" "}
                  <Link
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                    href="/how-it-works"
                  >
                    See how progress is tracked
                  </Link>
                  .
                </p>
                <p className="mt-3 text-xs text-[#5b6773]">
                  {activeSection.extra}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {trustSections.map((section) => {
            const panelId = `${tabsId}-${section.key}-mobile-panel`;
            return (
              <div
                key={section.key}
                className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)]"
              >
                <button
                  type="button"
                  aria-expanded={activeKey === section.key}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveKey(activeKey === section.key ? "tutors" : section.key)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--color-brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                >
                  <span>{section.title}</span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-brand-primary)]"
                    aria-hidden="true"
                  >
                    {section.icon}
                  </span>
                </button>
                {activeKey === section.key && (
                  <div
                    id={panelId}
                    className="border-t border-[#e1e6eb] px-5 pb-5"
                  >
                    <p className="mt-4 text-sm text-[#425161]">
                      {section.intro}
                    </p>
                    {section.bullets && (
                      <ul className="mt-4 space-y-3 text-sm text-[#425161]">
                        {section.bullets.map((bullet) => {
                          const content =
                            bullet ===
                            "DBS-checked (Disclosure and Barring Service) for child safety" ? (
                              <span>
                                <Link
                                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                                  href="/policies/safeguarding"
                                >
                                  DBS-checked
                                </Link>{" "}
                                (Disclosure and Barring Service) for child
                                safety
                              </span>
                            ) : bullet ===
                              "Safeguarding trained in line with UK education requirements" ? (
                              <span>
                                <Link
                                  className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                                  href="/policies/safeguarding"
                                >
                                  Safeguarding
                                </Link>{" "}
                                trained in line with UK education requirements
                              </span>
                            ) : (
                              <span>{bullet}</span>
                            );
                          return (
                            <li key={bullet} className="flex items-start gap-3">
                              <span
                                className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]"
                                aria-hidden="true"
                              />
                              {content}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {section.extra && section.key !== "results" && (
                      <p className="mt-4 text-sm text-[#425161]">
                        {section.extra}
                      </p>
                    )}
                    {section.after && (
                      <p className="mt-4 text-sm font-semibold text-[#1f2933]">
                        {section.after}
                      </p>
                    )}
                    {section.key === "results" && (
                      <>
                        <div className="mt-4 grid gap-3">
                          {section.bullets?.map((bullet) => (
                            <span
                              key={bullet}
                              className="rounded-2xl border border-[#d7dee6] bg-white px-4 py-3 text-xs font-semibold text-[var(--color-brand-primary)]"
                            >
                              {bullet}
                            </span>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-[#5b6773]">
                          Figures shown are placeholders until updated.{" "}
                          <Link
                            className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                            href="/how-it-works"
                          >
                            See how progress is tracked
                          </Link>
                          .
                        </p>
                        <p className="mt-3 text-xs text-[#5b6773]">
                          {section.extra}
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] sm:w-auto"
            href="/get-in-touch"
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

export default ParentsTrustSection;
