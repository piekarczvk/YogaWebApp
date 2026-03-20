"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/ClipReveal";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
        alt="Yoga practice"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/60 via-foreground/30 to-foreground/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

      {/* Content — left aligned */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-14 lg:px-20">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-sans text-[10px] md:text-xs tracking-[0.32em] uppercase text-primary mb-6 md:mb-8"
        >
          Private Online Yoga Sessions
        </motion.p>

        {/* Main display headline */}
        <div className="mb-6 md:mb-8">
          <TextReveal delay={0.35}>
            <h1 className="font-serif text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.82] tracking-[-0.02em] text-soft">
              FIND
            </h1>
          </TextReveal>
          <TextReveal delay={0.48}>
            <h1 className="font-serif text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.82] tracking-[-0.02em] text-soft italic ml-[6vw] md:ml-[8vw]">
              YOUR
            </h1>
          </TextReveal>
          <TextReveal delay={0.61}>
            <h1 className="font-serif text-[11vw] md:text-[9vw] lg:text-[7.5vw] leading-[1] tracking-[-0.01em] text-soft/70">
              Stillness
            </h1>
          </TextReveal>
        </div>

        {/* Thin gold rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="w-20 h-px bg-primary mb-7"
        />

        {/* Meta row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-0 md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="font-sans text-soft/70 text-sm leading-6">
              Hatha · Vinyasa · Yin with Siren Holistics
            </p>
            <p className="font-sans text-soft/45 text-xs tracking-wide mt-1">
              Free to attend &nbsp;·&nbsp; $5 suggested donation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link
              href="/book"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase border border-soft/40 text-soft hover:border-primary hover:text-primary px-6 py-3.5 transition-colors duration-400"
            >
              Reserve Your Space
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 md:right-14 lg:right-20 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-soft/50 to-transparent"
        />
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-soft/35 [writing-mode:vertical-rl]">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
