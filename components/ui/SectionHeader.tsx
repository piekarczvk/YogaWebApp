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
            "font-sans text-[10px] tracking-[0.25em] uppercase mb-5",
            light ? "text-background/30" : "text-foreground/30"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-serif font-light text-4xl md:text-5xl leading-tight",
          light ? "text-background/80" : "text-foreground"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={clsx(
            "font-sans text-[13px] mt-6 leading-8",
            centered && "max-w-md mx-auto",
            light ? "text-background/35" : "text-foreground/45"
          )}
        >
          {subheading}
        </p>
      )}
    </ScrollReveal>
  );
}
