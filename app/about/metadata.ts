import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const title = "About Curated By Ray – Luxury Boutique Travel Experiences";
  const description =
    "Learn more about Curated By Ray, a boutique travel company dedicated to crafting seamless, personalized journeys across Africa and beyond.";

  return {
    title,
    description,
    keywords: [
      "Curated by Ray",
      "boutique travel",
      "luxury travel experiences",
      "African safaris",
      "custom tours",
      "exclusive travel",
      "about us",
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
      title,
      description,
      url: "https://www.curatedbyray.com/about",
      siteName: "Curated by Ray",
      images: [
        {
          url: "https://www.curatedbyray.com/og.jpg",
          width: 1200,
          height: 630,
          alt: "About Curated by Ray – Luxury Travel Experiences",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@CuratedByRay",
      creator: "@CuratedByRay",
      images: ["https://www.curatedbyray.com/og.jpg"],
    },
  };
};
