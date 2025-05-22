"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    MailIcon, 
    ClockIcon,
    SendIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    MessageSquareIcon,
    HeadphonesIcon,
    CalendarIcon,
    GlobeIcon,
    MapPinIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    HashIcon,
    MessageCircleIcon
} from "lucide-react";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";

interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    details: string[];
    color: string;
    bgColor: string;
}

interface SocialLink {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

const CONTACT_INFO: ContactInfo[] = [
    {
        icon: MailIcon,
        title: "Email Us",
        details: ["team@devsomeware.com", "Response within 24hrs"],
        color: "text-blue-400",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: MessageSquareIcon,
        title: "Quick Chat",
        details: ["Live Chat Available", "Instant Response"],
        color: "text-green-400",
        bgColor: "bg-green-500/10"
    },
    {
        icon: CalendarIcon,
        title: "Schedule Call",
        details: ["Free Consultation", "Project Discussion"],
        color: "text-purple-400",
        bgColor: "bg-purple-500/10"
    },
    {
        icon: GlobeIcon,
        title: "Global Service",
        details: ["Worldwide Clients", "Remote Collaboration"],
        color: "text-orange-400",
        bgColor: "bg-orange-500/10"
    }
];

const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/devsomeware/",
        icon: InstagramIcon,
        color: "hover:text-pink-400"
    },
    {
        name: "Twitter",
        href: "https://x.com/DevSomware",
        icon: TwitterIcon,
        color: "hover:text-blue-400"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/devsomeware/",
        icon: LinkedinIcon,
        color: "hover:text-blue-600"
    },
    {
        name: "GitHub",
        href: "https://github.com/DevSomware",
        icon: GithubIcon,
        color: "hover:text-gray-400"
    },
    {
        name: "Hashnode",
        href: "https://hashnode.com/@devsomeware",
        icon: HashIcon,
        color: "hover:text-indigo-400"
    },
    {
        name: "Threads",
        href: "https://www.threads.net/@devsomeware",
        icon: MessageCircleIcon,
        color: "hover:text-purple-400"
    }
];

const PROJECT_TYPES = [
    "Learning Management System",
    "E-commerce Platform", 
    "Enterprise ERP System",
    "Cloud Hosting Platform",
    "Testing Platform",
    "Custom Web Application",
    "Mobile Application",
    "API Development",
    "Other"
];

