import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Book a Session", href: "/book" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-soft">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-soft mb-4">Siren Holistics</h3>
            <p className="font-sans text-soft/50 text-sm leading-relaxed max-w-xs">
              Private online yoga sessions. Find stillness, move with intention,
              and breathe with purpose — from wherever you are.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-6">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-soft/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-6">
              Connect
            </p>
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-soft/50 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="font-sans text-soft/40 text-sm mt-8 leading-relaxed">
              Free sessions · $5 suggested donation
              <br />
              No experience necessary
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-soft/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-soft/30">
            © {new Date().getFullYear()} Siren Holistics. All rights reserved.
          </p>
          <p className="font-sans text-xs text-soft/30">
            Crafted with care &amp; intention
          </p>
        </div>
      </div>
    </footer>
  );
}
