"use client"
import { TECH_STACK } from "@/constants/technologies";
import Container from "../global/container";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib";

const TechExpertise = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const categories = [
        { id: "all", name: "All Technologies", count: TECH_STACK.length },
        { id: "frontend", name: "Frontend", count: TECH_STACK.filter(tech => tech.category === "frontend").length },
        { id: "backend", name: "Backend", count: TECH_STACK.filter(tech => tech.category === "backend").length },
        { id: "database", name: "Database", count: TECH_STACK.filter(tech => tech.category === "database").length },
        { id: "cloud", name: "Cloud & DevOps", count: TECH_STACK.filter(tech => ["cloud", "devops"].includes(tech.category)).length },
        { id: "mobile", name: "Mobile & API", count: TECH_STACK.filter(tech => ["mobile", "api", "integration"].includes(tech.category)).length },
    ];

    const filteredTechnologies = activeCategory === "all" 
        ? TECH_STACK 
        : TECH_STACK.filter(tech => {
            if (activeCategory === "mobile") {
                return ["mobile", "api", "integration"].includes(tech.category);
            }
            if (activeCategory === "cloud") {
                return ["cloud", "devops"].includes(tech.category);
            }
            return tech.category === activeCategory;
        });

    return (
        <div className="relative flex flex-col items-center justify-center max-w-6xl py-20 mx-auto">
            <Container>
                <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mb-6">
                        Powered by <span className="text-purple-500">50+</span> cutting-edge <span className="font-subheading italic">technologies</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4 max-w-2xl">
                        From modern frontend frameworks to enterprise cloud infrastructure, we leverage the best technologies to build scalable, secure, and high-performance SaaS applications.
                    </p>
                </div>
            </Container>

            <Container delay={0.2}>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                "border border-border/50 hover:border-border",
                                activeCategory === category.id
                                    ? "bg-purple-500 text-white border-purple-500 shadow-lg"
                                    : "bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background/80"
                            )}
                        >
                            {category.name} ({category.count})
                        </button>
                    ))}
                </div>
            </Container>

            <div className="relative w-full max-w-5xl mx-auto">
                <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full -rotate-12 blur-[10rem] -z-10"></div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
                    {filteredTechnologies.map((tech, idx) => (
                        <Container
                            key={`${tech.name}-${activeCategory}`}
                            delay={0.05 * idx}
                            className="group"
                        >
                            <div className="flex flex-col items-center p-4 rounded-xl border border-border/30 bg-background/40 backdrop-blur-sm hover:border-border hover:bg-background/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <span className="text-sm font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors">
                                    {tech.name}
                                </span>
                                <div className="mt-1 px-2 py-1 rounded-full bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs text-muted-foreground capitalize">
                                        {tech.category}
                                    </span>
                                </div>
                            </div>
                        </Container>
                    ))}
                </div>
            </div>

            {/* Statistics */}
            <Container delay={0.6}>
                <div className="mt-16 p-8 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-purple-500">6</div>
                            <div className="text-sm text-muted-foreground">Frontend Frameworks</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-green-500">10</div>
                            <div className="text-sm text-muted-foreground">Backend Technologies</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-purple-500">12</div>
                            <div className="text-sm text-muted-foreground">Database & Cloud</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-orange-500">20+</div>
                            <div className="text-sm text-muted-foreground">DevOps & Tools</div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border/30">
                        <p className="text-center text-muted-foreground">
                            <span className="font-semibold text-foreground">Enterprise-ready stack</span> with proven scalability for startups to Fortune 500 companies
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TechExpertise;