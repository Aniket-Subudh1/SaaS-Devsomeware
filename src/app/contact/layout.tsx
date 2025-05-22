import { Metadata } from "next";
import { generateMetadata } from "@/utils";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export const metadata: Metadata = generateMetadata({
    title: "Contact DevSomeware - Get In Touch for SaaS Development Projects",
    description: "Ready to start your SaaS project? Contact DevSomeware for custom software development, educational technology solutions, and enterprise applications. Get expert consultation and personalized quotes.",
    keywords: [
        "contact DevSomeware",
        "SaaS development consultation",
        "custom software development quote",
        "enterprise software inquiry",
        "educational technology contact",
        
        "project consultation",
        "software development services",
        "technical consultation",
        "development partnership",
        "SaaS project inquiry",
        
        "React development contact",
        "Next.js development services",
        "full-stack development inquiry",
        "TypeScript development",
        "Node.js backend development",
        
        "learning management system inquiry",
        "college ERP development",
        "placement portal development",
        "testing platform development",
        "custom web development",
        
        "DevSomeware contact form",
        "software development team",
        "project estimation",
        "development timeline",
        "technical requirements",
        
        "hire developers",
        "software development agency",
        "SaaS development company",
        "enterprise solutions provider",
        "educational software developers"
    ],
    author: "DevSomeware Team",
    type: "website"
});

interface ContactLayoutProps {
    children: React.ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact DevSomeware - SaaS Development Services",
                        "description": "Get in touch with DevSomeware for custom SaaS development, educational technology solutions, and enterprise software projects.",
                        "url": "https://saas.devsomeware.com/contact",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "DevSomeware",
                            "url": "https://www.devsomeware.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://saas.devsomeware.com/kk.png"
                            },
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "contactType": "customer service",
                                    "email": "hello@devsomeware.com",
                                    "availableLanguage": ["English", "Hindi"],
                                    "areaServed": "Worldwide",
                                    "serviceArea": {
                                        "@type": "Place",
                                        "name": "Global"
                                    }
                                },
                                {
                                    "@type": "ContactPoint",
                                    "contactType": "technical support",
                                    "email": "support@devsomeware.com",
                                    "availableLanguage": ["English"],
                                    "areaServed": "Worldwide"
                                },
                                {
                                    "@type": "ContactPoint",
                                    "contactType": "sales",
                                    "email": "sales@devsomeware.com",
                                    "availableLanguage": ["English", "Hindi"],
                                    "areaServed": "Worldwide"
                                }
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "India",
                                "addressRegion": "Odisha",
                                "addressLocality": "Bhubaneswar"
                            },
                            "sameAs": [
                                "https://www.instagram.com/devsomeware/",
                                "https://x.com/DevSomware",
                                "https://hashnode.com/@devsomeware",
                                "https://www.threads.net/@devsomeware",
                                "https://github.com/DevSomware",
                                "https://www.linkedin.com/company/devsomeware/"
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "DevSomeware Development Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Custom SaaS Development",
                                            "description": "End-to-end SaaS application development with modern technologies"
                                        },
                                        "eligibleRegion": {
                                            "@type": "Place",
                                            "name": "Worldwide"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Educational Technology Solutions",
                                            "description": "Learning management systems and educational platforms"
                                        },
                                        "eligibleRegion": {
                                            "@type": "Place",
                                            "name": "Worldwide"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Enterprise Software Development",
                                            "description": "Scalable enterprise applications and ERP systems"
                                        },
                                        "eligibleRegion": {
                                            "@type": "Place",
                                            "name": "Worldwide"
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
                                    "name": "Contact",
                                    "item": "https://saas.devsomeware.com/contact"
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

            {/* FAQ Schema for common questions */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How long does it take to develop a custom SaaS application?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Development timelines vary based on project complexity. Typical projects range from 3-12 months. We provide detailed timelines after understanding your requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What technologies does DevSomeware specialize in?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We specialize in Next.js, React, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, and modern web technologies for building scalable SaaS applications."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide ongoing support after project completion?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we offer comprehensive maintenance and support packages to ensure your application runs smoothly and stays updated with the latest technologies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you help with existing project modernization?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely! We help modernize legacy applications, improve performance, add new features, and migrate to modern technology stacks."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* Open Graph Tags for Social Media */}
            <meta property="og:title" content="Contact DevSomeware - Get In Touch for SaaS Development Projects" />
            <meta property="og:description" content="Ready to start your SaaS project? Contact our expert development team for custom software solutions, consultation, and project quotes." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://saas.devsomeware.com/contact" />
            <meta property="og:image" content="https://saas.devsomeware.com/kk.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="DevSomeware" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Contact DevSomeware - SaaS Development Services" />
            <meta name="twitter:description" content="Get expert consultation for your SaaS development project. Contact our team for custom solutions and quotes." />
            <meta name="twitter:image" content="https://saas.devsomeware.com/kk.png" />
            <meta name="twitter:site" content="@DevSomware" />
            <meta name="twitter:creator" content="@DevSomware" />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href="https://saas.devsomeware.com/contact" />
            
            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <Navbar />
            {children}
            <Footer />
        </>
    );
}