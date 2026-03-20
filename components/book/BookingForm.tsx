"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function BookingForm() {
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
      <div className="py-14 border-t border-foreground/10">
        <p className="font-serif font-light text-3xl text-foreground mb-3">
          You&apos;re on the mat.
        </p>
        <p className="font-sans text-[12px] text-foreground/40">
          Check your inbox for a confirmation and your Zoom link.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-foreground/30 mb-6">
        Step 3 — Your Details
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className="block font-sans text-[10px] tracking-[0.15em] uppercase text-foreground/30 mb-3">
              Full Name
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
              Email Address
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
            Anything to share? (optional)
          </label>
          <input
            type="text"
            placeholder="Injuries, experience level, intentions..."
            className="w-full bg-transparent border-b border-foreground/12 pb-3 font-sans text-[13px] text-foreground placeholder-foreground/20 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
          />
        </div>

        <div>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Reserving..." : "Reserve My Spot"}
          </Button>
          <p className="font-sans text-[10px] text-foreground/25 mt-5">
            Free to attend &nbsp;·&nbsp; $5 suggested donation &nbsp;·&nbsp; No payment required to book
          </p>
        </div>
      </form>
    </div>
  );
}
