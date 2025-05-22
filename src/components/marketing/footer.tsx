import Link from "next/link";
import Container from "../global/container";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/kk.png" 
                                alt="logo"  
                                className="h-8 w-auto"  
                                width={32}
                                height={32}
                            />
                            <span className="text-base md:text-lg font-medium text-foreground">
                                SaaS DevSomeware
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Enterprise-grade SaaS development platform. Build scalable applications with modern architecture, from MVP to enterprise scale.
                        </p>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Services
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        SaaS Development
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Multi-Tenant Architecture
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Cloud Infrastructure
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        API Development
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Solutions
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Enterprise SaaS
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Startup MVPs
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Agency Partnerships
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Freelance Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Tech Stack Guide
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Case Studies
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Development Blog
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        SaaS Best Practices
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.4} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            About DevSomeware
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Schedule Consultation
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} SaaS DevSomeware - A DevSomeware Company. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;