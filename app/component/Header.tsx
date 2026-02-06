"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById("page-header");
    if (!header) return;

    const intercept = document.createElement("div");
    intercept.setAttribute("data-observer-intercept", "");
    header.before(intercept);

    const observer = new IntersectionObserver(([entry]) => {
      header.classList.toggle("active", !entry.isIntersecting);
    });

    observer.observe(intercept);

    return () => {
      observer.disconnect();
      intercept.remove();
    };
  }, []);

  return (
    <header
      id="page-header"
      className="sticky top-0 z-50 bg-white text-[var(--color-brand-primary)]"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <img
              className="h-10 w-auto"
              src="/assets/header/logo.png"
              alt="Britskill Academy"
            />
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-brand-primary)] lg:flex ">
          <Link className="" href="#">
            Home
          </Link>
          <Link href={"/courses"}>
            Courses
          </Link>
          <Link className="" target="_blank" href="http://britskill.teachworks.com/accounts/login">
            Student / Parent Login
          </Link>
          <Link
            className="" target="_blank" href="http://britskill.teachworks.com/accounts/login">Teacher Login</Link>

        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="rounded-full border border-[var(--color-brand-primary)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-brand-primary)] shadow-sm transition hover:bg-[var(--color-surface-muted)]"
            href="https://britskill.teachworks.com/form/get-in-touch"
            target="_blank"
          >
            Get in touch
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#d7dee6] bg-white p-2 text-[var(--color-brand-primary)] shadow-sm transition hover:bg-[var(--color-surface-muted)] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
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
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

      </div>
      <div id="mobile-menu" className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="mx-auto w-full max-w-6xl px-6 pb-5">
          <div className="rounded-2xl border border-[#e1e6eb] bg-white p-4 shadow-sm">
            <nav className="flex flex-col gap-3 text-sm font-semibold text-[var(--color-brand-primary)]">
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/courses" onClick={() => setMenuOpen(false)}>
                Courses
              </Link>
              <Link href="http://britskill.teachworks.com/accounts/login" target="_blank" onClick={() => setMenuOpen(false)}>
                Student / Parent Login
              </Link>
              <Link href="http://britskill.teachworks.com/accounts/login" target="_blank" onClick={() => setMenuOpen(false)}>
                Teacher Login
              </Link>
              <Link href="/get-in-touch" onClick={() => setMenuOpen(false)}>
                Get in touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
