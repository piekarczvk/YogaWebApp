"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <div className="py-12 border-t border-foreground/10">
        <p className="font-serif font-light text-2xl text-foreground mb-3">
          Message received.
        </p>
        <p className="font-sans text-[12px] text-foreground/40">
          Siren Holistics will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block font-sans text-[10px] tracking-[0.15em] uppercase text-foreground/30 mb-3">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-transparent border-b border-foreground/12 pb-3 font-sans text-[13px] text-foreground placeholder-foreground/20 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block font-sans text-[10px] tracking-[0.15em] uppercase text-foreground/30 mb-3">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-transparent border-b border-foreground/12 pb-3 font-sans text-[13px] text-foreground placeholder-foreground/20 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
          />
        </div>
      </div>

      <div>
        <label className="block font-sans text-[10px] tracking-[0.15em] uppercase text-foreground/30 mb-3">
          Message
        </label>
        <textarea
          required
          rows={5}
          placeholder="Say hello, ask a question, share what you're looking for..."
          className="w-full bg-transparent border-b border-foreground/12 pb-3 font-sans text-[13px] text-foreground placeholder-foreground/20 focus:outline-none focus:border-foreground/40 transition-colors duration-300 resize-none"
        />
      </div>

      <div>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
