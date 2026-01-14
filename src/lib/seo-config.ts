import type { Metadata } from "next";

const siteConfig = {
    name: "Hiriketiya Surf with Mali",
    description: "Sri Lanka's premier surf school at Hiriketiya Beach. Expert surf lessons for beginners and intermediates with local pro Mali. Best surfing in Sri Lanka.",
    url: "https://hiriketiyasurfwithmali.com", // Placeholder - adjust if real domain exists
    ogImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=630&q=80",
    keywords: [
        "Surf Lessons Hiriketiya",
        "Best Surf School Sri Lanka",
        "Surfing Hiriketiya Beach",
        "Mali Surf Hiriketiya",
        "Beginner Surf Lessons Sri Lanka",
        "Intermediate Surf Coaching Hiriketiya",
        "Surfboard Rental Hiriketiya",
        "Visit Hiriketiya Surf",
        "Surf Trip Sri Lanka",
        "Hiriketiya Bay Surfing"
    ],
};

export const defaultMetadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: "Mali", url: siteConfig.url }],
    creator: "Mali",
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@HiriketiyaSurf",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};
