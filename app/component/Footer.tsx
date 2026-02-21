import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0b2a2a] via-[#0a2223] to-[#08161a] text-white">
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--brand-accent)]/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--brand-accent)]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(6,12,15,0.45)] md:flex md:items-center md:justify-between md:gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Subscribe Our Newsletter For Latest
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Get course launches, free resources, and exam tips in your inbox.
            </p>
          </div>
          <form className="mt-6 flex w-full flex-col gap-3 md:mt-0 md:max-w-lg md:flex-row">
            <label className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white/70 focus-within:border-[#1ec7b5]">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-white/60"
              >
                <path
                  d="M4 6h16v12H4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M4 7l8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Get In Touch!
            </h4>
            <p className="mt-4 text-sm text-white/70">
              Friendly, human support for parents, students, and adult learners.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="font-semibold">+44 07944 424467</p>
              <p>info@britskillacademy.co.uk</p>
              <p>165 The Broadway, London SW19 1NE</p>
            </div>
            <div className="mt-5 flex items-center gap-3 text-white/70">
              {["Fb", "Ig", "Be", "Yt"].map((label) => (
                <span
                  key={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Company Info
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {[
                { label: "About Us", href: "/about" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Safeguarding Policy", href: "/policies/safeguarding" },
                { label: "Privacy Policy", href: "/policies/privacy" },
                { label: "Terms & Conditions", href: "/policies/terms" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="text-[#1ec7b5]">→</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Useful Links
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {[
                { label: "GCSE Tuition", href: "/courses/gcse" },
                { label: "A-Level Tuition", href: "/courses/a-level" },
                { label: "Functional Skills", href: "/courses/functional-skills" },
                { label: "ESOL Classes", href: "/courses/esol" },
                { label: "Pricing & Plans", href: "/pricing" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="text-[#1ec7b5]">→</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Recent Post
            </h4>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: "Study Habits That Improve Exam Scores",
                  date: "20 April, 2025",
                  image: "/images/courses/f-1.jpg",
                },
                {
                  title: "Helping Adults Build Confidence in English",
                  date: "12 March, 2025",
                  image: "/images/courses/f-2.jpg",
                },
              ].map((post) => (
                <div key={post.title} className="flex items-start gap-3">
                  <div className="h-14 w-20 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={160}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{post.title}</p>
                    <p className="mt-1 text-xs text-white/60">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60 md:flex md:items-center md:justify-between">
          <p>
            © 2026 BritSkill Academy. All rights reserved. Registered in
            England and Wales. Company No. 14382395
          </p>
          <Link
            className="mt-4 inline-flex text-white/70 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:mt-0"
            href="#top"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
