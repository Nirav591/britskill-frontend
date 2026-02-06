"use client";

import { useId, useState } from "react";
import Link from "next/link";

type SafeguardingSection = {
  key: "environment" | "recording" | "dsl" | "procedures" | "vetting";
  title: string;
  intro?: string;
  bullets?: string[];
  extra?: string;
  icon: React.ReactNode;
};

const safeguardingSections: SafeguardingSection[] = [
  {
    key: "environment",
    title: "Secure Online Learning Environment",
    bullets: [
      "All lessons take place in password-protected virtual classrooms",
      "Student accounts are registered under parent/guardian email addresses",
      "No private messaging between students or between students and tutors",
      "All communication is monitored and recorded",
    ],
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
        <path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7l8-4" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    key: "recording",
    title: "Lesson Recording and Monitoring",
    intro:
      "Every lesson is automatically recorded for safeguarding, quality assurance, and revision purposes. Parents can request access to recordings in line with our safeguarding and data protection policies.",
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
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="m21 8-4 4 4 4" />
      </svg>
    ),
  },
  {
    key: "dsl",
    title: "Dedicated Safeguarding Lead",
    intro:
      "BritSkill Academy has appointed a Designated Safeguarding Lead (DSL) responsible for:",
    bullets: [
      "Ensuring all tutors complete safeguarding training",
      "Responding to any safeguarding concerns",
      "Liaising with parents and external agencies when necessary",
      "Maintaining compliance with UK safeguarding legislation (Keeping Children Safe in Education)",
    ],
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
  {
    key: "procedures",
    title: "Clear Safeguarding Procedures",
    intro: "We have published safeguarding policies covering:",
    bullets: [
      "Student behaviour and acceptable use",
      "Reporting concerns or incidents",
      "Handling disclosures or distress",
      "Data protection and privacy (UK GDPR compliant)",
    ],
    extra:
      "Parents can access our full Safeguarding Policy and Privacy Policy at any time.",
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
    key: "vetting",
    title: "Staff Vetting and Training",
    intro: "Every member of our teaching team undergoes:",
    bullets: [
      "Enhanced DBS check (Disclosure and Barring Service)",
      "Safeguarding training updated annually",
      "Online safety training specific to virtual classrooms",
      "Professional reference checks and qualification verification",
    ],
    extra:
      "We do not allow unvetted individuals to have contact with students. Ever.",
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
        <path d="M7 9h10" />
        <path d="M7 13h6" />
      </svg>
    ),
  },
];

const SafeguardingSafetySection = () => {
  const tabsId = useId();
  const [activeKey, setActiveKey] =
    useState<SafeguardingSection["key"]>("environment");
  const activeSection =
    safeguardingSections.find((section) => section.key === activeKey) ??
    safeguardingSections[0];

  return (
    <section
      aria-labelledby="safeguarding-safety-title"
      className="bg-gradient-to-b from-white via-[var(--color-surface-muted)] to-white py-20 text-[var(--color-foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="safeguarding-safety-title"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            Your Child's Safety is Our Priority
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            BritSkill Academy operates with the same safeguarding standards
            required of UK schools and regulated education providers.
          </p>
        </div>

        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[260px_1fr]">
          <div
            role="tablist"
            aria-label="Safeguarding checklist"
            className="flex flex-col gap-3"
          >
            {safeguardingSections.map((section) => {
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
                      ? "border-[var(--color-brand-primary)] bg-white text-[var(--color-brand-primary)] shadow-sm"
                      : "border-[#e1e6eb] bg-white text-[#425161] hover:border-[#c6d1db]"
                  }`}
                >
                  <span>{section.title}</span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
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
            className="rounded-3xl border border-[#e1e6eb] bg-white p-8 shadow-sm transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-primary)]">
                  {activeSection.title}
                </h3>
                {activeSection.intro && (
                  <p className="mt-3 text-sm text-[#425161] md:text-base">
                    {activeSection.intro}
                  </p>
                )}
              </div>
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
                aria-hidden="true"
              >
                {activeSection.icon}
              </span>
            </div>

            {activeSection.bullets && (
              <ul className="mt-5 space-y-3 text-sm text-[#425161] md:text-base">
                {activeSection.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeSection.extra && (
              <p
                className={`mt-5 text-sm ${
                  activeSection.key === "vetting"
                    ? "font-semibold text-[var(--color-brand-primary)]"
                    : "text-[#425161]"
                }`}
              >
                {activeSection.extra}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {safeguardingSections.map((section) => {
            const panelId = `${tabsId}-${section.key}-mobile-panel`;
            return (
              <div
                key={section.key}
                className="rounded-3xl border border-[#e1e6eb] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={activeKey === section.key}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveKey(
                      activeKey === section.key ? "environment" : section.key
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--color-brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                >
                  <span>{section.title}</span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
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
                    {section.intro && (
                      <p className="mt-4 text-sm text-[#425161]">
                        {section.intro}
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="mt-4 space-y-3 text-sm text-[#425161]">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span
                              className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.extra && (
                      <p
                        className={`mt-4 text-sm ${
                          section.key === "vetting"
                            ? "font-semibold text-[var(--color-brand-primary)]"
                            : "text-[#425161]"
                        }`}
                      >
                        {section.extra}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[var(--color-brand-primary)]">
          <Link
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="/policies/safeguarding"
          >
            Safeguarding Policy
          </Link>
          <Link
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="/policies/privacy"
          >
            Privacy Policy
          </Link>
          <a
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
            href="#"
          >
            Keeping Children Safe in Education (KCSIE)
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

export default SafeguardingSafetySection;
