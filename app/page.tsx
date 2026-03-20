import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import About from "@/components/sections/About";
import Sessions from "@/components/sections/Sessions";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import DonationCTA from "@/components/sections/DonationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <About />
      <Sessions />
      <HowItWorks />
      <Testimonials />
      <DonationCTA />
    </>
  );
}
