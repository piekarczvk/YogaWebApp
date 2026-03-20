import Link from "next/link";
import { TextReveal } from "@/components/ui/ClipReveal";
import ClipReveal from "@/components/ui/ClipReveal";
import { ArrowUpRight } from "lucide-react";

export default function DonationCTA() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-14 lg:px-20 bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Label row */}
        <ClipReveal direction="up">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-primary" />
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-primary">
              Accessible for Everyone
            </span>
          </div>
        </ClipReveal>

        {/* Giant "FREE" */}
        <div className="mb-4">
          <TextReveal>
            <p className="font-serif text-[22vw] md:text-[18vw] lg:text-[15vw] leading-[0.82] tracking-tight text-soft">
              FREE
            </p>
          </TextReveal>
          <TextReveal delay={0.12}>
            <p className="font-serif text-[12vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.9] tracking-tight text-soft/40 italic">
              to attend
            </p>
          </TextReveal>
        </div>

        {/* Thin rule */}
        <div className="w-full h-px bg-soft/10 my-12" />

        {/* Bottom row: text + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <ClipReveal direction="up" delay={0.15}>
            <p className="font-sans text-soft/50 text-base md:text-lg max-w-sm leading-8">
              A $5 suggested donation sustains this practice and keeps it
              open to all. No payment required — give what feels right.
            </p>
          </ClipReveal>

          <ClipReveal direction="up" delay={0.25}>
            <Link
              href="/book"
              className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase border border-soft/30 text-soft hover:border-primary hover:text-primary px-8 py-4 transition-colors duration-300 shrink-0"
            >
              Book Your Session
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </ClipReveal>
        </div>

      </div>
    </section>
  );
}
