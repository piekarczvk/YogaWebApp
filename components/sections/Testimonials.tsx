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
    <section className="py-24 md:py-36 px-6 md:px-14 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ClipReveal direction="up">
          <p className="font-sans text-[10px] tracking-[0.3em] text-foreground/30 mb-20">
            Kind Words
          </p>
        </ClipReveal>

        {/* Stacked quotes */}
        <div>
          {testimonials.map((t, i) => (
            <ClipReveal key={t.name} direction="up" delay={i * 0.05}>
              <div
                className={`py-14 md:py-16 border-t border-foreground/8 ${
                  t.align === "right" ? "text-right" : "text-left"
                }`}
              >
                <TextReveal delay={0.08}>
                  <p
                    className={`font-serif font-light italic text-2xl md:text-3xl lg:text-[2rem] text-foreground leading-[1.4] max-w-3xl ${
                      t.align === "right" ? "ml-auto" : ""
                    }`}
                  >
                    {t.quote}
                  </p>
                </TextReveal>

                <ClipReveal direction="up" delay={0.15}>
                  <p
                    className={`mt-8 font-sans text-[10px] tracking-[0.2em] text-foreground/30 ${
                      t.align === "right" ? "text-right" : ""
                    }`}
                  >
                    {t.name} &nbsp;/&nbsp; {t.location}
                  </p>
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
