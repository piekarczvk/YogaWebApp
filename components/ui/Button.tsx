"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sans text-[11px] tracking-[0.18em] transition-all duration-300 select-none";

  const variants = {
    primary:
      "bg-foreground text-background px-8 py-4 hover:bg-foreground/80",
    outline:
      "border border-foreground/25 text-foreground/60 px-8 py-4 hover:border-foreground/60 hover:text-foreground",
    ghost:
      "text-foreground/40 hover:text-foreground px-0 py-0 underline-offset-4 hover:underline",
  };

  const classes = clsx(base, variants[variant], className, {
    "opacity-30 cursor-not-allowed": disabled,
  });

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
