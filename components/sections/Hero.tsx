"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/ClipReveal";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
        alt="Yoga practice"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Very light vignette — image breathes */}
      <div className="absolute inset-0 bg-foreground/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-14 md:pb-20 px-6 md:px-14 lg:px-20">

        {/* Top eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-sans text-[10px] tracking-[0.3em] text-background/55 mb-8"
        >
          Siren Holistics &nbsp;—&nbsp; Private Online Yoga
        </motion.p>

        {/* Single large italic word */}
        <div className="mb-10">
          <TextReveal delay={0.35}>
            <h1 className="font-serif font-light italic text-[17vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] tracking-[-0.01em] text-background">
              stillness.
            </h1>
          </TextReveal>
        </div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="w-10 h-px bg-background/30 mb-8"
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-sans text-[11px] tracking-[0.15em] text-background/45"
          >
            Hatha &nbsp;·&nbsp; Vinyasa &nbsp;·&nbsp; Yin &nbsp;&nbsp;/&nbsp;&nbsp; Free to attend &nbsp;·&nbsp; $5 suggested donation
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
          >
            <Link
              href="/book"
              className="group font-sans text-[11px] tracking-[0.2em] text-background/70 hover:text-background transition-colors duration-300 flex items-center gap-2"
            >
              Book a session
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
