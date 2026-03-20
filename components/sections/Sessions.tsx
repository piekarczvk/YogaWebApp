"use client";

import { useState } from "react";
import { Sun, Moon, Wind, ArrowUpRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import ClipReveal from "@/components/ui/ClipReveal";
import Link from "next/link";

interface Session {
  num: string;
  icon: LucideIcon;
  title: string;
  style: string;
  duration: string;
  description: string;
  level: string;
}

const sessions: Session[] = [
  {
    num: "01",
    icon: Sun,
    title: "Morning Flow",
    style: "Vinyasa",
    duration: "60 min",
    description:
      "Energising breath-led movement to begin your day grounded and clear. Transitions are mindful, the pace is yours.",
    level: "All levels",
  },
  {
    num: "02",
    icon: Moon,
    title: "Deep Stretch",
    style: "Yin",
    duration: "45 min",
    description:
      "Long passive holds that release the deep connective tissue. A quiet practice in surrender and listening inward.",
    level: "All levels",
  },
  {
    num: "03",
    icon: Wind,
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
    <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-soft/20">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16">
          <ClipReveal direction="up">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Sessions
            </h2>
          </ClipReveal>
          <ClipReveal direction="up" delay={0.1}>
            <p className="hidden md:block font-sans text-xs tracking-[0.22em] uppercase text-primary">
              What We Offer
            </p>
          </ClipReveal>
        </div>

        {/* Session rows */}
        <div>
          {sessions.map((session, i) => {
            const Icon = session.icon;
            const isHovered = hovered === session.num;
            return (
              <ClipReveal key={session.num} direction="up" delay={i * 0.1}>
                <motion.div
                  onHoverStart={() => setHovered(session.num)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{ backgroundColor: isHovered ? "rgba(232,221,208,0.35)" : "transparent" }}
                  transition={{ duration: 0.3 }}
                  className="group border-t border-foreground/10 py-8 md:py-10"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">

                    {/* Number */}
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-serif text-3xl md:text-4xl text-primary/25 select-none">
                        {session.num}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="hidden md:flex col-span-1 justify-center">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-primary/60"
                      />
                    </div>

                    {/* Title + meta */}
                    <div className="col-span-8 md:col-span-4">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-1">
                        {session.title}
                      </h3>
                      <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-primary/70">
                        {session.style} · {session.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="col-span-12 md:col-span-5 md:col-start-8">
                      <p className="font-sans text-sm text-accent/65 leading-6 mb-3">
                        {session.description}
                      </p>
                      <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-soft border border-soft/60 px-2 py-1">
                        {session.level}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex col-span-1 justify-end">
                      <motion.div
                        animate={{
                          x: isHovered ? 0 : -4,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={18} className="text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </ClipReveal>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-foreground/10" />
        </div>

        {/* CTA */}
        <ClipReveal direction="up" delay={0.3}>
          <div className="mt-12">
            <Link
              href="/book"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase border border-foreground/30 text-foreground/70 hover:border-primary hover:text-primary px-6 py-3.5 transition-colors duration-300"
            >
              Book Any Session
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </ClipReveal>

      </div>
    </section>
  );
}
