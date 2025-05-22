import { Metadata } from "next";
import Link from "next/link";
import { 
    StarIcon, 
    Users2Icon, 
    TrendingUpIcon, 
    CodeIcon, 
    HeartIcon, 
    ZapIcon,
    TargetIcon,
    LightbulbIcon,
    ShieldCheckIcon,
    RocketIcon,
    InstagramIcon,
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
    ExternalLinkIcon,
    HashIcon,
    MessageCircleIcon
} from "lucide-react";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Icons from "@/components/global/icons";
import { generateMetadata } from "@/utils";

export const metadata: Metadata = generateMetadata({
    title: "About DevSomeware - Innovative SaaS Development Company",
    description: "Discover the story behind DevSomeware, our mission to transform ideas into scalable SaaS solutions, and our expertise in educational technology and enterprise software development.",
});

interface SocialLink {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    handle: string;
    color: string;
    description: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/devsomeware/",
        icon: InstagramIcon,
        handle: "@devsomeware",
        color: "from-pink-500 to-purple-600",
        description: "Behind-the-scenes content and team updates"
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/DevSomware",
        icon: TwitterIcon,
        handle: "@DevSomware",
        color: "from-blue-400 to-blue-600",
        description: "Latest tech insights and company news"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/devsomeware/",
        icon: LinkedinIcon,
        handle: "@devsomeware",
        color: "from-blue-600 to-blue-800",
        description: "Professional updates and industry insights"
    },
    {
        name: "GitHub",
        href: "https://github.com/DevSomware",
        icon: GithubIcon,
        handle: "@DevSomware",
        color: "from-gray-700 to-gray-900",
        description: "Open source projects and contributions"
    },
    {
        name: "Hashnode",
        href: "https://hashnode.com/@devsomeware",
        icon: HashIcon,
        handle: "@devsomeware",
        color: "from-blue-500 to-indigo-600",
        description: "Technical blogs and development insights"
    },
    {
        name: "Threads",
        href: "https://www.threads.net/@devsomeware",
        icon: MessageCircleIcon,
        handle: "@devsomeware",
        color: "from-purple-500 to-pink-600",
        description: "Casual conversations and community engagement"
    }
];

const VALUES = [
    {
        icon: LightbulbIcon,
        title: "Innovation First",
        description: "We embrace cutting-edge technologies and creative solutions to solve complex problems with elegant, scalable approaches.",
        color: "text-yellow-400"
    },
    {
        icon: HeartIcon,
        title: "Client-Centric",
        description: "Every project begins with understanding our clients' unique challenges and crafting solutions that exceed expectations.",
        color: "text-red-400"
    },
    {
        icon: ShieldCheckIcon,
        title: "Quality & Security",
        description: "We build enterprise-grade solutions with robust security, comprehensive testing, and maintainable code architecture.",
        color: "text-green-400"
    },
    {
        icon: Users2Icon,
        title: "Collaborative Spirit",
        description: "Our success comes from fostering strong partnerships with clients and maintaining transparent communication throughout projects.",
        color: "text-blue-400"
    },
    {
        icon: ZapIcon,
        title: "Rapid Delivery",
        description: "Using agile methodologies and modern development practices, we deliver high-quality solutions efficiently and on time.",
        color: "text-purple-400"
    },
    {
        icon: TrendingUpIcon,
        title: "Continuous Growth",
        description: "We're committed to learning, evolving, and staying ahead of technology trends to provide the best solutions.",
        color: "text-orange-400"
    }
];

const STATS = [
    { value: "50+", label: "Projects Completed", icon: RocketIcon },
    { value: "25+", label: "Happy Clients", icon: HeartIcon },
    { value: "100%", label: "Success Rate", icon: TargetIcon },
    { value: "24/7", label: "Support Available", icon: ShieldCheckIcon }
];

const EXPERTISE = [
    { name: "Next.js", level: 95 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 92 },
    { name: "MongoDB", level: 85 },
    { name: "AWS", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "UI/UX", level: 82 }
];

