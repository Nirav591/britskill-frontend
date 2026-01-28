// app/portal/login/page.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function TeachworksLoginPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If Teachworks gives you a script snippet, you can inject it here.
    // Example pattern (replace with the exact script they provide):
    //
    // const script = document.createElement('script');
    // script.src = 'https://your-teachworks-remote-login-script.js';
    // script.async = true;
    // containerRef.current?.appendChild(script);
    //
    // return () => {
    //   containerRef.current?.removeChild(script);
    // };

  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="hidden flex-col justify-center rounded-3xl bg-[var(--color-brand-primary)] p-10 text-white shadow-lg lg:flex">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            BritSkill Academy
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight">
            Teacher Login
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Manage classes, lesson content, and student progress in one secure
            workspace.
          </p>
          <div className="mt-6 rounded-2xl bg-white/10 p-4 text-xs text-white/80">
            Use your staff credentials to sign in. If you need help, contact our
            support team.
          </div>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-lg sm:p-8">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-brand-primary)]">
            Teacher Login
          </h2>
          <p className="mt-2 text-center text-sm text-[#5b6773]">
            Sign in to manage your classes, lessons, and student updates.
          </p>

        {/* Option 1: Paste provided Teachworks <form> HTML directly */}
        <div ref={containerRef}>
          {/* Replace the example <form> with the actual Remote Login Add-On form JSX/HTML from Teachworks */}

          <form
            action="http://britskill.teachworks.com/accounts/login" // replace with your Teachworks login URL
            method="post"
            className="mt-6 space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#425161]">
                Email
              </label>
              <input
                type="email"
                name="username"
                required
                className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#425161]">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full rounded-xl border border-[#d7dee6] px-4 py-3 text-sm text-[#1f2933] outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/30"
              />
            </div>

            {/* Add any hidden fields Teachworks requires here, e.g. company ID, redirect URL, etc. */}

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--color-brand-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2343]"
            >
              Log in
            </button>
          </form>
        </div>

          <p className="mt-4 text-center text-xs text-[#5b6773]">
            Forgot your password? Use the password reset link on the Teachworks
            login page.
          </p>
        </div>
      </div>
    </main>
  );
}
