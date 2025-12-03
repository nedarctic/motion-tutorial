import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Curated by Ray – Explore Safaris",
    description:
      "Discover and plan your next unforgettable Kenyan safari adventure. Filter and explore handpicked experiences across Africa.",
    keywords: [
      "Curated by Ray",
      "Kenya safaris",
      "luxury travel",
      "boutique travel",
      "African adventures",
      "custom tours",
      "wildlife experiences",
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
      title: "Curated by Ray – Explore Safaris",
      description:
        "Handpicked Kenyan safaris designed for luxury and adventure. Explore and plan your next unforgettable journey.",
      url: "https://www.curatedbyray.com/explore",
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
      title: "Curated by Ray – Explore Safaris",
      description:
        "Handpicked Kenyan safaris designed for luxury and adventure. Explore and plan your next unforgettable journey.",
      site: "@CuratedByRay",
      creator: "@CuratedByRay",
      images: ["https://www.curatedbyray.com/og.jpg"],
    },
  };
}
