"use client";

import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center border border-primary/30 bg-primary/5">
        <p className="font-serif text-3xl text-foreground mb-3">
          You&apos;re on the mat.
        </p>
        <p className="font-sans text-sm text-accent/70">
          Check your inbox for a confirmation and your Zoom link.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent/60 mb-5">
        Step 3 — Your Details
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className="block font-sans text-xs tracking-[0.12em] uppercase text-accent/60 mb-2">
              Full Name
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
              Email Address
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
            Anything to share? (optional)
          </label>
          <input
            type="text"
            placeholder="Injuries, experience level, intentions..."
            className="w-full bg-transparent border-b border-soft pb-2.5 font-sans text-sm text-foreground placeholder-accent/30 focus:outline-none focus:border-primary transition-colors duration-300"
          />
        </div>

        <div>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Reserving..." : "Reserve My Spot"}
          </Button>
          <p className="font-sans text-xs text-accent/50 mt-5 italic">
            Free to attend · $5 suggested donation · No payment required to
            book
          </p>
        </div>
      </form>
    </div>
  );
}
