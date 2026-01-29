export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-[#5b6773]">
          Last updated: January 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-[#425161]">
          <p>
            These Terms &amp; Conditions apply to all services provided by
            BritSkill Academy. By using our website or enrolling in tuition,
            you agree to these terms.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              1. Services
            </h2>
            <p className="mt-2">
              We provide online tuition services, including live lessons,
              learning resources, and progress reporting. Availability and
              scheduling may vary by course and level.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              2. Enrolment and Access
            </h2>
            <p className="mt-2">
              Access to lessons and materials is provided after enrolment and
              any required onboarding steps. You are responsible for keeping
              your login details secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              3. Payments
            </h2>
            <p className="mt-2">
              Fees are communicated before enrolment and billed in accordance
              with the selected plan. Prices may change with notice. Any
              discounts or promotions are subject to availability.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              4. Cancellations
            </h2>
            <p className="mt-2">
              Subscriptions may be cancelled in line with our cancellation
              policy. Notice periods, refunds, and rescheduling options are
              outlined in the policy documentation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              5. Safeguarding and Conduct
            </h2>
            <p className="mt-2">
              All students, parents, and staff are expected to follow our
              safeguarding and conduct standards. We reserve the right to
              suspend access in cases of serious misconduct.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              6. Data Protection
            </h2>
            <p className="mt-2">
              We process personal data in line with our Privacy Policy and UK
              GDPR requirements. Please review the Privacy Policy for details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              7. Changes to Terms
            </h2>
            <p className="mt-2">
              We may update these Terms &amp; Conditions from time to time. The
              latest version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
