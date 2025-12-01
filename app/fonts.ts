import { Manrope, Pacifico, Satisfy, Montserrat, Playfair_Display_SC } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const playfair = Playfair_Display_SC({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"] 
});