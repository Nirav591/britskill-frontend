import Image from "next/image";

const ParentProgressSection = () => {
  return (
    <section
      aria-labelledby="course-finder-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b2a2a] via-[#0a2223] to-[#08161a] py-20 text-white"
    >
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--brand-accent)]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-[var(--brand-accent)]/10 blur-3xl" />
      <div className="absolute right-12 top-24 h-16 w-16 rounded-full border border-white/10 bg-white/5" />
      <div className="absolute right-20 top-40 h-12 w-12 rounded-full border border-white/10 bg-white/5" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(6,12,15,0.45)] ">
            <Image
              src="/images/courses/findcourse.png"
              alt="Students learning together"
              width={840}
              height={560}
              className="h-[320px] w-full  md:h-[420px] lg:h-[520px] object-contain"
              priority
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Subscribe Newsletter
            </span>
            <h2
              id="course-finder-title"
              className="mt-5 text-3xl font-semibold md:text-4xl"
            >
              Find Your Best Course With Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Tell us what you need and we will guide you to the right course,
              level, and class format. Our advisors reply quickly with clear
              options and pricing.
            </p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Course name"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#1ec7b5]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#1ec7b5]"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold text-[#06201d] transition hover:brightness-95 sm:col-span-2 sm:w-fit text-white cursor-pointer"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentProgressSection;
