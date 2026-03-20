import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Siren Holistics' Yin sessions have completely transformed my relationship with stillness. I used to dread slowing down — now I crave it.",
    name: "Sarah K.",
    location: "New York",
  },
  {
    quote:
      "The Morning Flow is the perfect way to start the week. I feel centred and grounded for days after each session.",
    name: "James T.",
    location: "London",
  },
  {
    quote:
      "I was a complete beginner and honestly nervous. Siren Holistics made me feel so safe, seen, and capable from the very first breath.",
    name: "Priya M.",
    location: "Toronto",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-soft/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Kind Words"
          heading="What Students Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div className="bg-background p-8 md:p-10 border-t-2 border-primary shadow-sm flex flex-col gap-6 h-full">
                {/* Decorative quote mark */}
                <span className="font-serif text-5xl text-primary/25 leading-none -mb-2 select-none">
                  &ldquo;
                </span>
                <p className="font-serif text-lg text-accent leading-8 flex-1 italic">
                  {t.quote}
                </p>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-accent/50 mt-1">
                    {t.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
