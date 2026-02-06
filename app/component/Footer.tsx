import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1a33] via-[#0a1930] to-[#09162a] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">BritSkill Academy</h3>
            <p className="mt-2 text-sm text-white/70">
              Online Education • UK Standards • Small Group Tuition
            </p>
            <div className="mt-6 flex flex-col gap-3 text-xs font-semibold text-white/80">
              {[
                "Safeguarding Certified",
                "DBS-Checked Tutors",
                "UK Curriculum Specialists",
                "Secure Payment Processing (SSL)",
                "Data Protection Registered (ICO)",
              ].map((badge) => (
                <span
                  key={badge}
                  className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Quick Links
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
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
                href="/policies/children-privacy"
              >
                Children&apos;s Privacy Notice
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/code-of-conduct"
              >
                Code of Conduct
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/privacy"
              >
                Privacy Policy
              </Link>
               <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/terms-of-use"
              >
               Term of Use
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/policies/terms"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                href="/get-in-touch"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                Email:{" "}
                <a
                  className="font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  href="mailto:info@britskillacademy.co.uk"
                >
                  info@britskillacademy.co.uk
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  className="font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  href="tel:+44XXXXXXXXXX"
                >
                  +44 07944 424467
                </a>
              </p>
              <p>Address: 165 The Broadway, London SW19 1NE</p>
            </div>
          </div>


        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60 md:flex md:items-center md:justify-between">
          <p>
            © 2025 BritSkill Academy. All rights reserved. Registered in
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
