import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
    <section className="py-28 px-6 bg-soft/25">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="The Process"
          heading="How It Works"
          subheading="Getting started is simple. Three steps between you and your practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px bg-primary/20" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="flex flex-col">
                <span className="font-serif text-7xl text-primary/15 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-accent/70 leading-7">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
