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
    <div className="min-h-screen bg-background pt-36 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start">
          {/* Left: text */}
          <ScrollReveal direction="left">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-primary mb-5">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-8 leading-tight">
              Let&apos;s
              <br />
              Connect
            </h1>
            <p className="font-sans text-accent/70 leading-8 mb-8 max-w-sm text-base">
              Have a question about a session, need to reschedule, or just want
              to say hello? Siren Holistics reads every message personally and will get
              back to you within 24 hours.
            </p>
            <p className="font-sans text-accent/70 leading-8 mb-12 max-w-sm text-base">
              If you&apos;re new to yoga and unsure which session is right for
              you, feel free to reach out — she&apos;d love to help you find
              your fit.
            </p>

            {/* Email */}
            <div className="mb-10">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-2">
                Email
              </p>
              <p className="font-sans text-sm text-accent/70">
                hello@sirenholistics.com
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
                Follow Along
              </p>
              <div className="flex gap-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-accent/40 hover:text-primary transition-colors duration-300"
                  >
                    <Icon size={20} />
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
