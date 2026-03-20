import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const credentials = ["200hr RYT", "Hatha", "Vinyasa", "Yin", "Breathwork"];

export default function About() {
  return (
    <section className="py-28 px-6 bg-soft/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image column */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80"
                  alt="Siren Holistics yoga instructor in a meditative pose"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Ghost border offset */}
              <div className="absolute -bottom-5 -right-5 w-full max-w-md mx-auto aspect-[3/4] border border-primary/40 -z-10 hidden md:block" />
            </div>
          </ScrollReveal>

          {/* Text column */}
          <ScrollReveal direction="right" delay={0.1}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-primary mb-5">
              Meet Your Teacher
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 leading-tight">
              Siren Holistics
            </h2>
            <p className="font-sans text-accent/80 leading-8 mb-5 text-base">
              Siren Holistics has been practicing yoga for over fifteen years and teaching
              for eight. The approach is rooted in the belief that yoga is a
              deeply personal practice — one that meets you exactly where you
              are, breath by breath.
            </p>
            <p className="font-sans text-accent/70 leading-8 mb-10 text-base">
              With a background in Hatha, Vinyasa, and Yin, she weaves together
              movement, stillness, and breathwork to create sessions that are
              both grounding and transformative. Whether you are a complete
              beginner or returning to your mat, you will find space here.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-12">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="font-sans text-xs tracking-[0.1em] uppercase border border-primary/40 text-accent px-3 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>

            <Button href="/book" variant="outline">
              Book a Session
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
