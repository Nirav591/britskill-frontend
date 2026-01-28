import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0b1a33] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">BritSkill Academy</h3>
            <p className="mt-2 text-sm text-white/70">
              Online Education • UK Standards • Small Group Tuition
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-white/80">
              {[
                "Safeguarding Certified",
                "DBS-Checked Tutors",
                "UK Curriculum Specialists",
                "Secure Payment Processing (SSL)",
                "Data Protection Registered (ICO)",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Quick Links
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/courses/gcse"
              >
                GCSE Tuition
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/courses/a-level"
              >
                A-Level Tuition
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/courses/functional-skills"
              >
                Functional Skills Courses
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/courses/esol"
              >
                ESOL Classes
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/pricing"
              >
                Pricing &amp; Plans
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/how-it-works"
              >
                How It Works
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/safeguarding"
              >
                Safeguarding Policy
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/terms"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>
                Email:{" "}
                <a
                  className="font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  href="mailto:info@britskillacademy.com"
                >
                  info@britskillacademy.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  className="font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  href="tel:+44XXXXXXXXXX"
                >
                  +44 [XXXX XXXXXX]
                </a>
              </p>
              <p>Address: [Your registered business address]</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Parents Say
            </h3>
            <blockquote className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p>
                "Excellent online tuition — my daughter's Maths grade improved
                from a 4 to a 7 in just 6 months."
              </p>
              <cite className="mt-3 block text-xs text-white/60">
                — Sarah M., Parent
              </cite>
            </blockquote>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60 md:flex md:items-center md:justify-between">
          <p>
            © 2025 BritSkill Academy. All rights reserved. Registered in
            England and Wales. Company No. [XXXXXXXX]
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
