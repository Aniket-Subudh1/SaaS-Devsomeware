import { Metadata } from "next";
import { generateMetadata } from "@/utils";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export const metadata: Metadata = generateMetadata({
    title: "About DevSomeware - Innovative SaaS Development Company",
    description: "Discover the story behind DevSomeware, a leading SaaS development company specializing in educational technology, enterprise solutions, and custom software development. Learn about our mission, values, and the team building the future of digital solutions.",
    keywords: [
        "about DevSomeware",
        "SaaS development company",
        "software development team",
        "educational technology experts",
        "enterprise software developers",
        
        "custom software development",
        "full-stack development company",
        "React development experts",
        "Next.js specialists",
        "TypeScript development",
        "Node.js backend development",
        
        "learning management systems",
        "college ERP solutions",
        "placement management systems",
        "online testing platforms",
        "cloud hosting platforms",
        "DevOps automation",
        
        "software development mission",
        "technology innovation",
        "digital transformation",
        "scalable solutions",
        "enterprise-grade security",
        "modern web development",
        
        "DevSomeware team",
        "software development values",
        "client success stories",
        "technology partnerships",
        "development methodology",
        "agile development"
    ],
    author: "DevSomeware Team",
    type: "website"
});

interface AboutLayoutProps {
    children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About DevSomeware - Innovative SaaS Development Company",
                        "description": "Learn about DevSomeware's mission, values, and expertise in building scalable SaaS solutions, educational technology, and enterprise software.",
                        "url": "https://saas.devsomeware.com/about",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "DevSomeware",
                            "legalName": "DevSomeware Private Limited",
                            "url": "https://www.devsomeware.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://saas.devsomeware.com/kk.png",
                                "width": 200,
                                "height": 200
                            },
                            "description": "Innovative SaaS development company specializing in educational technology, enterprise solutions, and custom software development with modern tech stack.",
                            "foundingDate": "2023",
                            "numberOfEmployees": "10-50",
                            "industry": "Software Development",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "email": "hello@devsomeware.com",
                                "availableLanguage": ["English", "Hindi"]
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "India",
                                "addressRegion": "Odisha"
                            },
                            "sameAs": [
                                "https://www.instagram.com/devsomeware/",
                                "https://x.com/DevSomware",
                                "https://hashnode.com/@devsomeware",
                                "https://www.threads.net/@devsomeware",
                                "https://github.com/DevSomware",
                                "https://www.linkedin.com/company/devsomeware/"
                            ],
                            "serviceArea": {
                                "@type": "Place",
                                "name": "Global"
                            },
                            "areaServed": "Worldwide",
                            "knowsAbout": [
                                "SaaS Development",
                                "Educational Technology",
                                "Enterprise Software",
                                "React Development",
                                "Next.js Development",
                                "Node.js Development",
                                "TypeScript",
                                "MongoDB",
                                "PostgreSQL",
                                "AWS Cloud Services",
                                "DevOps",
                                "Microservices Architecture"
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "DevSomeware Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Learning Management Systems",
                                            "description": "Comprehensive LMS platforms with video streaming, testing, and collaboration features"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Cloud Hosting Platforms",
                                            "description": "Scalable hosting solutions with automated deployment and DevOps integration"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Enterprise ERP Systems",
                                            "description": "Complete ERP solutions for educational institutions and businesses"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Custom Software Development",
                                            "description": "Tailored software solutions for specific business requirements"
                                        }
                                    }
                                ]
                            }
                        },
                        "breadcrumb": {
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
                                    "name": "About",
                                    "item": "https://saas.devsomeware.com/about"
                                }
                            ]
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "DevSomeware",
                            "url": "https://www.devsomeware.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://saas.devsomeware.com/kk.png"
                            }
                        }
                    })
                }}
            />

            {/* Team Member Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "DevSomeware Team",
                        "jobTitle": "Software Development Team",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "DevSomeware"
                        },
                        "knowsAbout": [
                            "Full Stack Development",
                            "SaaS Architecture",
                            "Educational Technology",
                            "Cloud Infrastructure",
                            "Database Design",
                            "API Development"
                        ]
                    })
                }}
            />

            {/* Open Graph Tags for Social Media */}
            <meta property="og:title" content="About DevSomeware - Innovative SaaS Development Company" />
            <meta property="og:description" content="Discover the story behind DevSomeware, our mission to transform ideas into scalable SaaS solutions, and our expertise in educational technology and enterprise software." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://saas.devsomeware.com/about" />
            <meta property="og:image" content="https://saas.devsomeware.com/kk.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="DevSomeware" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="About DevSomeware - Innovative SaaS Development Company" />
            <meta name="twitter:description" content="Learn about our mission, values, and expertise in building scalable SaaS solutions and educational technology." />
            <meta name="twitter:image" content="https://saas.devsomeware.com/kk.png" />
            <meta name="twitter:site" content="@DevSomware" />
            <meta name="twitter:creator" content="@DevSomware" />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href="https://saas.devsomeware.com/about" />
            
            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <Navbar />
            {children}
            <Footer />
        </>
    );
}