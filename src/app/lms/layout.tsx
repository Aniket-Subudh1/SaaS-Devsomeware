import { Metadata } from "next";
import { generateMetadata } from "@/utils";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export const metadata: Metadata = generateMetadata({
    title: "White-Label LMS Platform - DevSomeware Learning Management System",
    description: "Launch your own branded learning management system with DevSomeware's white-label LMS solution. Features include live streaming, course management, assignments, testing, analytics, and complete customization for educational institutions and businesses.",
    keywords: [
        "white-label LMS",
        "learning management system",
        "custom LMS development",
        "branded LMS solution",
        "educational technology platform",
        "online learning platform",
        "course management system",
        "e-learning solution",
        
        "LMS with live streaming",
        "interactive coding labs",
        "DRM protected videos",
        "multi-instructor platform",
        "cohort-based courses",
        "online testing platform",
        "educational analytics",
        "marketing automation LMS",
        
        "DevSomeware LMS",
        "enterprise LMS solution",
        "scalable learning platform",
        "custom education software",
        "institutional LMS",
        "business training platform",
        "corporate learning solution",
        "educational SaaS platform",
        
        "Next.js LMS",
        "React learning platform",
        "TypeScript education software",
        "MongoDB LMS backend",
        "AWS educational platform",
        "cloud-based LMS",
        "modern LMS architecture",
        "responsive learning platform"
    ],
    author: "DevSomeware Team",
    type: "website"
});

interface LMSLayoutProps {
    children: React.ReactNode;
}

export default function LMSLayout({ children }: LMSLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "DevSomeware White-Label LMS Platform",
                        "description": "Complete white-label learning management system with live streaming, course management, interactive labs, and comprehensive analytics for educational institutions",
                        "brand": {
                            "@type": "Brand",
                            "name": "DevSomeware"
                        },
                        "manufacturer": {
                            "@type": "Organization",
                            "name": "DevSomeware",
                            "url": "https://saas.devsomeware.com/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://saas.devsomeware.com/kk.png"
                            }
                        },
                        "category": "Educational Technology Software",
                        "url": "https://saas.devsomeware.com/lms",
                        "image": "https://saas.devsomeware.com/kk.png",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Self-Hosted LMS",
                                "description": "Complete control over your LMS platform with one-time setup cost",
                                "price": "49000",
                                "priceCurrency": "INR",
                                "priceValidUntil": "2025-12-31",
                                "availability": "https://schema.org/InStock",
                                "seller": {
                                    "@type": "Organization",
                                    "name": "DevSomeware"
                                }
                            },
                            {
                                "@type": "Offer",
                                "name": "Fully Managed LMS",
                                "description": "Revenue sharing model with complete platform management",
                                "priceSpecification": {
                                    "@type": "UnitPriceSpecification",
                                    "price": "Contact for pricing",
                                    "priceCurrency": "INR"
                                },
                                "availability": "https://schema.org/InStock",
                                "seller": {
                                    "@type": "Organization",
                                    "name": "DevSomeware"
                                }
                            }
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "LMS Features",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Live Streaming Classes",
                                        "description": "Built-in live class infrastructure supporting up to 10,000 students"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Interactive Coding Labs",
                                        "description": "5,000+ coding problems with real-time execution support"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "DRM Protected Videos",
                                        "description": "Widevine & Fairplay DRM with adaptive streaming"
                                    }
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "150",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Organization",
                                    "name": "Educational Institution"
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "reviewBody": "DevSomeware's LMS has transformed our online education delivery with excellent live streaming and course management features."
                            }
                        ],
                        "additionalProperty": [
                            {
                                "@type": "PropertyValue",
                                "name": "Supported Students",
                                "value": "10,000+ concurrent users"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Uptime",
                                "value": "99.9%"
                            },
                            {
                                "@type": "PropertyValue",
                                "name": "Deployment Options",
                                "value": "Self-hosted and Fully Managed"
                            }
                        ]
                    })
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://saas.devsomeware.com/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "LMS Platform",
                                "item": "https://saas.devsomeware.com/lms"
                            }
                        ]
                    })
                }}
            />

            {/* Open Graph Tags */}
            <meta property="og:title" content="White-Label LMS Platform - DevSomeware Learning Management System" />
            <meta property="og:description" content="Launch your branded learning platform with live streaming, course management, and comprehensive analytics. Perfect for educational institutions and businesses." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://saas.devsomeware.com/lms" />
            <meta property="og:image" content="https://saas.devsomeware.com/kk.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="DevSomeware" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="White-Label LMS Platform - DevSomeware" />
            <meta name="twitter:description" content="Complete learning management system with live streaming, interactive labs, and white-label customization." />
            <meta name="twitter:image" content="https://saas.devsomeware.com/kk.png" />
            <meta name="twitter:site" content="@DevSomeware" />
            <meta name="twitter:creator" content="@DevSomeware" />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href="https://saas.devsomeware.com/lms" />
            
            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Additional LMS-specific meta tags */}
            <meta name="application-name" content="DevSomeware LMS" />
            <meta name="apple-mobile-web-app-title" content="DevSomeware LMS" />
            <meta name="msapplication-TileColor" content="#8b5cf6" />
            <meta name="theme-color" content="#8b5cf6" />

            <Navbar />
            {children}
            <Footer />
        </>
    );
}