import Link from "next/link";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${className ?? ""}`}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="https://solidblackabroad.com/images/background/bg1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center md:px-8">
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          Online GCSE and A-Level Tuition with UK Qualified Tutors
        </h1>

        <p className="mt-4 text-lg text-gray-200 md:text-xl">
          Trusted online tuition for GCSE, A-Level, Functional Skills and ESOL
          students across the UK and internationally.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-gray-200 md:text-base">
          <span>Live interactive lessons</span>
          <span className="text-gray-400">•</span>
          <span>Small group classes (max 8 students)</span>
          <span className="text-gray-400">•</span>
          <span>60-minute sessions</span>
          <span className="text-gray-400">•</span>
          <span>DBS-checked UK tutors</span>
          <span className="text-gray-400">•</span>
          <span>Proven exam results</span>
        </div>

        <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book-assessment"
            className="w-full rounded-full bg-[var(--color-brand-accent)] px-8 py-4 text-sm font-semibold text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
          >
            Book Your Free Assessment
          </Link>

          <Link
            href="/courses"
            className="w-full rounded-full border-2 border-white bg-white/90 px-8 py-4 text-sm font-semibold text-[var(--color-brand-accent)] transition hover:bg-white sm:w-auto"
          >
            View Our Courses
          </Link>
        </div>

        <div className="mt-8 grid w-full grid-cols-2 gap-3 text-sm text-gray-200 md:grid-cols-4">
          {[
            "Over 500 students taught",
            "UK curriculum specialists",
            "Ofqual-regulated qualifications",
            "Safeguarding certified",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;