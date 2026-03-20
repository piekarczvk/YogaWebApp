import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Philosophy() {
  return (
    <section className="py-28 px-6 bg-background">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-px bg-primary mx-auto mb-12" />
          <p className="font-serif text-2xl md:text-3xl italic text-accent leading-relaxed">
            &ldquo;Yoga is not about touching your toes.
            <br className="hidden md:block" /> It is what you learn on the way
            down.&rdquo;
          </p>
          <p className="mt-8 font-sans text-xs tracking-[0.25em] uppercase text-primary">
            — Jigar Gor
          </p>
          <div className="w-14 h-px bg-primary mx-auto mt-12" />
        </div>
      </ScrollReveal>
    </section>
  );
}
