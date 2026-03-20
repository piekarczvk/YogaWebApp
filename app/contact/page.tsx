import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/contact/ContactForm";
import { Instagram, Youtube, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-36 pb-28 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start">

          {/* Left: text */}
          <ScrollReveal direction="left">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/30 mb-6">
              Get in Touch
            </p>
            <h1 className="font-serif font-light text-5xl md:text-6xl text-foreground mb-10 leading-[0.9]">
              Let&apos;s
              <br />
              <span className="italic">Connect</span>
            </h1>
            <p className="font-sans text-[13px] text-foreground/45 leading-8 mb-6 max-w-sm">
              Have a question about a session, need to reschedule, or just want
              to say hello? Siren Holistics reads every message personally and will get
              back to you within 24 hours.
            </p>
            <p className="font-sans text-[13px] text-foreground/35 leading-8 mb-14 max-w-sm">
              If you&apos;re new to yoga and unsure which session is right for
              you, feel free to reach out — she&apos;d love to help you find
              your fit.
            </p>

            {/* Email */}
            <div className="mb-10">
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-foreground/25 mb-3">
                Email
              </p>
              <p className="font-sans text-[13px] text-foreground/50">
                hello@sirenholistics.com
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-foreground/25 mb-5">
                Follow Along
              </p>
              <div className="flex gap-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-foreground/25 hover:text-foreground/50 transition-colors duration-300"
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal direction="right" delay={0.15}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
