import { Sun, Moon, Wind } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Session {
  icon: LucideIcon;
  title: string;
  style: string;
  duration: string;
  description: string;
  level: string;
}

const sessions: Session[] = [
  {
    icon: Sun,
    title: "Morning Flow",
    style: "Vinyasa",
    duration: "60 min",
    description:
      "Begin your day grounded and energised. This breath-led flow builds warmth through the body with mindful transitions, leaving you clear and centred.",
    level: "All levels",
  },
  {
    icon: Moon,
    title: "Deep Stretch",
    style: "Yin",
    duration: "45 min",
    description:
      "Surrender into long, passive holds that release deep connective tissue. A quiet practice that invites you to slow down and listen inward.",
    level: "All levels",
  },
  {
    icon: Wind,
    title: "Breathwork & Meditation",
    style: "Hatha",
    duration: "30 min",
    description:
      "Reconnect to your breath as the anchor of your practice. Gentle movement, pranayama, and seated stillness to calm the nervous system.",
    level: "Beginner friendly",
  },
];

export default function Sessions() {
  return (
    <section className="py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Offer"
          heading="Sessions"
          subheading="Each class is tailored to where you are today. No judgement, no pressure — just practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((session, i) => {
            const Icon = session.icon;
            return (
              <ScrollReveal key={session.title} delay={i * 0.12} direction="up">
                <div className="group bg-soft/30 border border-soft p-8 md:p-10 flex flex-col gap-4 hover:-translate-y-1.5 transition-transform duration-300 cursor-default h-full">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">
                      {session.style} · {session.duration}
                    </p>
                    <h3 className="font-serif text-2xl text-foreground">
                      {session.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-accent/70 leading-7 flex-1">
                    {session.description}
                  </p>
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-soft border-t border-soft pt-4 mt-auto">
                    {session.level}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
