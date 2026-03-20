import ScrollReveal from "./ScrollReveal";
import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={clsx("mb-14", centered && "text-center")}>
      {eyebrow && (
        <p
          className={clsx(
            "text-xs tracking-[0.22em] uppercase font-sans font-medium mb-4",
            light ? "text-soft/60" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-serif text-4xl md:text-5xl leading-tight",
          light ? "text-soft" : "text-foreground"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={clsx(
            "font-sans text-lg mt-5 leading-relaxed",
            centered && "max-w-xl mx-auto",
            light ? "text-soft/60" : "text-accent/70"
          )}
        >
          {subheading}
        </p>
      )}
    </ScrollReveal>
  );
}
