import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchContext";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curated by Ray – Luxury Boutique Travel Experiences",
  description:
    "Boutique travel experiences designed with intention, style, and heart from Africa’s wild treasures to the world’s hidden gems.",
  keywords: [
    "Curated by Ray",
    "luxury travel",
    "boutique travel experiences",
    "African safaris",
    "hidden gems travel",
    "custom tours",
    "exclusive travel",
  ],
  authors: [{ name: "Ray", url: "https://www.curatedbyray.com" }],
  creator: "Curated by Ray",
  publisher: "Curated by Ray",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Curated by Ray – Thoughtfully Curated Travel Experiences",
    description:
      "Boutique travel experiences designed with intention, style, and heart from Africa’s wild treasures to the world’s hidden gems.",
    url: "https://www.curatedbyray.com",
    siteName: "Curated by Ray",
    images: [
      {
        url: "https://www.curatedbyray.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Curated by Ray – Luxury Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated by Ray – Thoughtfully Curated Travel Experiences",
    description:
      "Discover exclusive, handpicked travel experiences. From Africa's wild treasures to the world's hidden gems, explore journeys designed with style, heart, and intention.",
    site: "@CuratedByRay",
    creator: "@CuratedByRay",
    images: ["https://www.curatedbyray.com/og.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
