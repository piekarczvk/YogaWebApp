import ClipReveal from "@/components/ui/ClipReveal";
import { TextReveal } from "@/components/ui/ClipReveal";

const steps = [
  {
    number: "01",
    title: "Book",
    description:
      "Choose your session type and pick a time that works for you. The whole process takes under two minutes.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Receive a Zoom link directly to your inbox along with a short preparation guide for your practice.",
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Show up as you are. Wear something comfortable, find a quiet space, and let your guide lead the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-soft/25">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <ClipReveal direction="up">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              How It Works
            </h2>
          </ClipReveal>
          <ClipReveal direction="up" delay={0.1}>
            <span className="hidden md:block font-sans text-[10px] tracking-[0.28em] uppercase text-primary">
              The Process
            </span>
          </ClipReveal>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {steps.map((step, i) => (
            <ClipReveal key={step.number} direction="up" delay={i * 0.12}>
              <div className="relative pt-2">
                {/* Ghost number */}
                <span className="font-serif text-[10rem] md:text-[11rem] leading-none text-primary/8 select-none absolute -top-6 -left-3 pointer-events-none">
                  {step.number}
                </span>
                <div className="relative">
                  <TextReveal delay={i * 0.12 + 0.1}>
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
                      {step.title}
                    </h3>
                  </TextReveal>
                  <p className="font-sans text-sm text-accent/65 leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
