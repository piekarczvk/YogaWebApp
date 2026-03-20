"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface SessionType {
  id: string;
  title: string;
  style: string;
  duration: string;
  description: string;
}

const sessionTypes: SessionType[] = [
  {
    id: "morning-flow",
    title: "Morning Flow",
    style: "Vinyasa",
    duration: "60 min",
    description: "Energising breath-led movement to start your day.",
  },
  {
    id: "deep-stretch",
    title: "Deep Stretch",
    style: "Yin",
    duration: "45 min",
    description: "Long passive holds to release deep tension.",
  },
  {
    id: "breathwork",
    title: "Breathwork & Meditation",
    style: "Hatha",
    duration: "30 min",
    description: "Pranayama and seated stillness to calm the mind.",
  },
];

interface SessionSelectorProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function SessionSelector({
  selected,
  onSelect,
}: SessionSelectorProps) {
  return (
    <div className="mb-12">
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-foreground/30 mb-6">
        Step 1 — Choose Your Session
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {sessionTypes.map((s) => {
          const isSelected = selected === s.id;
          return (
            <motion.button
              key={s.id}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(s.id)}
              className={clsx(
                "text-left p-6 border transition-colors duration-300",
                isSelected
                  ? "border-foreground/60 bg-foreground/4"
                  : "border-foreground/10 hover:border-foreground/25"
              )}
            >
              <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-foreground/30 mb-3">
                {s.style} &nbsp;·&nbsp; {s.duration}
              </p>
              <h3
                className={clsx(
                  "font-serif font-light text-xl mb-3",
                  isSelected ? "text-foreground" : "text-foreground/70"
                )}
              >
                {s.title}
              </h3>
              <p className="font-sans text-[11px] text-foreground/35 leading-6">
                {s.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
