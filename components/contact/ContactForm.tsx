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
      <div className="py-12 text-center border border-primary/30 bg-primary/5">
        <p className="font-serif text-2xl text-foreground mb-3">
          Message received.
        </p>
        <p className="font-sans text-sm text-accent/70">
          Siren Holistics will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block font-sans text-xs tracking-[0.12em] uppercase text-accent/60 mb-2">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-transparent border-b border-soft pb-2.5 font-sans text-sm text-foreground placeholder-accent/30 focus:outline-none focus:border-primary transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block font-sans text-xs tracking-[0.12em] uppercase text-accent/60 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-transparent border-b border-soft pb-2.5 font-sans text-sm text-foreground placeholder-accent/30 focus:outline-none focus:border-primary transition-colors duration-300"
          />
        </div>
      </div>

      <div>
        <label className="block font-sans text-xs tracking-[0.12em] uppercase text-accent/60 mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          placeholder="Say hello, ask a question, share what you're looking for..."
          className="w-full bg-transparent border-b border-soft pb-2.5 font-sans text-sm text-foreground placeholder-accent/30 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
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
