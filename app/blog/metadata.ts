import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Curated by Ray",
  description: "Explore insider stories, travel secrets, and inspiration from Kenya and beyond. Curated tales that bring Africa’s wild heart to your screen.",
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
    title: "Blog – Curated by Ray",
    description: "Dive into authentic travel stories, local experiences, and tips from Africa’s wildest and most soulful destinations.",
    url: "https://www.curatedbyray.com/blog",
    siteName: "Curated by Ray",
    images: [
      {
        url: "/hero-blog.jpeg",
        width: 1200,
        height: 630,
        alt: "Elephants on the savanna at sunset",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Curated by Ray",
    description: "Travel insights, stories, and inspiration from Kenya and beyond. Discover the heart of African adventures.",
    site: "@CuratedByRay",
    creator: "@CuratedByRay",
    images: ["/hero-blog.jpeg"],
  },
};
