import Link from "next/link";
import { TextReveal } from "@/components/ui/ClipReveal";
import ClipReveal from "@/components/ui/ClipReveal";

export default function DonationCTA() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-14 lg:px-20 bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Large editorial statement */}
        <div className="mb-24">
          <TextReveal>
            <p className="font-serif font-light text-[19vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] tracking-tight text-background">
              Free.
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-serif font-light italic text-[10vw] md:text-[7.5vw] lg:text-[6vw] leading-[1] text-background/25">
              Always.
            </p>
          </TextReveal>
        </div>

        {/* Thin rule */}
        <div className="w-full h-px bg-background/8 mb-16" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <ClipReveal direction="up" delay={0.1}>
            <p className="font-sans text-[13px] text-background/35 max-w-xs leading-8">
              A $5 suggested donation sustains this practice and keeps it
              open to all. No payment required — give what feels right.
            </p>
          </ClipReveal>

          <ClipReveal direction="up" delay={0.2}>
            <Link
              href="/book"
              className="group font-sans text-[11px] tracking-[0.2em] text-background/40 hover:text-background transition-colors duration-300 flex items-center gap-2 shrink-0"
            >
              Book your session
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </ClipReveal>
        </div>

      </div>
    </section>
  );
}
