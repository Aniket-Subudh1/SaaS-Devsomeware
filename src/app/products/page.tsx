"use client"
import Image from "next/image";
import Link from "next/link";
import { StarIcon, CalendarIcon, CodeIcon, DatabaseIcon, CloudIcon } from "lucide-react";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib";



interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    category: "Enterprise SaaS" | "Startup MVP" | "E-commerce" | "Analytics" | "Developer Tools" | "Mobile App" | "EdTech" | "DevOps Platform" | "ERP System" | "Placement Portal" | "Testing Platform" | "Custom Development";
    technologies: string[];
    features: string[];
    status: "Completed" | "In Development" | "Deployed" | "Beta Testing";
    projectDuration: string;
    teamSize: string;
    client: string;
    challenges: string[];
    outcomes: string[];
}

const PROJECTS: Project[] = [
    {
        id: "lms-platform",
        title: "LMS - Learning Management System",
        description: "Comprehensive learning management platform with video streaming, assignments, live testing, real-time chat, and multi-role management for educational institutions.",
        longDescription: "A full-featured Learning Management System designed for educational institutions to manage courses, students, and instructors. The platform supports video streaming for lectures, assignment management, real-time testing with proctoring, live chat functionality, and comprehensive course creation tools. Built with role-based access for admins, trainers, and trainees with team collaboration features.",
        image: "/L1.png",
        category: "EdTech",
        technologies: ["Next.js", "TypeScript", "Redis", "MongoDB", "AWS S3", "WebSockets", "Node.js"],
        features: [
            "HD Video streaming with adaptive quality",
            "Real-time assignment submission & grading",
            "Live proctored testing system",
            "Multi-user chat with file sharing",
            "Course creation & management tools",
            "Team formation & project assignment",
            "Automated attendance tracking",
            "Performance analytics & reporting",
            "Mobile-responsive design",
            "Notification system"
        ],
        status: "Completed",
        projectDuration: "1 months",
        teamSize: "2 developers",
        client: "Educational Institution",
        challenges: [
            "Real-time video streaming optimization",
            "Scalable chat system for concurrent users",
            "Secure testing environment with anti-cheating",
            "Complex role-based permission system"
        ],
        outcomes: [
            "Improved student engagement by 40%",
            "Reduced administrative workload by 60%",
            "Successfully handles 1000+ concurrent users",
            "Zero downtime during peak usage"
        ]
    },
    {
        id: "deploylite-platform",
        title: "DeployLite - Cloud Hosting Platform",
        description: "Microservice-based hosting platform similar to Vercel with custom cloud integration, automated CI/CD pipelines, AI code quality checks, and automatic containerization.",
        longDescription: "DeployLite is a comprehensive cloud hosting platform built on microservice architecture that provides seamless deployment experiences for developers. Features include automatic dockerization, AI-powered code quality analysis, custom cloud service integrations, and robust CI/CD pipelines with AWS infrastructure.",
        image: "/L2.png",
        category: "DevOps Platform",
        technologies: ["Next.js", "Node.js", "React", "TypeScript", "AWS S3", "EC2", "VPC", "Docker", "Kubernetes"],
        features: [
            "One-click deployment from Git repositories",
            "Automatic Docker containerization",
            "AI-powered code quality analysis",
            "Custom CI/CD pipeline builder",
            "Real-time deployment logs",
            "Auto-scaling infrastructure",
            "Custom domain management",
            "Environment variable management",
            "Team collaboration tools",
            "Usage analytics & billing"
        ],
        status: "Completed",
        projectDuration: "5 months",
        teamSize: "2 developers",
        client: "SaaS Startup",
        challenges: [
            "Building scalable microservice architecture",
            "Implementing secure container orchestration",
            "AI integration for code analysis",
            "Managing complex AWS infrastructure"
        ],
        outcomes: [
            "Reduced deployment time by 80%",
            "99.9% uptime achieved",
            "Serves 500+ active projects",
            "Automated scaling saves 50% on costs"
        ]
    },
    {
        id: "college-erp-system",
        title: "College ERP Management System",
        description: "Comprehensive ERP solution for educational institutions with student management, faculty administration, academic planning, financial management, and institutional analytics.",
        longDescription: "A complete Enterprise Resource Planning system specifically designed for colleges and universities. The system handles student admissions, academic records, faculty management, course scheduling, fee management, library systems, examination management, and comprehensive reporting for institutional decision-making.",
        image: "/L3.png",
        category: "ERP System",
        technologies: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "React"],
        features: [
            "Student admission & enrollment management",
            "Academic record & transcript generation",
            "Faculty scheduling & workload management",
            "Course catalog & curriculum planning",
            "Fee collection & financial reporting",
            "Library management system",
            "Examination & grading system",
            "Hostel & transportation management",
            "Alumni tracking & engagement",
            "Institutional analytics dashboard"
        ],
        status: "Completed",
        projectDuration: "4 months",
        teamSize: "4 developers",
        client: "Multi-Campus College",
        challenges: [
            "Integrating complex academic workflows",
            "Managing large datasets efficiently",
            "Creating flexible reporting system",
            "Ensuring data security & privacy"
        ],
        outcomes: [
            "Streamlined 15+ administrative processes",
            "Reduced paperwork by 90%",
            "Improved data accuracy by 95%",
            "Enhanced decision-making with real-time analytics"
        ]
    },
    {
        id: "placement-portal",
        title: "Placement Management Portal",
        description: "Career services platform for colleges to manage campus placements, company partnerships, student profiles, interview scheduling, and placement analytics.",
        longDescription: "A comprehensive placement management system that connects students, companies, and college placement cells. The platform manages student profiles, company requirements, interview processes, job postings, and provides detailed analytics for placement performance tracking.",
        image: "/L4.png",
        category: "Placement Portal",
        technologies: ["Node.js", "Next.js", "TypeScript", "MongoDB", "AWS", "React"],
        features: [
            "Student profile & resume builder",
            "Company registration & job posting",
            "Interview scheduling & calendar management",
            "Automated application matching",
            "Document verification system",
            "Communication portal for all stakeholders",
            "Placement statistics & reporting",
            "Offer letter management",
            "Alumni network integration",
            "Mobile app for notifications"
        ],
        status: "Completed",
        projectDuration: "2 months",
        teamSize: "2 developers",
        client: "Engineering College",
        challenges: [
            "Complex matching algorithms for student-job fit",
            "Managing high-volume application processing",
            "Real-time communication between stakeholders",
            "Secure document handling"
        ],
        outcomes: [
            "Increased placement rate by 35%",
            "Reduced coordination time by 70%",
            "Automated 80% of placement processes",
            "Improved company satisfaction scores"
        ]
    },
    {
        id: "secure-testing-platform",
        title: "Secure Online Testing Platform",
        description: "High-security online examination platform with advanced anti-cheating mechanisms, real-time proctoring, secure browser technology, and comprehensive analytics.",
        longDescription: "A robust online testing platform designed for high-stakes examinations with multiple layers of security to prevent cheating. Features include browser lockdown, webcam monitoring, plagiarism detection, and AI-powered behavior analysis to ensure exam integrity.",
        image: "/L5.png",
        category: "Testing Platform",
        technologies: ["Node.js", "Next.js", "TypeScript", "WebRTC", "AI/ML", "Redis", "PostgreSQL"],
        features: [
            "Secure browser lockdown technology",
            "Real-time webcam & screen monitoring",
            "AI-powered behavior analysis",
            "Plagiarism detection algorithms",
            "Question randomization & time limits",
            "Auto-save & recovery mechanisms",
            "Detailed exam analytics",
            "Multi-format question support",
            "Instant result generation",
            "Accessibility compliance"
        ],
        status: "Completed",
        projectDuration: "2 months",
        teamSize: "2 developers",
        client: "Certification Body",
        challenges: [
            "Implementing foolproof anti-cheating measures",
            "Ensuring platform stability under load",
            "Real-time monitoring without privacy invasion",
            "Cross-browser compatibility for secure features"
        ],
        outcomes: [
            "99.5% cheating prevention rate",
            "Handles 2000+ concurrent test-takers",
            "Reduced exam administration costs by 60%",
            "Achieved international security certifications"
        ]
    },
    {
        id: "custom-development-services",
        title: "Custom Development Solutions",
        description: "On-demand development services for educational institutions including complete websites, QR-based attendance systems, e-commerce platforms, and specialized institutional tools.",
        longDescription: "Comprehensive custom development services tailored to institutional needs. This includes building complete college websites, implementing QR code-based attendance tracking systems, developing e-commerce platforms for institutional merchandise, and creating specialized tools based on specific requirements.",
        image: "/L6.png",
        category: "Custom Development",
        technologies: ["Next.js", "Node.js", "React", "TypeScript", "MongoDB", "PostgreSQL", "QR Code APIs", "Payment Gateways"],
        features: [
            "Custom institutional websites",
            "QR code attendance tracking system",
            "E-commerce platform development",
            "Mobile application development",
            "API integration services",
            "Database design & optimization",
            "Third-party service integration",
            "Content management systems",
            "Analytics & reporting tools",
            "Maintenance & support services"
        ],
        status: "Completed",
        projectDuration: "Ongoing Projects",
        teamSize: "3-8 developers per project",
        client: "Multiple Institutions",
        challenges: [
            "Adapting to diverse client requirements",
            "Ensuring scalability across different project sizes",
            "Meeting tight deadlines for institutional needs",
            "Maintaining quality across varied project types"
        ],
        outcomes: [
            "Delivered 25+ custom solutions",
            "95% client satisfaction rate",
            "Average 40% improvement in operational efficiency",
            "Long-term partnerships with 15+ institutions"
        ]
    }
];

