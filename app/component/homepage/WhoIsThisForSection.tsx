type WhoIsThisForSectionProps = {
  className?: string;
};

const WhoIsThisForSection = ({ className }: WhoIsThisForSectionProps) => {
  return (
    <section
      aria-labelledby="who-is-this-for"
      className={`bg-white py-20 text-[var(--color-foreground)] ${
        className ?? ""
      }`.trim()}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="who-is-this-for"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            Who Is This For?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            We support school students, parents, and adult learners across the
            UK. We also support adult learners returning to education or
            improving English for work and life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "For School Students",
              bullets: ["GCSE & A-Level support", "Homework & exam preparation"],
            },
            {
              title: "For Adult Learners",
              bullets: ["ESOL (A1–C1)", "Functional Skills English & Maths"],
            },
            {
              title: "For Parents",
              bullets: ["Progress tracking", "Qualified, DBS-checked tutors"],
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-[#e1e6eb] bg-[var(--color-surface-muted)] p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[var(--color-brand-primary)]">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#425161]">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                    <span>{bullet}</span>
                  </li>
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
