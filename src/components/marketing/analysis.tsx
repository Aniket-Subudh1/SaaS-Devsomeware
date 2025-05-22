import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Services = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Scalable SaaS <br /><span className="font-subheading italic">solutions</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        From MVP to enterprise scale - we deliver feature-rich SaaS products with responsive design and modular architecture that grows with your business.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full max-w-6xl mx-auto">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                        <MagicCard
                            gradientFrom="#8b5cf6"
                            gradientTo="#a78bfa"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden h-full"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    SaaS Development Services
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    End-to-end SaaS development with modular features and responsive design.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                100+
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                SaaS products delivered
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Service</div>
                                            <div>Features</div>
                                            <div>Scale</div>
                                            <div>Timeline</div>
                                        </div>
                                        {[
                                            { name: "MVP Build", features: "Core", scale: "Startup", timeline: "4-6 weeks" },
                                            { name: "Feature Add-ons", features: "Modular", scale: "Growth", timeline: "2-3 weeks" },
                                            { name: "Enterprise", features: "Custom", scale: "Large", timeline: "8-12 weeks" },
                                        ].map((service) => (
                                            <div key={service.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{service.name}</div>
                                                <div>{service.features}</div>
                                                <div>{service.scale}</div>
                                                <div className="font-semibold">{service.timeline}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                        <MagicCard
                            gradientFrom="#8b5cf6"
                            gradientTo="#a78bfa"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden h-full"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Freelance & Agency Solutions
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Professional SaaS development for agencies and freelance projects with responsive UI.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">50+</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                Active partnerships
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Freelance Services Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Service Type</div>
                                            <div>UI/UX</div>
                                            <div>Features</div>
                                            <div>Support</div>
                                        </div>
                                        {[
                                            { type: "Web Apps", ui: "Responsive", features: "Modular", support: "24/7" },
                                            { type: "Mobile SaaS", ui: "Adaptive", features: "Custom", support: "Priority" },
                                            { type: "API Services", ui: "Dashboard", features: "Scalable", support: "Dedicated" },
                                        ].map((service) => (
                                            <div key={service.type} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{service.type}</div>
                                                <div>{service.ui}</div>
                                                <div>{service.features}</div>
                                                <div className="font-semibold">{service.support}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Services;