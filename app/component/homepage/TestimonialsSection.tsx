type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "My son feels much more confident in English and his grades are improving. The tutor keeps me updated each week.",
    name: "Parent of GCSE student",
    role: "London",
  },
  {
    quote:
      "The ESOL classes are clear and friendly. I can now speak more confidently at work and in daily life.",
    name: "Adult ESOL learner",
    role: "Manchester",
  },
  {
    quote:
      "Small groups and focused teaching helped me pass my Functional Skills exam. The support was excellent.",
    name: "Functional Skills learner",
    role: "Birmingham",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials"
      className="bg-[var(--color-surface-muted)] py-20 text-[var(--color-foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="testimonials"
            className="text-3xl font-semibold text-[var(--color-brand-primary)] md:text-4xl"
          >
            What Learners & Parents Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#425161] md:text-lg">
            Short, honest feedback from real families and adult learners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-[#e1e6eb] bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-6 text-[#425161]">“{item.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-[var(--color-brand-primary)]">
                {item.name}
              </div>
              <div className="text-xs text-[#5b6773]">{item.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