const getTechIcon = (tech: string) => {
    const techIcons: Record<string, React.ReactNode> = {
        "Next.js": <CodeIcon className="size-4" />,
        "React": <CodeIcon className="size-4" />,
        "Node.js": <DatabaseIcon className="size-4" />,
        "TypeScript": <CodeIcon className="size-4" />,
        "MongoDB": <DatabaseIcon className="size-4" />,
        "PostgreSQL": <DatabaseIcon className="size-4" />,
        "Redis": <DatabaseIcon className="size-4" />,
        "AWS": <CloudIcon className="size-4" />,
        "AWS S3": <CloudIcon className="size-4" />,
        "EC2": <CloudIcon className="size-4" />,
        "VPC": <CloudIcon className="size-4" />,
        "WebSockets": <CodeIcon className="size-4" />,
        "Docker": <CloudIcon className="size-4" />,
        "Kubernetes": <CloudIcon className="size-4" />,
        "WebRTC": <CodeIcon className="size-4" />,
        "AI/ML": <CodeIcon className="size-4" />,
        "QR Code APIs": <CodeIcon className="size-4" />,
        "Payment Gateways": <DatabaseIcon className="size-4" />
    };
    return techIcons[tech] || <CodeIcon className="size-4" />;
};

const getStatusColor = (status: Project["status"]) => {
    const colors = {
        "Completed": "bg-green-500/20 text-green-400 border-green-500/30",
        "Deployed": "bg-blue-500/20 text-blue-400 border-blue-500/30",
        "In Development": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        "Beta Testing": "bg-purple-500/20 text-purple-400 border-purple-500/30"
    };
    return colors[status];
};

