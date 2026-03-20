import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function DonationCTA() {
  return (
    <section className="py-36 px-6 bg-foreground text-soft text-center">
      <ScrollReveal>
        <p className="font-sans text-xs tracking-[0.28em] uppercase text-primary mb-8">
          Accessible for Everyone
        </p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-soft mb-8 leading-tight">
          Free to Attend
        </h2>
        <p className="font-sans text-soft/60 text-lg max-w-md mx-auto mb-3 leading-relaxed">
          A $5 suggested donation helps sustain this practice and keeps it open
          to all.
        </p>
        <p className="font-sans text-soft/35 text-sm mb-14">
          No payment required. Give what feels right, when it feels right.
        </p>
        <Button href="/book" variant="primary">
          Book Your Session
        </Button>
      </ScrollReveal>
    </section>
  );
}
