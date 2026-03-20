import { TextReveal } from "@/components/ui/ClipReveal";
import ClipReveal from "@/components/ui/ClipReveal";

export default function Philosophy() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-14 lg:px-20 bg-background">
      <div className="max-w-5xl">
        <TextReveal>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-foreground leading-[1.2] tracking-tight">
            &ldquo;Yoga is not about touching your toes.
            It is what you learn on the way down.&rdquo;
          </p>
        </TextReveal>
        <ClipReveal direction="up" delay={0.3}>
          <div className="flex items-center gap-4 mt-10">
            <div className="w-8 h-px bg-primary" />
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary">
              Jigar Gor
            </p>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
