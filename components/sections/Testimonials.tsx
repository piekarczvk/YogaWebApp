import ClipReveal from "@/components/ui/ClipReveal";
import { TextReveal } from "@/components/ui/ClipReveal";

const testimonials = [
  {
    quote:
      "Siren Holistics' Yin sessions have completely transformed my relationship with stillness. I used to dread slowing down — now I crave it.",
    name: "Sarah K.",
    location: "New York",
    align: "left",
  },
  {
    quote:
      "The Morning Flow is the perfect way to start the week. I feel centred and grounded for days after each session.",
    name: "James T.",
    location: "London",
    align: "right",
  },
  {
    quote:
      "I was a complete beginner and honestly nervous. Siren Holistics made me feel so safe, seen, and capable from the very first breath.",
    name: "Priya M.",
    location: "Toronto",
    align: "left",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-12 h-px bg-soft" />
          <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-primary">
            Kind Words
          </span>
        </div>

        {/* Stacked quotes */}
        <div>
          {testimonials.map((t, i) => (
            <ClipReveal key={t.name} direction="up" delay={i * 0.05}>
              <div
                className={`py-14 md:py-16 border-t border-foreground/8 ${
                  t.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {/* Decorative mark */}
                <span
                  className={`font-serif text-7xl md:text-8xl text-primary/15 leading-none select-none block mb-2 ${
                    t.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  &ldquo;
                </span>

                <TextReveal delay={0.1}>
                  <p
                    className={`font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.3] italic max-w-4xl ${
                      t.align === "right" ? "ml-auto" : ""
                    }`}
                  >
                    {t.quote}
                  </p>
                </TextReveal>

                <ClipReveal direction="up" delay={0.2}>
                  <div className={`mt-8 flex items-center gap-3 ${t.align === "right" ? "justify-end" : ""}`}>
                    <div className="w-6 h-px bg-primary" />
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent/60">
                      {t.name} &nbsp;·&nbsp; {t.location}
                    </p>
                  </div>
                </ClipReveal>
              </div>
            </ClipReveal>
          ))}
          <div className="border-t border-foreground/8" />
        </div>

      </div>
    </section>
  );
}
