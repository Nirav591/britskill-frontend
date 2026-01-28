import Link from "next/link";

const GetStartedCTASection = () => {
  return (
    <section
      aria-labelledby="get-started-title"
      className="bg-gradient-to-br from-white via-[var(--color-surface-muted)] to-white py-20 text-[var(--color-foreground)]"
    >
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_top,_rgba(13,43,82,0.08),_transparent_55%)] lg:block" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              id="get-started-title"
              className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
            >
              Start Your Child's Learning Journey with BritSkill Academy
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#425161] md:text-lg">
              <p>
                Whether your child needs exam preparation, subject support,
                confidence building, or a fresh start with their studies,
                BritSkill Academy is here to help.
              </p>
              <p>
                Our expert tutors, structured courses, and supportive online
                environment give students the tools they need to succeed — and
                parents the peace of mind they deserve.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-semibold text-[var(--color-brand-primary)]">
              Take the First Step Today
            </h3>

            <div className="mt-6 rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[var(--color-brand-primary)]">
                Have Questions? Speak to our team about course options, pricing,
                or{" "}
                <Link
                  className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/policies/safeguarding"
                >
                  safeguarding
                </Link>{" "}
                policies.
              </p>
              <div className="mt-4 space-y-2 text-sm text-[#425161]">
                <p>
                  Email:{" "}
                  <a
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                    href="mailto:info@britskillacademy.com"
                  >
                    info@britskillacademy.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                    href="tel:+44XXXXXXXXXX"
                  >
                    +44 XXXX XXXXXX
                  </a>
                </p>
                <p>Live chat: Available Mon-Fri, 9am-5pm</p>
              </div>
              <div className="mt-4">
                <Link
                  className="text-sm font-semibold text-[var(--color-brand-primary)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-3xl border border-[#d7dee6] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <span className="absolute right-6 top-6 rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary)]">
                Recommended first step
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--color-brand-primary)]">
                  Book a Free Assessment
                </h3>
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 5h16v14H4z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-sm text-[#425161]">
                We'll assess your child's current level, identify learning
                goals, and recommend the right course. No obligation. No
                pressure.
              </p>
              <Link
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                href="/assessment"
              >
                Book Your Free Assessment
              </Link>
            </div>

            <div className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--color-brand-primary)]">
                  Enrol Directly
                </h3>
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-[var(--color-brand-primary)]"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18" />
                    <path d="M5 7h14" />
                    <path d="M7 11h10" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-sm text-[#425161]">
                Already know which course you need? Enrol now and your child
                can join the next available class.
              </p>
              <Link
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]"
                href="/courses"
              >
                View Courses &amp; Enrol
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-semibold text-[var(--color-brand-primary)] md:text-lg">
          Join hundreds of UK families who trust BritSkill Academy for online
          tuition that works.
        </p>
      </div>
    </section>
  );
};

export default GetStartedCTASection;