const AboutPage = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Background similar to home page */}
            <div className="absolute flex lg:hidden size-40 rounded-full bg-purple-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20 lg:py-32">
                <Wrapper className="py-20 relative">
                    <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                        <OrbitingCircles speed={0.5} radius={300}>
                            <Icons.circle1 className="size-4 text-foreground/70" />
                            <Icons.circle2 className="size-1 text-foreground/80" />
                        </OrbitingCircles>
                        <OrbitingCircles speed={0.25} radius={400}>
                            <Icons.circle2 className="size-1 text-foreground/50" />
                            <Icons.circle1 className="size-4 text-foreground/60" />
                            <Icons.circle2 className="size-1 text-foreground/90" />
                        </OrbitingCircles>
                    </Container>

                    <Container>
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                                <StarIcon className="size-4 mr-2" />
                                About DevSomeware
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium !leading-tight">
                                Building the <span className="font-subheading italic">Future</span> <br />
                                of Digital Solutions
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl">
                                🌟 Hey there! Welcome to <span className="text-purple-400 font-semibold">DevSomeware</span> – your one-stop destination for innovative SaaS development, educational technology, and digital transformation. Let&apos;s grow, learn, and build amazing things together! 💡✨
                            </p>
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Mission & Vision Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative w-full max-w-6xl mx-auto">
                        <Container delay={0.2}>
                            <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                                <MagicCard
                                    gradientFrom="#8b5cf6"
                                    gradientTo="#a78bfa"
                                    gradientColor="rgba(59,130,246,0.1)"
                                    className="p-6 lg:p-8 w-full overflow-hidden h-full"
                                >
                                    <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <TargetIcon className="size-8 text-purple-400" />
                                            <h2 className="text-2xl font-heading font-semibold">Our Mission</h2>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            To transform innovative ideas into scalable, secure, and user-focused SaaS solutions that drive business growth and educational excellence. We believe in democratizing technology by making enterprise-grade solutions accessible to organizations of all sizes.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Innovation", "Quality", "Accessibility", "Growth"].map((tag) => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                        </Container>

                        <Container delay={0.3}>
                            <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                                <MagicCard
                                    gradientFrom="#8b5cf6"
                                    gradientTo="#a78bfa"
                                    gradientColor="rgba(59,130,246,0.1)"
                                    className="p-6 lg:p-8 w-full overflow-hidden h-full"
                                >
                                    <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <RocketIcon className="size-8 text-blue-400" />
                                            <h2 className="text-2xl font-heading font-semibold">Our Vision</h2>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            To become the leading SaaS development partner for educational institutions and enterprises worldwide, known for our innovative solutions, exceptional quality, and commitment to client success. We envision a future where technology seamlessly enhances learning and business operations.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Leadership", "Global Impact", "Excellence", "Future-Ready"].map((tag) => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                        </Container>
                    </div>
                </Wrapper>
            </section>

            {/* Values Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                                Our Core <span className="font-subheading italic">Values</span>
                            </h2>
                            <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                                The principles that guide everything we do and shape how we build relationships with our clients and community.
                            </p>
                        </div>
                    </Container>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full max-w-7xl mx-auto">
                        {VALUES.map((value, index) => (
                            <Container key={value.title} delay={0.1 + index * 0.1}>
                                <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                                    <MagicCard
                                        gradientFrom="#8b5cf6"
                                        gradientTo="#a78bfa"
                                        gradientColor="rgba(59,130,246,0.1)"
                                        className="p-6 w-full overflow-hidden h-full"
                                    >
                                        <div className="space-y-4">
                                            <value.icon className={`size-8 ${value.color}`} />
                                            <h3 className="text-xl font-semibold">{value.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </MagicCard>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Wrapper>
            </section>

            {/* Stats Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20 border-t border-b border-border/50">
                <Wrapper>
                    <Container>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {STATS.map((stat) => (
                                <div key={stat.label} className="space-y-2">
                                    <stat.icon className="size-8 mx-auto text-purple-400" />
                                    <div className="text-3xl md:text-4xl font-bold text-purple-400">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Expertise Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                                Technical <span className="font-subheading italic">Expertise</span>
                            </h2>
                            <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                                Our proficiency across modern technologies and frameworks that power today&apos;s most successful applications.
                            </p>
                        </div>
                    </Container>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {EXPERTISE.map((skill, index) => (
                            <Container key={skill.name} delay={0.1 + index * 0.05}>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-border/50 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Wrapper>
            </section>

            {/* Social Media Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                                Connect with <span className="font-subheading italic">DevSomeware</span>
                            </h2>
                            <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                                Join our community across multiple platforms for tech insights, behind-the-scenes content, and exciting updates! 🚀
                            </p>
                        </div>
                    </Container>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full max-w-6xl mx-auto">
                        {SOCIAL_LINKS.map((social, index) => (
                            <Container key={social.name} delay={0.1 + index * 0.1}>
                                <Link 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full hover:border-border transition-all duration-300 group-hover:scale-105">
                                        <MagicCard
                                            gradientFrom="#8b5cf6"
                                            gradientTo="#a78bfa"
                                            gradientColor="rgba(59,130,246,0.1)"
                                            className="p-6 w-full overflow-hidden h-full"
                                        >
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} text-white`}>
                                                        <social.icon className="size-6" />
                                                    </div>
                                                    <ExternalLinkIcon className="size-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                                                        {social.name}
                                                    </h3>
                                                    <p className="text-sm text-purple-400 font-medium">{social.handle}</p>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {social.description}
                                                </p>
                                            </div>
                                        </MagicCard>
                                    </div>
                                </Link>
                            </Container>
                        ))}
                    </div>

                    <Container delay={0.8}>
                        <div className="text-center mt-12">
                            <p className="text-lg text-muted-foreground mb-6">
                                🌍 Visit our main website: <Link href="https://www.devsomeware.com" target="_blank" className="text-purple-400 hover:text-purple-300 underline transition-colors">devsomeware.com</Link>
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                                <span>Let&apos;s grow, learn, and build amazing things together!</span>
                                <span className="text-purple-400">#DevSomeware 💻🌟</span>
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Team Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                                Meet Our <span className="font-subheading italic">Team</span>
                            </h2>
                            <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                                Passionate developers, designers, and innovators working together to create exceptional digital experiences.
                            </p>
                        </div>
                    </Container>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                role: "Full-Stack Developers",
                                count: "6+",
                                description: "Expert developers specializing in React, Next.js, Node.js, and modern web technologies",
                                icon: CodeIcon,
                                color: "text-blue-400"
                            },
                            {
                                role: "DevOps Engineers",
                                count: "2+",
                                description: "Cloud infrastructure specialists ensuring scalable and secure deployments",
                                icon: ShieldCheckIcon,
                                color: "text-green-400"
                            },
                            {
                                role: "UI/UX Designers",
                                count: "3+",
                                description: "Creative designers crafting intuitive and beautiful user experiences",
                                icon: LightbulbIcon,
                                color: "text-purple-400"
                            }
                        ].map((team, index) => (
                            <Container key={team.role} delay={0.2 + index * 0.1}>
                                <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                                    <MagicCard
                                        gradientFrom="#8b5cf6"
                                        gradientTo="#a78bfa"
                                        gradientColor="rgba(59,130,246,0.1)"
                                        className="p-6 w-full overflow-hidden h-full text-center"
                                    >
                                        <div className="space-y-4">
                                            <team.icon className={`size-12 mx-auto ${team.color}`} />
                                            <div>
                                                <div className={`text-3xl font-bold ${team.color}`}>{team.count}</div>
                                                <h3 className="text-xl font-semibold mt-2">{team.role}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {team.description}
                                            </p>
                                        </div>
                                    </MagicCard>
                                </div>
                            </Container>
                        ))}
                    </div>
                </Wrapper>
            </section>

            {/* CTA Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <Container className="py-20 max-w-6xl mx-auto">
                        <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[5rem] -z-10"></div>
                            
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                                Ready to start your <br />
                                <span className="font-subheading italic">digital journey</span>?
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                                Let&apos;s collaborate to transform your ideas into powerful, scalable SaaS solutions that drive growth and innovation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Link href="#consultation">
                                    <Button size="lg" variant="blue">
                                        Start Your Project
                                    </Button>
                                </Link>
                                <Link href="/products">
                                    <Button size="lg" variant="outline">
                                        View Our Work
                                    </Button>
                                </Link>
                            </div>

                            {/* Social Links in CTA */}
                            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/30">
                                <span className="text-sm text-muted-foreground">Follow us:</span>
                                {SOCIAL_LINKS.slice(0, 4).map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                                    >
                                        <social.icon className="size-4 text-muted-foreground hover:text-purple-400 transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            </section>
        </div>
    );
};

export default AboutPage;