import { TextReveal } from "@/components/ui/ClipReveal";
import ClipReveal from "@/components/ui/ClipReveal";

export default function Philosophy() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-14 lg:px-20 bg-background">
      <div className="max-w-4xl">
        <TextReveal>
          <p className="font-serif font-light italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.25] tracking-tight">
            &ldquo;Yoga is not about touching your toes.
            It is what you learn on the way down.&rdquo;
          </p>
        </TextReveal>
        <ClipReveal direction="up" delay={0.3}>
          <p className="font-sans text-[10px] tracking-[0.25em] text-foreground/30 mt-10">
            Jigar Gor
          </p>
        </ClipReveal>
      </div>
    </section>
  );
}
