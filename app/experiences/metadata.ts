import type { Metadata } from "next";
import { experiences } from "@/app/data/experiencesData";

export const generateMetadata = (): Metadata => {
    return {
        title: "Curated Experiences – Curated by Ray",
        description:
            "Discover handpicked, intimate Kenyan experiences. Every moment is intentionally crafted, from adventures to cultural encounters.",
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
            title: "Curated Experiences – Curated by Ray",
            description:
                "Explore curated Kenyan experiences — intimate, authentic, and unforgettable moments.",
            url: "https://www.curatedbyray.com/experiences",
            siteName: "Curated by Ray",
            images: experiences.slice(0, 3).map((exp) => ({
                url: exp.src,
                width: 1200,
                height: 630,
                alt: exp.title,
            })),
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Curated Experiences – Curated by Ray",
            description:
                "Explore curated Kenyan experiences — intimate, authentic, and unforgettable moments.",
            site: "@CuratedByRay",
            creator: "@CuratedByRay",
            images: experiences.slice(0, 3).map((exp) => exp.src),
        },
    };
};