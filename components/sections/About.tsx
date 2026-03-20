import Image from "next/image";
import Link from "next/link";
import ClipReveal from "@/components/ui/ClipReveal";
import { TextReveal } from "@/components/ui/ClipReveal";

const credentials = ["200hr RYT", "Hatha", "Vinyasa", "Yin", "Breathwork"];

export default function About() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-14 lg:px-20 bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <ClipReveal direction="up">
          <p className="font-sans text-[10px] tracking-[0.3em] text-foreground/35 mb-16 md:mb-20">
            Meet Your Teacher
          </p>
        </ClipReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Image */}
          <ClipReveal direction="left">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80"
                alt="Siren Holistics yoga instructor"
                fill
                className="object-cover object-top"
              />
            </div>
          </ClipReveal>

          {/* Text */}
          <div className="md:pt-16">
            <TextReveal delay={0.1}>
              <h2 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-tight mb-10">
                Siren<br />
                <span className="italic">Holistics</span>
              </h2>
            </TextReveal>

            <ClipReveal direction="up" delay={0.2}>
              <p className="font-sans text-[13px] leading-8 text-foreground/55 mb-5 max-w-sm">
                Fifteen years of practice. Eight years of teaching. An approach
                rooted in the belief that yoga is a deeply personal practice —
                one that meets you exactly where you are, breath by breath.
              </p>
              <p className="font-sans text-[13px] leading-8 text-foreground/40 mb-12 max-w-sm">
                With a background in Hatha, Vinyasa, and Yin, each session weaves
                movement, stillness, and breathwork to create something both
                grounding and transformative.
              </p>
            </ClipReveal>

            {/* Credentials */}
            <ClipReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-2 mb-12">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="font-sans text-[9px] tracking-[0.18em] uppercase border border-foreground/15 text-foreground/40 px-3 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </ClipReveal>

            <ClipReveal direction="up" delay={0.35}>
              <Link
                href="/book"
                className="group font-sans text-[11px] tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors duration-300 flex items-center gap-2 w-fit"
              >
                Book a Session
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </ClipReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
