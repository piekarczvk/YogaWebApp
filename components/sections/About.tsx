import Image from "next/image";
import Link from "next/link";
import ClipReveal from "@/components/ui/ClipReveal";
import { TextReveal } from "@/components/ui/ClipReveal";
import { ArrowUpRight } from "lucide-react";

const credentials = ["200hr RYT", "Hatha", "Vinyasa", "Yin", "Breathwork"];

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-14 lg:px-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-primary">
            Meet Your Teacher
          </span>
          <div className="flex-1 h-px bg-soft" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-start">

          {/* Image — takes cols 1–7 */}
          <ClipReveal direction="left" className="md:col-span-7 relative">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80"
                alt="Siren Holistics yoga instructor"
                fill
                className="object-cover object-top"
              />
              {/* Inner overlay at bottom for text readability on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent md:hidden" />
            </div>
          </ClipReveal>

          {/* Text block — cols 6–12 (overlaps image on desktop) */}
          <div className="md:col-span-6 md:-ml-16 md:mt-16 relative z-10 bg-background/95 backdrop-blur-sm p-8 md:p-12 md:shadow-2xl">

            {/* Ghost number */}
            <span className="absolute -top-8 -left-4 font-serif text-[8rem] leading-none text-soft/60 select-none pointer-events-none hidden md:block">
              01
            </span>

            <TextReveal delay={0.1}>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.88] tracking-tight mb-8">
                Siren<br />
                <span className="italic text-accent">Holistics</span>
              </h2>
            </TextReveal>

            <ClipReveal direction="up" delay={0.25}>
              <p className="font-sans text-accent/80 leading-8 mb-5 text-[15px]">
                Fifteen years of practice. Eight years of teaching. An approach
                rooted in the belief that yoga is a deeply personal practice —
                one that meets you exactly where you are, breath by breath.
              </p>
              <p className="font-sans text-accent/60 leading-8 mb-10 text-[15px]">
                With a background in Hatha, Vinyasa, and Yin, each session weaves
                movement, stillness, and breathwork to create something both
                grounding and transformative.
              </p>
            </ClipReveal>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-10">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="font-sans text-[10px] tracking-[0.15em] uppercase border border-primary/30 text-accent/70 px-3 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>

            <Link
              href="/book"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase border border-foreground text-foreground hover:border-primary hover:text-primary px-6 py-3.5 transition-colors duration-300"
            >
              Book a Session
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
