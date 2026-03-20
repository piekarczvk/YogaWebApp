"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Variants } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
        alt="Peaceful yoga practice in soft natural light"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.p
          variants={item}
          className="font-sans text-xs tracking-[0.28em] uppercase text-primary mb-8"
        >
          Private Online Yoga Sessions
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-soft leading-[0.9] tracking-tight mb-4"
        >
          Find Your
        </motion.h1>

        <motion.h1
          variants={item}
          className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-soft leading-[0.9] tracking-tight italic mb-10"
        >
          Stillness
        </motion.h1>

        <motion.p
          variants={item}
          className="font-sans text-soft/70 text-base md:text-lg max-w-md leading-relaxed mb-12"
        >
          Hatha · Vinyasa · Yin with Siren Holistics
          <br />
          Free to attend — $5 suggested donation
        </motion.p>

        <motion.div variants={item}>
          <Button href="/book" variant="primary">
            Reserve Your Space
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-soft/50" />
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-soft/40">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
