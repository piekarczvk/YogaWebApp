import { Cormorant, DM_Sans } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
