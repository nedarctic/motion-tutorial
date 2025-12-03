// app/gallery/metadata.ts
import type { Metadata } from "next";
import { galleryImages } from "@/app/data/galleryImages"

export const metadata: Metadata = {
  title: "Gallery – Curated by Ray",
  description:
    "A visual journey through Kenya — from wildlife to landscapes and cultural moments. Every photograph tells a story.",
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
    title: "Gallery – Curated by Ray",
    description:
      "Explore intimate, handpicked Kenyan moments through our curated photo gallery.",
    url: "https://www.curatedbyray.com/gallery",
    siteName: "Curated by Ray",
    images: galleryImages.slice(0, 4).map((img) => ({
      url: img.src,
      width: 1200,
      height: 630,
      alt: img.alt,
    })),
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery – Curated by Ray",
    description:
      "Discover Kenya’s soul in frames — wildlife, landscapes, culture, and curated experiences.",
    site: "@CuratedByRay",
    creator: "@CuratedByRay",
    images: galleryImages.slice(0, 4).map((img) => img.src),
  },
};
