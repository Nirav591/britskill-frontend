"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {
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
          <a className="" href="#">
            Home
          </a>
        
          
          <Link className="" href="/student-family-login">
            Student / Parent Login
          </Link>
        <Link href={"/teacher-login"}>
          Teacher Login
        </Link>
        </nav>
       
      </div>
    </header>
  );
};

export default Header;
