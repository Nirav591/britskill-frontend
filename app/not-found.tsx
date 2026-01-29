import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="rounded-full border border-[#d7dee6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#5b6773]">
          404
        </span>
        <h1 className="mt-6 text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl">
          This page could not be found
        </h1>
        <p className="mt-4 max-w-md text-sm text-[#425161] md:text-base">
          The page you’re looking for may have moved or no longer exists. Use
          the links below to get back on track.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            className="w-full rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343] sm:w-auto"
            href="/"
          >
            Back to home
          </Link>
          <Link
            className="w-full rounded-full border border-[var(--color-brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-primary)] transition hover:bg-[var(--color-surface-muted)] sm:w-auto"
            href="/courses"
          >
            View courses
          </Link>
        </div>
      </section>
    </main>
  );
}
