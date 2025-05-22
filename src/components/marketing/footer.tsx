"use client"
import Link from "next/link";
import Container from "../global/container";
import Image from "next/image";
import { CAL_LINKS } from "@/constants/calendar";
import { 
    CalendarIcon, 
    MailIcon, 
    MapPinIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    HashIcon,
    MessageCircleIcon,
    ExternalLinkIcon
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/devsomeware/",
            icon: InstagramIcon,
            handle: "@devsomeware"
        },
        {
            name: "Twitter/X",
            href: "https://x.com/DevSomware",
            icon: TwitterIcon,
            handle: "@DevSomware"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/devsomeware/",
            icon: LinkedinIcon,
            handle: "DevSomeware"
        },
        {
            name: "GitHub",
            href: "https://github.com/DevSomware",
            icon: GithubIcon,
            handle: "@DevSomware"
        },
        {
            name: "Hashnode",
            href: "https://hashnode.com/@devsomeware",
            icon: HashIcon,
            handle: "@devsomeware"
        },
        {
            name: "Threads",
            href: "https://www.threads.net/@devsomeware",
            icon: MessageCircleIcon,
            handle: "@devsomeware"
        }
    ];

    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-7xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-4 xl:gap-8 w-full">
                
                {/* Company Info */}
                <Container className="xl:col-span-1">
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/kk.png" 
                                alt="DevSomeware Logo"  
                                className="h-10 w-auto"  
                                width={40}
                                height={40}
                            />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-foreground">
                                    DevSomeware
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    SaaS Development
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Building the future of digital solutions with enterprise-grade SaaS development, educational technology, and custom software solutions.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MailIcon className="size-4 text-purple-400" />
                                <a href="mailto:team@devsomeware.com" className="hover:text-foreground transition-colors">
                                    team@devsomeware.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPinIcon className="size-4 text-purple-400" />
                                <span>Bhubaneswar, Odisha, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <CalendarIcon className="size-4 text-purple-400" />
                                <button 
                                    onClick={() => window.open(CAL_LINKS.consultation, '_blank', 'noopener,noreferrer')}
                                    className="hover:text-foreground transition-colors"
                                >
                                    Schedule a Meeting
                                </button>
                            </div>
                        </div>

                        {/* Main Website Link */}
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                            <span className="text-sm text-purple-400 font-medium">🌐 Main Website:</span>
                            <a 
                                href="https://www.devsomeware.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-purple-400 hover:text-purple-300 underline transition-colors flex items-center gap-1"
                            >
                                devsomeware.com
                                <ExternalLinkIcon className="size-3" />
                            </a>
                        </div>
                    </div>
                </Container>

                {/* Services & Solutions */}
                <div className="xl:col-span-1">
                    <Container delay={0.1} className="h-auto">
                        <h3 className="text-base font-semibold text-foreground mb-4">
                            Our Services
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <button 
                                    onClick={() => window.open(CAL_LINKS.discovery, '_blank', 'noopener,noreferrer')}
                                    className="link hover:text-foreground transition-all duration-300 text-left"
                                >
                                    SaaS Development
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => window.open(CAL_LINKS.enterprise, '_blank', 'noopener,noreferrer')}
                                    className="link hover:text-foreground transition-all duration-300 text-left"
                                >
                                    Enterprise Solutions
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => window.open(CAL_LINKS.consultation, '_blank', 'noopener,noreferrer')}
                                    className="link hover:text-foreground transition-all duration-300 text-left"
                                >
                                    Educational Technology
                                </button>
                            </li>
                            <li>
                                <Link href="/contact" className="link hover:text-foreground transition-all duration-300">
                                    Custom Development
                                </Link>
                            </li>
                            <li>
                                <button 
                                    onClick={() => window.open(CAL_LINKS.strategy, '_blank', 'noopener,noreferrer')}
                                    className="link hover:text-foreground transition-all duration-300 text-left"
                                >
                                    Cloud Infrastructure
                                </button>
                            </li>
                        </ul>

                        <h3 className="text-base font-semibold text-foreground mb-4 mt-8">
                            Solutions
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/products" className="link hover:text-foreground transition-all duration-300">
                                    Learning Management Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="link hover:text-foreground transition-all duration-300">
                                    Cloud Hosting Platforms
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="link hover:text-foreground transition-all duration-300">
                                    ERP Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="link hover:text-foreground transition-all duration-300">
                                    Testing Platforms
                                </Link>
                            </li>
                        </ul>
                    </Container>
                </div>

                {/* Company & Resources */}
                <div className="xl:col-span-1">
                    <Container delay={0.2} className="h-auto">
                        <h3 className="text-base font-semibold text-foreground mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/about" className="link hover:text-foreground transition-all duration-300">
                                    About DevSomeware
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="link hover:text-foreground transition-all duration-300">
                                    Our Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="link hover:text-foreground transition-all duration-300">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <button 
                                    onClick={() => window.open(CAL_LINKS.consultation, '_blank', 'noopener,noreferrer')}
                                    className="link hover:text-foreground transition-all duration-300 text-left"
                                >
                                    Schedule Consultation
                                </button>
                            </li>
                        </ul>

                        <h3 className="text-base font-semibold text-foreground mb-4 mt-8">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a 
                                    href="https://hashnode.com/@devsomeware" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="link hover:text-foreground transition-all duration-300 flex items-center gap-1"
                                >
                                    Tech Blog
                                    <ExternalLinkIcon className="size-3" />
                                </a>
                            </li>
                            <li>
                                <Link href="/products" className="link hover:text-foreground transition-all duration-300">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="https://github.com/DevSomware" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="link hover:text-foreground transition-all duration-300 flex items-center gap-1"
                                >
                                    Open Source
                                    <ExternalLinkIcon className="size-3" />
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="link hover:text-foreground transition-all duration-300">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </Container>
                </div>

                {/* Social Media & Legal */}
                <div className="xl:col-span-1">
                    <Container delay={0.3} className="h-auto">
                        <h3 className="text-base font-semibold text-foreground mb-4">
                            Connect With Us
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Follow us for latest updates, tech insights, and behind-the-scenes content!
                        </p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-border/30 hover:border-border hover:bg-background/80 transition-all duration-300 group"
                                >
                                    <social.icon className="size-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-medium text-foreground">
                                            {social.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {social.handle}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <h3 className="text-base font-semibold text-foreground mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/privacy" className="link hover:text-foreground transition-all duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="link hover:text-foreground transition-all duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="link hover:text-foreground transition-all duration-300">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="link hover:text-foreground transition-all duration-300">
                                    GDPR Compliance
                                </Link>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                            <p className="text-sm text-purple-400 font-medium mb-2">
                                Ready to start your project?
                            </p>
                            <button 
                                onClick={() => window.open(CAL_LINKS.discovery, '_blank', 'noopener,noreferrer')}
                                className="text-sm bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors w-full"
                            >
                                Book Free Consultation
                            </button>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Bottom Section */}
            <Container delay={0.4} className="w-full relative mt-12 lg:mt-20">
                <div className="pt-8 border-t border-border/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                            <p>
                                &copy; {currentYear} DevSomeware. All rights reserved.
                            </p>
                            <div className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <p>
                                Made with ❤️ in India
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm">
                            <Link 
                                href="/sitemap.xml" 
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Sitemap
                            </Link>
                            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <a 
                                href="https://www.devsomeware.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Main Website
                            </a>
                            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <span className="text-muted-foreground">
                                v2.0.0
                            </span>
                        </div>
                    </div>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;