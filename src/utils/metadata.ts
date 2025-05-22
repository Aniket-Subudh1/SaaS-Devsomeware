import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `SaaS DevSomeware - Enterprise SaaS Development Platform & Cloud Infrastructure`,
    description = `SaaS DevSomeware is a comprehensive development platform designed for building scalable SaaS applications. Access enterprise-grade tools, cloud infrastructure, and development frameworks to accelerate your SaaS journey from MVP to enterprise scale.`,
    icons = [
        {
            rel: "icon",
            url: "/kk.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/kk.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        "SaaS development platform",
        "cloud infrastructure",
        "enterprise development tools",
        "scalable SaaS solutions",
        "DevSomeware platform",
        "SaaS architecture",
        "cloud-native development",
        "microservices framework",
        "API development tools",
        "SaaS deployment automation",
        "enterprise software development",
        "multi-tenant architecture",
        "SaaS security framework",
        "cloud database solutions"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://saas-devsomeware.vercel.app");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};