import Image from "next/image";

type WhoIsThisForSectionProps = {
  className?: string;
};

const CardIcon = ({
  className,
  variant,
}: {
  className?: string;
  variant: "students" | "adults" | "parents";
}) => {
  if (variant === "adults") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 13h7l2 2h7" />
        <path d="M7 10h4l2 2h4" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    );
  }

  if (variant === "parents") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M16.5 13.5l1.5 1.5 3-3" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16v10H4z" />
      <path d="M7 16v3" />
      <path d="M17 16v3" />
      <path d="M8 10h8" />
    </svg>
  );
};

const WhoIsThisForSection = ({ className }: WhoIsThisForSectionProps) => {
  return (
    <section
      aria-labelledby="who-is-this-for"
      className={`relative overflow-hidden py-20 text-white ${
        className ?? ""
      }`.trim()}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(62,144,136,0.35),_rgba(17,24,32,0.95)_55%)]" />
      <div className="absolute left-10 top-12 h-24 w-24 rounded-3xl border border-white/10 bg-white/5" />
      <div className="absolute left-20 top-24 h-20 w-20 rounded-2xl border border-white/10 bg-white/5" />
      <div className="absolute right-10 top-24 h-16 w-16 rounded-xl border border-white/10 bg-white/5" />
      <div className="absolute right-16 top-44 h-12 w-12 rounded-xl border border-white/10 bg-white/5" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Why Choose Us
          </span>
          <h2
            id="who-is-this-for"
            className="mt-5 text-3xl font-semibold md:text-4xl"
          >
            Who Is This For?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            We support school students, parents, and adult learners across the
            UK. We also support adult learners returning to education or
            improving English for work and life.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {[
            {
              title: "For School Students",
              bullets: ["GCSE & A-Level support", "Homework & exam preparation"],
              image: "/images/courses/student.png",
              icon: "students" as const,
            },
            {
              title: "For Adult Learners",
              bullets: ["ESOL (A1–C1)", "Functional Skills English & Maths"],
              image: "/images/courses/adult.png",
              icon: "adults" as const,
            },
            // {
            //   title: "For Parents",
            //   bullets: ["Progress tracking", "Qualified, DBS-checked tutors"],
            //   image: "/images/courses/f-m-1.jpg",
            //   icon: "parents" as const,
            // },
          ].map((card, index) => (
            <article
              key={card.title}
              className="relative rounded-[32px] border border-white/10 bg-white/5 px-6 pb-8 pt-12 text-center shadow-[0_20px_60px_rgba(15,20,30,0.25)]"
            >
              
              <div className="relative mx-auto h-70 w-70 overflow-visible">
                <div className="absolute inset-0 rounded-full border border-white/20 shadow-lg" />
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={400}
                  className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-[60%] object-contain h-full w-full"
                  priority={index === 0}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
