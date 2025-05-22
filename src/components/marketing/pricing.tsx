"use client";

import { CONSULTATION_PACKAGES } from "@/constants";
import { PACKAGE } from "@/constants/packages";
import { cn } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, CalendarIcon } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";
import { Button } from "../ui/button";

type ConsultationType = "discovery" | "strategy";

const Consultation = () => {

    const [consultationType, setConsultationType] = useState<ConsultationType>("discovery");

    const handleSwitch = () => {
        setConsultationType((prev) => (prev === "discovery" ? "strategy" : "discovery"));
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                            Let&apos;s discuss your project <br className="hidden lg:block" /> <span className="font-subheading italic">requirements</span>
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                            Every SaaS project is unique. Schedule a consultation to discuss your vision, requirements, and get a custom proposal tailored to your needs.
                        </p>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <span className="text-base font-medium">Discovery Call</span>
                        <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
                            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-purple-500"></div>
                            <div
                                className={cn(
                                    "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                                    consultationType === "strategy" ? "translate-x-6" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className="text-base font-medium">Strategy Session</span>
                    </div>
                </Container>
            </div>

            <div className="grid w-full grid-cols-1 lg:grid-cols-2 pt-8 lg:pt-12 gap-4 lg:gap-6 max-w-4xl mx-auto">
                {CONSULTATION_PACKAGES.map((package_item, idx) => (
                    <Container key={idx} delay={0.1 * idx + 0.2}>
                        <Package key={package_item.id} package_item={package_item} consultationType={consultationType} />
                    </Container>
                ))}
            </div>
        </div>
    );
};

const Package = ({ package_item, consultationType }: { package_item: PACKAGE, consultationType: ConsultationType }) => {
    return (
        <div className={cn(
            "flex flex-col relative rounded-2xl lg:rounded-3xl transition-all bg-background/ items-start w-full border border-foreground/10 overflow-hidden",
            package_item.title === "Enterprise Consultation" && "border-purple-500"
        )}>
            {package_item.title === "Enterprise Consultation" && (
                <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-purple-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
            )}

            <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
                <h2 className="font-medium text-xl text-foreground pt-5">
                    {package_item.title}
                </h2>
                <h3 className="mt-3 text-3xl font-medium md:text-5xl flex items-center gap-2">
                    <CalendarIcon className="size-8 text-purple-500" />
                    <span className="text-2xl md:text-4xl">
                        {consultationType === "discovery" ? package_item.discoveryDuration : package_item.strategyDuration}
                    </span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                    {package_item.desc}
                </p>
            </div>
            <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
                <Button size="lg" variant={package_item.title === "Enterprise Consultation" ? "blue" : "white"} className="w-full">
                    {package_item.buttonText}
                </Button>
                <div className="h-8 overflow-hidden w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={consultationType}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
                        >
                            {consultationType === "discovery" ? (
                                "Free initial consultation"
                            ) : (
                                "In-depth planning session"
                            )}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex flex-col items-start w-full p-5 mb-4 ml-1 gap-y-2">
                <span className="text-base text-left mb-2">
                    What&apos;s included: 
                </span>
                {package_item.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                        <div className="flex items-center justify-center">
                            <CheckIcon className="size-5" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Consultation;