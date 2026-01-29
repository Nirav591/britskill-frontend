export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#5b6773]">
          Last updated: January 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-[#425161]">
          <p>
            BritSkill Academy respects your privacy and is committed to
            protecting personal data. This policy explains how we collect, use,
            and protect information when you use our website and services.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              We may collect information you provide directly, such as names,
              contact details, and enrolment information. We may also collect
              usage data to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information to deliver tuition services, communicate
              with families, manage enrolment, and improve the learning
              experience.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              3. Sharing Information
            </h2>
            <p className="mt-2">
              We do not sell your personal data. Information is only shared
              where necessary for service delivery, legal compliance, or with
              your consent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              4. Data Security
            </h2>
            <p className="mt-2">
              We take reasonable measures to secure your data and limit access
              to authorised personnel only.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              5. Your Rights
            </h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your
              personal data in line with UK GDPR requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-brand-primary)]">
              6. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. The latest
              version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
