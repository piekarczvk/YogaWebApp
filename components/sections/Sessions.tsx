"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ClipReveal from "@/components/ui/ClipReveal";
import Link from "next/link";

interface Session {
  num: string;
  title: string;
  style: string;
  duration: string;
  description: string;
  level: string;
}

const sessions: Session[] = [
  {
    num: "01",
    title: "Morning Flow",
    style: "Vinyasa",
    duration: "60 min",
    description:
      "Energising breath-led movement to begin your day grounded and clear. Transitions are mindful, the pace is yours.",
    level: "All levels",
  },
  {
    num: "02",
    title: "Deep Stretch",
    style: "Yin",
    duration: "45 min",
    description:
      "Long passive holds that release the deep connective tissue. A quiet practice in surrender and listening inward.",
    level: "All levels",
  },
  {
    num: "03",
    title: "Breathwork & Meditation",
    style: "Hatha",
    duration: "30 min",
    description:
      "Pranayama and seated stillness to reset the nervous system. Accessible, grounding, and transformative.",
    level: "Beginner friendly",
  },
];

export default function Sessions() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36 px-6 md:px-14 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-baseline justify-between mb-20">
          <ClipReveal direction="up">
            <h2 className="font-serif font-light text-4xl md:text-5xl text-foreground">
              Sessions
            </h2>
          </ClipReveal>
          <ClipReveal direction="up" delay={0.1}>
            <p className="hidden md:block font-sans text-[10px] tracking-[0.28em] text-foreground/30">
              What We Offer
            </p>
          </ClipReveal>
        </div>

        {/* Session rows */}
        <div>
          {sessions.map((session, i) => {
            const isHovered = hovered === session.num;
            return (
              <ClipReveal key={session.num} direction="up" delay={i * 0.08}>
                <motion.div
                  onHoverStart={() => setHovered(session.num)}
                  onHoverEnd={() => setHovered(null)}
                  className="group border-t border-foreground/8 py-10 md:py-12"
                >
                  <div className="grid grid-cols-12 gap-4 items-start">

                    {/* Number */}
                    <div className="col-span-2 md:col-span-1 pt-1">
                      <span className="font-sans text-[10px] tracking-[0.15em] text-foreground/20">
                        {session.num}
                      </span>
                    </div>

                    {/* Title + meta */}
                    <div className="col-span-10 md:col-span-4">
                      <h3 className="font-serif font-light text-2xl md:text-3xl text-foreground leading-tight mb-2">
                        {session.title}
                      </h3>
                      <p className="font-sans text-[10px] tracking-[0.18em] text-foreground/30">
                        {session.style} &nbsp;·&nbsp; {session.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="col-span-12 md:col-span-5 md:col-start-7 md:pt-1">
                      <p className="font-sans text-[13px] text-foreground/45 leading-7 mb-4">
                        {session.description}
                      </p>
                      <span className="font-sans text-[9px] tracking-[0.18em] uppercase border border-foreground/12 text-foreground/30 px-2.5 py-1">
                        {session.level}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex col-span-1 justify-end pt-1">
                      <motion.span
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -4 }}
                        transition={{ duration: 0.2 }}
                        className="font-sans text-sm text-foreground/40"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </ClipReveal>
            );
          })}
          <div className="border-t border-foreground/8" />
        </div>

        {/* CTA */}
        <ClipReveal direction="up" delay={0.25}>
          <div className="mt-14">
            <Link
              href="/book"
              className="group font-sans text-[11px] tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors duration-300 flex items-center gap-2 w-fit"
            >
              Book any session
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </ClipReveal>

      </div>
    </section>
  );
}
