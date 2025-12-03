import type { Metadata } from "next";
import { safaris } from "@/app/data/safarisData"

interface Params {
  params: { id: string };
}

export function generateMetadata({ params }: Params): Metadata {
  const safari = safaris.find((s) => s.id === params.id);

  if (!safari) {
    return {
      title: "Safari Not Found – Curated by Ray",
      description: "The safari you are looking for does not exist.",
    };
  }

  return {
    title: `${safari.title} – Curated by Ray`,
    description: safari.description || safari.detailedDescription.slice(0, 160),
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
      title: `${safari.title} – Curated by Ray`,
      description: safari.description || safari.detailedDescription.slice(0, 160),
      url: `https://www.curatedbyray.com/explore/${safari.id}`,
      siteName: "Curated by Ray",
      images: [
        {
          url: safari.src,
          width: 1200,
          height: 630,
          alt: `${safari.title} – Curated by Ray`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${safari.title} – Curated by Ray`,
      description: safari.description || safari.detailedDescription.slice(0, 160),
      site: "@CuratedByRay",
      creator: "@CuratedByRay",
      images: [safari.src],
    },
  };
}
