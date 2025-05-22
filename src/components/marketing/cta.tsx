"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#8b5cf6"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#8b5cf6"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #8b5cf6 0deg, #a78bfa 180deg, #8b5cf6 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
                        Ready to build your <br /> <span className="font-subheading italic">SaaS solution</span> ?
                    </h2>
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4">
                        Transform your ideas into scalable SaaS applications. Get expert development, modern architecture <span className="hidden lg:inline">and enterprise-grade solutions in weeks, not months.</span>
                    </p>
                    <Link href="#consultation" className="mt-8">
                        <Button size="lg">
                            Schedule a consultation
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
};

export default CTA;