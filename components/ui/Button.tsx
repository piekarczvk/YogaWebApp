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
    "inline-flex items-center justify-center gap-2 text-sm tracking-[0.12em] uppercase font-sans font-medium transition-colors duration-300 px-8 py-4 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-primary text-background hover:bg-accent border border-primary hover:border-accent",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-background",
    ghost: "text-primary hover:text-accent underline-offset-4 hover:underline px-0 py-0",
  };

  const classes = clsx(base, variants[variant], className, {
    "opacity-40 cursor-not-allowed": disabled,
  });

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
