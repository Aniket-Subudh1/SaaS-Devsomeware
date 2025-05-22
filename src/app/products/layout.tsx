import { Metadata } from "next";
import { generateMetadata } from "@/utils";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export const metadata: Metadata = generateMetadata({
    title: "Our Products & Projects - SaaS DevSomeware",
    description: "Explore our comprehensive portfolio of innovative SaaS products and enterprise solutions. From Learning Management Systems to Cloud Hosting Platforms, discover how we build scalable, secure, and user-focused applications for educational institutions and businesses.",
    keywords: [
        "SaaS products portfolio",
        "enterprise software development",
        "educational technology solutions",
        "custom software development",
        
        "learning management system",
        "cloud hosting platform",
        "college ERP system",
        "placement management portal",
        "online testing platform",
        "custom development services",
        
        "Next.js applications",
        "TypeScript development",
        "MongoDB solutions",
        "AWS cloud infrastructure",
        "React applications",
        "Node.js backend",
        
        "EdTech solutions",
        "DevOps platforms",
        "educational software",
        "institutional management",
        "secure testing systems",
        "QR attendance systems",
        
        "full-stack development",
        "microservice architecture",
        "real-time applications",
        "scalable web platforms",
        "enterprise-grade security",
        "custom web development",
        
        "SaaS DevSomeware projects",
        "DevSomeware portfolio",
        "professional software solutions",
        "enterprise clients",
        "educational institutions",
        "startup solutions"
    ],
    author: "SaaS DevSomeware Team",
    type: "website"
});

interface ProductsLayoutProps {
    children: React.ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "SaaS DevSomeware Products & Projects",
                        "description": "Portfolio of innovative SaaS products and enterprise solutions including LMS, Cloud Hosting, ERP Systems, and Custom Development Services",
                        "url": `https://saas.devsomeware.com/products`,
                        "mainEntity": {
                            "@type": "ItemList",
                            "numberOfItems": 6,
                            "itemListElement": [
                                {
                                    "@type": "SoftwareApplication",
                                    "position": 1,
                                    "name": "LMS - Learning Management System",
                                    "description": "Comprehensive learning management platform with video streaming, assignments, live testing, and real-time chat",
                                    "applicationCategory": "Educational Technology",
                                    "operatingSystem": "Web Browser",
                                    "offers": {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "price": "Custom Pricing"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "position": 2,
                                    "name": "DeployLite - Cloud Hosting Platform",
                                    "description": "Microservice-based hosting platform with automated CI/CD, AI code quality checks, and containerization",
                                    "applicationCategory": "DevOps Platform",
                                    "operatingSystem": "Web Browser",
                                    "offers": {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "price": "Custom Pricing"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "position": 3,
                                    "name": "College ERP Management System",
                                    "description": "Comprehensive ERP solution for educational institutions with student management and academic planning",
                                    "applicationCategory": "Enterprise Resource Planning",
                                    "operatingSystem": "Web Browser",
                                    "offers": {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "price": "Custom Pricing"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "position": 4,
                                    "name": "Placement Management Portal",
                                    "description": "Career services platform for managing campus placements and company partnerships",
                                    "applicationCategory": "Career Management",
                                    "operatingSystem": "Web Browser",
                                    "offers": {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "price": "Custom Pricing"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "position": 5,
                                    "name": "Secure Online Testing Platform",
                                    "description": "High-security examination platform with anti-cheating mechanisms and real-time proctoring",
                                    "applicationCategory": "Educational Assessment",
                                    "operatingSystem": "Web Browser",
                                    "offers": {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "price": "Custom Pricing"
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "position": 6,
                                    "name": "Custom Development Solutions",
                                    "description": "On-demand development services including websites, QR attendance systems, and e-commerce platforms",
                                    "serviceType": "Custom Software Development",
                                    "provider": {
                                        "@type": "Organization",
                                        "name": "SaaS DevSomeware"
                                    }
                                }
                            ]
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
                                    "name": "Products",
                                    "item": "https://saas.devsomeware.com/products"
                                }
                            ]
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "SaaS DevSomeware",
                            "url": "https://saas.devsomeware.com/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://saas.devsomeware.com/kk.png",
                            }
                        }
                    })
                }}
            />

            {/* Open Graph Tags for Social Media */}
            <meta property="og:title" content="Our Products & Projects - SaaS DevSomeware" />
            <meta property="og:description" content="Explore our portfolio of innovative SaaS products including LMS, Cloud Hosting Platform, ERP Systems, and Custom Development Services." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={"https://saas.devsomeware.com/products"} />
            <meta property="og:image" content={"https://saas.devsomeware.com/kk.png"} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="SaaS DevSomeware" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Our Products & Projects - SaaS DevSomeware" />
            <meta name="twitter:description" content="Discover our portfolio of enterprise SaaS solutions and educational technology platforms." />
            <meta name="twitter:image" content={"https://saas.devsomeware.com/kk.png"} />
            <meta name="twitter:site" content="@DevSomeware" />
            <meta name="twitter:creator" content="@DevSomeware" />

            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={`https://saas.devsomeware.com/products`} />
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

           <Navbar />
            {children}
            <Footer/>
        </>
    );
}