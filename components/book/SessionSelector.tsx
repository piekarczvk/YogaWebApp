"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Wind } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SessionType {
  id: string;
  icon: LucideIcon;
  title: string;
  style: string;
  duration: string;
  description: string;
}

const sessionTypes: SessionType[] = [
  {
    id: "morning-flow",
    icon: Sun,
    title: "Morning Flow",
    style: "Vinyasa",
    duration: "60 min",
    description: "Energising breath-led movement to start your day.",
  },
  {
    id: "deep-stretch",
    icon: Moon,
    title: "Deep Stretch",
    style: "Yin",
    duration: "45 min",
    description: "Long passive holds to release deep tension.",
  },
  {
    id: "breathwork",
    icon: Wind,
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
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent/60 mb-5">
        Step 1 — Choose Your Session
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sessionTypes.map((s) => {
          const Icon = s.icon;
          const isSelected = selected === s.id;
          return (
            <motion.button
              key={s.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(s.id)}
              className={clsx(
                "text-left p-6 border transition-colors duration-300 cursor-pointer",
                isSelected
                  ? "border-2 border-primary bg-primary/8"
                  : "border border-soft bg-soft/30 hover:border-primary/50"
              )}
            >
              <Icon
                className={clsx(
                  "w-6 h-6 mb-4",
                  isSelected ? "text-primary" : "text-accent/50"
                )}
                strokeWidth={1.5}
              />
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-accent/60 mb-1">
                {s.style} · {s.duration}
              </p>
              <h3
                className={clsx(
                  "font-serif text-xl mb-2",
                  isSelected ? "text-foreground" : "text-foreground/80"
                )}
              >
                {s.title}
              </h3>
              <p className="font-sans text-xs text-accent/60 leading-5">
                {s.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
