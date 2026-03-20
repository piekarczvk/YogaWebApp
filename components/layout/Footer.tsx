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
    <footer className="bg-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">

          {/* Brand */}
          <div>
            <h3 className="font-serif font-light text-xl text-background/70 mb-5">
              Siren Holistics
            </h3>
            <p className="font-sans text-[12px] text-background/25 leading-7 max-w-xs">
              Private online yoga sessions. Find stillness, move with intention,
              and breathe with purpose — from wherever you are.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-background/20 mb-7">
              Navigate
            </p>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[12px] text-background/35 hover:text-background/60 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-background/20 mb-7">
              Connect
            </p>
            <div className="flex gap-5 mb-10">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-background/25 hover:text-background/50 transition-colors duration-300"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="font-sans text-[11px] text-background/20 leading-7">
              Free sessions &nbsp;·&nbsp; $5 suggested donation
              <br />
              No experience necessary
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/8 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-sans text-[10px] text-background/20">
            © {new Date().getFullYear()} Siren Holistics
          </p>
          <p className="font-sans text-[10px] text-background/15">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
