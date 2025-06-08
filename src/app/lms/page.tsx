"use client";

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { CAL_LINKS } from "@/constants/calendar";
import { 
    CalendarIcon, 
    CodeIcon, 
    ShieldIcon, 
    CreditCardIcon,
    UsersIcon,
    BarChart3Icon,
    MegaphoneIcon,
    PaletteIcon,
    ArrowRightIcon,
    CheckIcon,
    GraduationCapIcon,
    MonitorPlayIcon,
    ZapIcon,
    TrendingUpIcon,
    BookOpenIcon,
    StarIcon,
    Users2Icon,
    SparklesIcon,
    RocketIcon,
    HeartIcon,
    LockIcon,
    Award,
    Globe,
    MessageCircleIcon
} from "lucide-react";
import Particles from "@/components/ui/particles";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LMSPage = () => {
    const handleDemoClick = () => {
        window.open(CAL_LINKS.consultation, '_blank', 'noopener,noreferrer');
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hi! I'm interested in your White-Label LMS solution. Could you please provide more information about pricing, features, and implementation timeline?");
        const whatsappUrl = `https://wa.me/917684974052?text=${message}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    const features = [
        {
            icon: GraduationCapIcon,
            title: "Cohort-Based & Hybrid Courses",
            description: "Live, recorded, and hybrid course support with enrollment deadlines and cohort control. Pre-recorded + live class blending for maximum flexibility.",
            color: "from-blue-500 to-cyan-500",
            gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20"
        },
        {
            icon: MonitorPlayIcon,
            title: "Built-in Live Class Infrastructure",
            description: "No Zoom needed – direct in-platform streaming that scales up to 10,000 students with automatic session recording.",
            color: "from-purple-500 to-pink-500",
            gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20"
        },
        {
            icon: CodeIcon,
            title: "Interactive Coding Labs & Quizzes",
            description: "5,000+ coding problems and quizzes with real-time code execution (Python, Java, C++, more) and AI lab builder support.",
            color: "from-green-500 to-emerald-500",
            gradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20"
        },
        {
            icon: ShieldIcon,
            title: "DRM-Protected Video Streaming",
            description: "Widevine & Fairplay DRM with adaptive bitrate, watermarking, device/IP restriction, and offline support.",
            color: "from-red-500 to-orange-500",
            gradient: "bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20"
        },
        {
            icon: CreditCardIcon,
            title: "Global Payment Gateways",
            description: "Stripe, Razorpay, PayPal, UPI support with geo-pricing, multi-currency, and low-fee native UPI gateway.",
            color: "from-yellow-500 to-amber-500",
            gradient: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/20"
        },
        {
            icon: UsersIcon,
            title: "Multi-Instructor & Co-Teaching",
            description: "Add multiple instructors to one course with decentralized teaching roles for collaborative education.",
            color: "from-indigo-500 to-blue-500",
            gradient: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20"
        },
        {
            icon: BarChart3Icon,
            title: "Analytics & Reporting",
            description: "Student performance tracking with engagement and course progress reports for data-driven decisions.",
            color: "from-teal-500 to-cyan-500",
            gradient: "bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/20"
        },
        {
            icon: MegaphoneIcon,
            title: "Built-in Marketing Automation",
            description: "Affiliate system, email workflows, webhook integration, and custom landing pages with redirects.",
            color: "from-pink-500 to-rose-500",
            gradient: "bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20"
        },
        {
            icon: PaletteIcon,
            title: "White-Label Branding",
            description: "Fully branded under your identity with no platform watermark or name shown anywhere.",
            color: "from-purple-500 to-violet-500",
            gradient: "bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/20"
        }
    ];

    // Image slider component
    const ImageSlider = () => {
        const images = [
            "/1.png",
            "/2.png", 
            "/3.png",
            "/4.png",
            "/5.png",
            "/6.png"
        ];

        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }, [images.length]);

        return (
            <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1">
                    <div className="bg-background rounded-xl overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <Image
                                        src={image}
                                        alt={`LMS Screenshot ${index + 1}`}
                                        width={800}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-purple-500 scale-110' 
                                    : 'bg-gray-400 hover:bg-gray-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                    <ArrowRightIcon className="size-4 rotate-180" />
                </button>
                <button
                    onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                    <ArrowRightIcon className="size-4" />
                </button>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
                <Wrapper>
                    <Container className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                {/* Badge */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
                                >
                                    <SparklesIcon className="size-4 text-purple-400" />
                                    <span className="text-sm font-medium text-purple-400">
                                        #1 White-Label LMS Solution
                                    </span>
                                </motion.div>

                                {/* Main Headline */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="space-y-4"
                                >
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                        Powerful White-Label LMS for{" "}
                                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                            Modern Educators
                                        </span>
                                    </h1>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Launch your own branded platform with flexible pricing, custom features, and scalable infrastructure. 
                                        Everything you need to build a successful education business.
                                    </p>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Button 
                                        size="lg" 
                                        className="group bg-purple-500 hover:bg-purple-600 px-8 py-6 text-lg h-14"
                                        onClick={handleDemoClick}
                                    >
                                        <CalendarIcon className="size-5 mr-2" />
                                        Schedule a Demo
                                        <ArrowRightIcon className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        className="px-8 py-6 text-lg h-14 border-purple-500/50 hover:bg-purple-500/10 text-purple-500 hover:text-purple-400"
                                        onClick={handleWhatsAppClick}
                                    >
                                        <MessageCircleIcon className="size-5 mr-2" />
                                        Chat with Us
                                    </Button>
                                </motion.div>

                                {/* Trust Indicators */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex flex-wrap gap-6 text-sm text-muted-foreground"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckIcon className="size-4 text-green-500" />
                                        <span>10,000+ Students Supported</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckIcon className="size-4 text-green-500" />
                                        <span>99.9% Uptime</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckIcon className="size-4 text-green-500" />
                                        <span>White-Label Ready</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Content - Image Slider */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <ImageSlider />
                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                                    <StarIcon className="size-6 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3">
                                    <RocketIcon className="size-6 text-white" />
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Wrapper>

                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>
                <Particles
                    className="absolute inset-0"
                    quantity={30}
                    ease={80}
                    color="#8b5cf6"
                    refresh
                />
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <Wrapper>
                    <Container>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "10K+", label: "Active Students", icon: Users2Icon, color: "text-purple-400" },
                                { number: "99.9%", label: "Platform Uptime", icon: ZapIcon, color: "text-green-400" },
                                { number: "50+", label: "Institutions", icon: GraduationCapIcon, color: "text-blue-400" },
                                { number: "4.9", label: "User Rating", icon: StarIcon, color: "text-yellow-400" }
                            ].map((stat, index) => (
                                <Container key={index} delay={0.1 * index}>
                                    <div className="space-y-3">
                                        <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color === 'text-purple-400' ? 'from-purple-500/20 to-purple-600/20' : stat.color === 'text-green-400' ? 'from-green-500/20 to-green-600/20' : stat.color === 'text-blue-400' ? 'from-blue-500/20 to-blue-600/20' : 'from-yellow-500/20 to-yellow-600/20'}`}>
                                            <stat.icon className={`size-6 ${stat.color}`} />
                                        </div>
                                        <div className="text-3xl font-bold">{stat.number}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                </Container>
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Features Section */}
            <section className="py-20 relative">
                <Wrapper>
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Everything you need to{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    succeed
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our comprehensive LMS platform provides all the tools and features needed to create, manage, 
                                and scale your educational business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <Container key={index} delay={0.1 * index}>
                                    <div className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 group h-full ${feature.gradient}`}>
                                        <div className="space-y-4 relative z-10">
                                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                                                <feature.icon className="size-6 text-white" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </Container>
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Pricing Section */}
            <section className="py-20 relative">
                <Wrapper>
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Choose your{" "}
                                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                    deployment model
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Flexible options to match your business needs and technical requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Self-Hosted Option */}
                            <Container delay={0.2}>
                                <div className="relative p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 h-full group">
                                    <div className="space-y-6">
                                        <div className="text-center">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                                <BookOpenIcon className="size-4 text-blue-400" />
                                                <span className="text-sm font-medium text-blue-400">Self-Hosted</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Host Your Own LMS</h3>
                                            <p className="text-muted-foreground">Complete control over your platform</p>
                                        </div>

                                        <div className="text-center py-6">
                                            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">₹49,000</div>
                                            <div className="text-muted-foreground">Starting price</div>
                                            <div className="text-sm text-yellow-400 mt-2 bg-yellow-400/10 rounded-lg p-2">
                                                Support fee extra • Base price subject to requirements
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                "Complete source code access",
                                                "Custom domain & branding",
                                                "No recurring platform fees",
                                                "Full data ownership",
                                                "Unlimited customization",
                                                "One-time setup cost"
                                            ].map((feature, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <CheckIcon className="size-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button 
                                            className="w-full bg-purple-500 hover:bg-purple-600 h-12"
                                            onClick={handleDemoClick}
                                        >
                                            <CalendarIcon className="size-4 mr-2" />
                                            Discuss Requirements
                                        </Button>
                                    </div>
                                </div>
                            </Container>

                            {/* Managed Option */}
                            <Container delay={0.4}>
                                <div className="relative p-8 rounded-3xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm hover:border-purple-500/80 transition-all duration-300 h-full group overflow-hidden">
                                    <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium">
                                            POPULAR
                                        </div>
                                    </div>

                                    <div className="space-y-6 relative z-10">
                                        <div className="text-center">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                                                <TrendingUpIcon className="size-4 text-purple-400" />
                                                <span className="text-sm font-medium text-purple-400">Fully Managed</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Fully Managed by Us</h3>
                                            <p className="text-muted-foreground">We handle everything for you</p>
                                        </div>

                                        <div className="text-center py-6">
                                            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pay per Sale</div>
                                            <div className="text-muted-foreground">Revenue sharing model</div>
                                            <div className="text-sm text-yellow-400 mt-2 bg-yellow-400/10 rounded-lg p-2">
                                                Contact us for detailed pricing • Tailored per business model
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                "Zero upfront costs",
                                                "Complete platform management",
                                                "24/7 technical support",
                                                "Automatic updates & scaling",
                                                "Revenue-based pricing",
                                                "Quick launch (7-14 days)"
                                            ].map((feature, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <CheckIcon className="size-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button 
                                            className="w-full bg-purple-500 hover:bg-purple-600 h-12"
                                            onClick={handleDemoClick}
                                        >
                                            <CalendarIcon className="size-4 mr-2" />
                                            Get Custom Pricing
                                        </Button>
                                    </div>

                                    {/* Background decoration */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
                                </div>
                            </Container>
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <Wrapper>
                    <Container>
                        <div className="relative rounded-3xl bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50 p-12 lg:p-20 text-center border border-purple-500/20 backdrop-blur-sm overflow-hidden">
                            <Particles
                                className="absolute inset-0"
                                quantity={50}
                                ease={80}
                                color="#8b5cf6"
                                refresh
                            />
                            
                            <div className="relative z-10 space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
                                    <RocketIcon className="size-4 text-purple-300" />
                                    <span className="text-sm font-medium text-purple-300">
                                        Ready to Launch?
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                                    Ready to scale your{" "}
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        education business?
                                    </span>
                                </h2>
                                
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Join hundreds of educators who have successfully launched their branded learning platforms 
                                    with our white-label LMS solution. Transform your educational vision into reality.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button 
                                        size="lg" 
                                        className="group bg-purple-500 hover:bg-purple-600 px-8 py-6 text-lg h-14"
                                        onClick={handleDemoClick}
                                    >
                                        <CalendarIcon className="size-5 mr-2" />
                                        Book a Call
                                        <ArrowRightIcon className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <ZapIcon className="size-4 text-green-400" />
                                            <span>Free consultation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <HeartIcon className="size-4 text-red-400" />
                                            <span>No commitment required</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional trust signals */}
                                <div className="pt-8 border-t border-white/10">
                                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Globe className="size-4 text-blue-400" />
                                            <span>Global reach</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <LockIcon className="size-4 text-green-400" />
                                            <span>Enterprise security</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="size-4 text-yellow-400" />
                                            <span>Award-winning platform</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background decorations */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    size="lg"
                >
                    <MessageCircleIcon className="size-6 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">Chat on WhatsApp</span>
                </Button>
            </div>
        </div>
    );
};

export default LMSPage;