"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

const clips: Record<Direction, { hidden: string; visible: string }> = {
  up:    { hidden: "inset(100% 0 0% 0)",   visible: "inset(0% 0 0% 0)" },
  down:  { hidden: "inset(0% 0 100% 0)",   visible: "inset(0% 0 0% 0)" },
  left:  { hidden: "inset(0 100% 0 0%)",   visible: "inset(0 0% 0 0%)" },
  right: { hidden: "inset(0 0% 0 100%)",   visible: "inset(0 0% 0 0%)" },
};

interface ClipRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ClipReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  const clip = clips[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: reduced ? "none" : clip.hidden, opacity: reduced ? 0 : 1 }}
      animate={
        inView
          ? { clipPath: "inset(0 0 0 0)", opacity: 1 }
          : { clipPath: reduced ? "none" : clip.hidden, opacity: reduced ? 0 : 1 }
      }
      transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextReveal — each line slides up from behind a hidden overflow container.
 * Use this for individual headline lines.
 */
export function TextReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: reduced ? 0 : "110%", opacity: reduced ? 0 : 1 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: [0.76, 0, 0.24, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
