import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { Metadata, Viewport } from "next";

// Global SEO Metadata
export const metadata: Metadata = generateMetadata({
    title: "SaaS DevSomeware - Enterprise SaaS Development Platform & Cloud Infrastructure",
    description: "Transform your ideas into scalable SaaS applications with SaaS DevSomeware. Expert development platform offering enterprise-grade tools, cloud infrastructure, and modern frameworks to accelerate your SaaS journey from MVP to enterprise scale.",
    keywords: [
        // Primary Brand Keywords
        "SaaS DevSomeware",
        "DevSomeware platform",
        "enterprise SaaS development",
        "SaaS development platform",
        
        "custom SaaS development",
        "enterprise software development",
        "scalable web applications",
        "cloud-native development",
        "microservices architecture",
        "full-stack development services",
        
        // Technology Keywords
        "Next.js development",
        "React applications",
        "Node.js backend",
        "TypeScript development",
        "MongoDB solutions",
        "PostgreSQL databases",
        "AWS cloud services",
        "Redis caching",
        "WebSocket real-time",
        
        // Industry Solutions
        "educational technology",
        "learning management systems",
        "college ERP systems",
        "placement management",
        "online testing platforms",
        "attendance management",
        "DevOps platforms",
        "cloud hosting solutions",
        
        // Business Keywords
        "startup MVP development",
        "enterprise solutions",
        "custom web development",
        "SaaS consulting",
        "technical architecture",
        "scalable infrastructure",
        "secure applications",
        "performance optimization",
        
        // Location Keywords (if applicable)
        "SaaS development India",
        "enterprise software India",
        "custom development services",
        
        // Feature Keywords
        "multi-tenant architecture",
        "real-time applications",
        "responsive design",
        "mobile-first development",
        "API development",
        "database design",
        "security implementation",
        "deployment automation"
    ],
    author: process.env.NEXT_PUBLIC_AUTHOR_NAME || "SaaS DevSomeware Team",
    type: "website"
});

// Viewport Configuration
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const appUrl = "https://saas.devsomeware.com";
    const siteName = "SaaS DevSomeware";
    const companyName = "DevSomeware Company";

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Essential Meta Tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <link rel="canonical" href={appUrl} />
                
                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={appUrl} />
                <meta property="og:image" content={`${appUrl}/page.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="SaaS DevSomeware - Enterprise SaaS Development Platform" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={"@DevSomeware"} />
                <meta name="twitter:creator" content={"@DevSomeware"} />
                <meta name="twitter:image" content={`${appUrl}/kk.png`} />
                
                {/* Additional Meta Tags */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="msapplication-TileColor" content="#8b5cf6" />
                <meta name="theme-color" content="#8b5cf6" />
                
                {/* Preconnect for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                
                {/* Favicon and Icons */}
                <link rel="icon" href="/kk.png" type="image/png" />
                <link rel="apple-touch-icon" href="/kk.png" />
                <link rel="shortcut icon" href="/kk.png" />
                
                {/* Structured Data for Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": siteName,
                            "legalName": companyName,
                            "url": appUrl,
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${appUrl}/kk.png`,
                                "width": 200,
                                "height": 200
                            },
                            "description": "Enterprise-grade SaaS development platform specializing in educational technology, cloud infrastructure, and custom software solutions.",
                            "foundingDate": process.env.NEXT_PUBLIC_COMPANY_FOUNDED || "2023",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "email": process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@saasdevsomeware.com",
                                "availableLanguage": ["English"]
                            },
                            "sameAs": [
                                process.env.NEXT_PUBLIC_TWITTER_URL,
                                process.env.NEXT_PUBLIC_LINKEDIN_URL,
                                process.env.NEXT_PUBLIC_GITHUB_URL
                            ].filter(Boolean),
                            "serviceArea": {
                                "@type": "Place",
                                "name": "Global"
                            },
                            "areaServed": "Worldwide",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "SaaS Development Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Custom SaaS Development",
                                            "description": "End-to-end SaaS application development with modern architecture"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Educational Technology Solutions",
                                            "description": "Learning management systems and educational platforms"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Enterprise Software Development",
                                            "description": "Scalable enterprise applications and ERP systems"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Cloud Infrastructure & DevOps",
                                            "description": "Cloud hosting platforms and deployment automation"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />

                {/* Website Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": siteName,
                            "url": appUrl,
                            "description": "Enterprise SaaS development platform offering scalable solutions, cloud infrastructure, and modern development frameworks.",
                            "publisher": {
                                "@type": "Organization",
                                "name": siteName,
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": `${appUrl}/kk.png`
                                }
                            },
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": `${appUrl}/search?q={search_term_string}`
                                },
                                "query-input": "required name=search_term_string"
                            },
                            "mainEntity": {
                                "@type": "SoftwareApplication",
                                "name": "SaaS DevSomeware Platform",
                                "applicationCategory": "Development Platform",
                                "operatingSystem": "Web Browser",
                                "offers": {
                                    "@type": "Offer",
                                    "priceCurrency": "USD",
                                    "price": "Custom Pricing"
                                }
                            }
                        })
                    }}
                />

                {/* Breadcrumb for Homepage */}
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
                                    "item": appUrl
                                }
                            ]
                        })
                    }}
                />

                {/* Google Analytics */}
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                                `
                            }}
                        />
                    </>
                )}

                {/* Google Site Verification */}
                {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
                    <meta
                        name="google-site-verification"
                        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
                    />
                )}
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
                    base.variable,
                    heading.variable,
                )}
            >
                <Toaster richColors theme="dark" position="top-right" />
                {children}
            </body>
        </html>
    );
}