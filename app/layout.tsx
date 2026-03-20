import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siren Holistics",
  description:
    "Find your stillness. Private online yoga sessions with Siren Holistics — Hatha, Vinyasa & Yin. Free to attend, $5 suggested donation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
