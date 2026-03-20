"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Book a Session", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-foreground/8 py-5"
          : "bg-transparent py-7"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "font-serif font-light text-base tracking-widest transition-colors duration-300",
            scrolled ? "text-foreground" : "text-background"
          )}
        >
          Siren Holistics
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "font-sans text-[11px] tracking-[0.12em] transition-colors duration-300 hover:opacity-60",
                  scrolled ? "text-foreground/70" : "text-background/70"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle — three thin lines */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={clsx(
            "md:hidden flex flex-col gap-[5px] p-1",
            scrolled ? "text-foreground" : "text-background"
          )}
        >
          <span
            className={clsx(
              "block w-5 h-px bg-current transition-all duration-300",
              open && "translate-y-[6px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "block w-5 h-px bg-current transition-all duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block w-5 h-px bg-current transition-all duration-300",
              open && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-t border-foreground/8"
          >
            <ul className="flex flex-col px-6 py-8 gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-sans text-sm tracking-[0.1em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
