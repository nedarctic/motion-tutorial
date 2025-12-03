import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Curated by Ray",
  description:
    "Start your personalized Kenyan journey with Curated by Ray. Reach out to plan intimate, handpicked experiences that become lifelong memories.",
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
    title: "Contact – Curated by Ray",
    description:
      "Whether you have a dream trip in mind or just want to explore ideas, get in touch to start your bespoke Kenyan adventure.",
    url: "https://www.curatedbyray.com/contact",
    siteName: "Curated by Ray",
    images: [
      {
        url: "/contact-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Kenya landscape – start your journey with Curated by Ray",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Curated by Ray",
    description:
      "Connect with Curated by Ray to plan your intimate, authentic Kenyan experiences.",
    site: "@CuratedByRay",
    creator: "@CuratedByRay",
    images: ["/contact-hero.jpeg"],
  },
};