const ProductsPage = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Background similar to home page */}
            <div className="absolute flex lg:hidden size-40 rounded-full bg-purple-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-20 lg:py-32">
                <Wrapper className="py-20 relative">
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                                <StarIcon className="size-4 mr-2" />
                                Our Portfolio
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium !leading-tight">
                                Innovative <span className="font-subheading italic">SaaS Solutions</span> <br />
                                We&apos;ve Built
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl">
                                Explore our portfolio of cutting-edge SaaS products and platforms. From enterprise solutions to startup MVPs, discover how we transform ideas into scalable digital products.
                            </p>
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Stats Section */}
            <section className="relative flex flex-col items-center justify-center w-full py-12 border-t border-b border-border/50">
                <Wrapper>
                    <Container>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-purple-400">12+</div>
                                <div className="text-sm text-muted-foreground mt-1">Products Built</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-400">20K+</div>
                                <div className="text-sm text-muted-foreground mt-1">Active Users</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-400">4.8</div>
                                <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-400">99.9%</div>
                                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            </section>

            {/* Projects Grid */}
            <section className="relative flex flex-col items-center justify-center w-full py-20">
                <Wrapper>
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                                Featured <span className="font-subheading italic">Projects</span>
                            </h2>
                            <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                                Each project represents our commitment to building scalable, secure, and user-focused SaaS solutions that drive business growth.
                            </p>
                        </div>
                    </Container>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full max-w-6xl mx-auto">
                        {PROJECTS.map((project, index) => (
                            <Container key={project.id} delay={0.1 + index * 0.1}>
                                <ProjectCard project={project} />
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
                                Ready to build your <br />
                                <span className="font-subheading italic">next project</span>?
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                                Let&apos;s discuss how we can bring your vision to life with our expertise in building scalable SaaS solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button 
                                    size="lg" 
                                    variant="blue"
                                    onClick={() => window.open('https://cal.com/devsomeware-jqvlc6/discovery-calls', '_blank', 'noopener,noreferrer')}
                                    className="group"
                                >
                                    
                                    <CalendarIcon className="size-4 mr-2" />
                                    Start Your Project
                                </Button>
                                
                                <Link href="/products">
                                    <Button size="lg" variant="outline">
                                        View Our Work
                                    </Button>
                                </Link>
                            </div>
                                
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            </section>
        </div>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
            <MagicCard
                gradientFrom="#8b5cf6"
                gradientTo="#a78bfa"
                gradientColor="rgba(59,130,246,0.1)"
                className="p-4 lg:p-8 w-full overflow-hidden h-full"
            >
                <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                
                <div className="space-y-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <div className={cn(
                                    "px-2 py-1 rounded-full text-xs font-medium border",
                                    getStatusColor(project.status)
                                )}>
                                    {project.status}
                                </div>
                            </div>
                            <div className="px-2 py-1 rounded-md bg-muted/50 text-xs font-medium w-fit">
                                {project.category}
                            </div>
                        </div>
                    </div>

                    {/* Project Image */}
                    <div className="w-full bg-card/50 rounded-lg overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                        <h4 className="text-sm font-medium mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <div
                                    key={tech}
                                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted/50 text-xs"
                                >
                                    {getTechIcon(tech)}
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Features */}
                    <div>
                        <h4 className="text-sm font-medium mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0"></div>
                                    <span className="line-clamp-1">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                            

                        </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                        <h4 className="text-sm font-medium mb-3">Key Outcomes</h4>
                        <div className="space-y-1">
                            {project.outcomes.slice(0, 2).map((outcome, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0"></div>
                                    <span className="line-clamp-1">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/20">
                        <span>Client: {project.client}</span>
                        <span className="text-purple-400 font-medium">{project.category}</span>
                    </div>
                </div>
            </MagicCard>
        </div>
    );
};

export default ProductsPage;