const BUDGETS = [
    "Under Rs.5,000",
    "Rs.5,000 - Rs.15,000", 
    "Rs.5,000 - Rs.50,000",
    "Rs.50,000 - Rs.100,000",
    "Above Rs.100,000",
    "Let's Discuss"
];

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError(null);
    };

    // Client-side validation
    const validateForm = () => {
        if (!formData.name.trim()) {
            setError("Name is required");
            return false;
        }
        if (!formData.email.trim()) {
            setError("Email is required");
            return false;
        }
        if (!formData.email.includes('@')) {
            setError("Please enter a valid email address");
            return false;
        }
        if (!formData.projectType) {
            setError("Please select a project type");
            return false;
        }
        if (!formData.message.trim()) {
            setError("Project description is required");
            return false;
        }
        if (formData.message.trim().length < 10) {
            setError("Project description must be at least 10 characters long");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        
        // Client-side validation
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        try {
            console.log('Submitting form data:', formData); // Debug log

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Response status:', response.status); // Debug log

            if (response.ok) {
                const responseData = await response.json();
                console.log('Success response:', responseData); // Debug log
                setIsSubmitted(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "",
                        budget: "",
                        timeline: "",
                        message: ""
                    });
                }, 3000);
            } else {
                // Parse error response
                const errorData = await response.json();
                console.log('Error response:', errorData); // Debug log
                setError(errorData.error || `Server error: ${response.status}`);
            }
        } catch (error) {
            console.error('Network/Fetch error:', error);
            setError('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[10rem]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[8rem]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 pt-32">
                <Wrapper>
                    <Container>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 border border-purple-500/20 mb-8">
                                <MessageSquareIcon className="size-4 mr-2" />
                                Let&apos;s Build Something Amazing Together
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold !leading-tight mb-6">
                                Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                Ready to transform your ideas into powerful SaaS solutions? 
                                <span className="text-purple-400"> Let&apos;s discuss your project</span> and create something extraordinary.
                            </p>
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Contact Cards */}
            <section className="py-16">
                <Wrapper>
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {CONTACT_INFO.map((info, index) => (
                                <Container key={info.title} delay={0.1 + index * 0.1}>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                        <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-border transition-all duration-300">
                                            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", info.bgColor)}>
                                                <info.icon className={cn("size-6", info.color)} />
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                            <div className="space-y-1">
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Main Content - Form & Info */}
            <section className="py-16">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        
                        {/* Contact Form - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <Container>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
                                    <div className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8">
                                        <div className="mb-8">
                                            <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                                                Start Your <span className="text-purple-400">Project</span>
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed project proposal.
                                            </p>
                                        </div>

                                        {/* Error Display */}
                                        {error && (
                                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                                <p className="text-red-400 text-sm">{error}</p>
                                            </div>
                                        )}

                                        {!isSubmitted ? (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                            placeholder="John Doe"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                            placeholder="john@company.com"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Company/Organization
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        placeholder="Your Company Name"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            Project Type *
                                                        </label>
                                                        <select
                                                            name="projectType"
                                                            value={formData.projectType}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                            required
                                                        >
                                                            <option value="">Select Project Type</option>
                                                            {PROJECT_TYPES.map(type => (
                                                                <option key={type} value={type}>{type}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            Budget Range
                                                        </label>
                                                        <select
                                                            name="budget"
                                                            value={formData.budget}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        >
                                                            <option value="">Select Budget</option>
                                                            {BUDGETS.map(budget => (
                                                                <option key={budget} value={budget}>{budget}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Project Timeline
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="timeline"
                                                        value={formData.timeline}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        placeholder="e.g., 3-6 months, ASAP, Flexible"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Project Description *
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                                                        required
                                                        minLength={10}
                                                    />
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        {formData.message.length}/2000 characters (minimum 10)
                                                    </p>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <SendIcon className="size-4 mr-2" />
                                                            Send Project Request
                                                        </>
                                                    )}
                                                </Button>
                                            </form>
                                        ) : (
                                            <div className="text-center py-12">
                                                <CheckCircleIcon className="size-16 text-green-400 mx-auto mb-4" />
                                                <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                                                <p className="text-muted-foreground">
                                                    Thank you for your interest. We&apos;ll get back to you within 24 hours.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Container>
                        </div>

                        {/* Info Sidebar - Takes 1 column - FIXED SPACING */}
                        <div className="lg:col-span-1 space-y-6">
                            
                            {/* Quick Contact */}
                            <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MailIcon className="size-5 text-purple-400" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <a href="mailto:team@devsomeware.com" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                                                team@devsomeware.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ClockIcon className="size-5 text-blue-400" />
                                        <div>
                                            <p className="font-medium">Response Time</p>
                                            <p className="text-sm text-muted-foreground">Within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPinIcon className="size-5 text-green-400" />
                                        <div>
                                            <p className="font-medium">Location</p>
                                            <p className="text-sm text-muted-foreground">Bhubaneswar, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {SOCIAL_LINKS.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30 transition-all duration-300 hover:scale-105 hover:border-border text-muted-foreground",
                                                social.color
                                            )}
                                        >
                                            <social.icon className="size-4" />
                                            <span className="text-sm font-medium">{social.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Why Choose DevSomeware?</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: CheckCircleIcon, text: "100% Project Success", color: "text-green-400" },
                                        { icon: ClockIcon, text: "24/7 Support", color: "text-blue-400" },
                                        { icon: HeadphonesIcon, text: "Dedicated Manager", color: "text-purple-400" },
                                        { icon: GlobeIcon, text: "Global Clients", color: "text-orange-400" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <item.icon className={cn("size-4", item.color)} />
                                            <span className="text-sm">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Portfolio CTA */}
                            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 text-center">
                                <h3 className="text-lg font-semibold mb-2">Explore Our Work</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Check out our recent projects
                                </p>
                                <Link href="/products">
                                    <Button variant="outline" size="sm" className="group w-full">
                                        View Portfolio
                                        <ArrowRightIcon className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <Wrapper>
                    <Container>
                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-12 text-center">
                                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                                    Ready to Start Your <span className="text-purple-400">Journey</span>?
                                </h2>
                                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Join 50+ satisfied clients who have transformed their ideas into successful SaaS applications with DevSomeware.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button 
                                    size="lg" 
                                    variant="blue"
                                    onClick={() => window.open('https://cal.com/devsomeware-jqvlc6/general-consultation', '_blank', 'noopener,noreferrer')}
                                    className="group"
                                >
                                    
                                    <CalendarIcon className="size-4 mr-2" />
                                    Start Your Project
                                </Button>
                                    <Link href="/about">
                                        <Button variant="outline" size="lg">
                                            Learn More About Us
                                            <ArrowRightIcon className="size-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="mt-8 pt-8 border-t border-border/30">
                                    <p className="text-sm text-muted-foreground">
                                        🌟 <span className="text-purple-400">DevSomeware</span> - Building the future of digital solutions! 💻✨
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            </section>
        </div>
    );
};

export default ContactPage;