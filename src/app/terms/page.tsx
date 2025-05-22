import { Metadata } from "next";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";

export const metadata: Metadata = {
    title: "Terms of Service - DevSomeware",
    description: "Read DevSomeware's terms of service and user agreement for our SaaS development services and platform.",
};

const TermsOfServicePage = () => {
    return (
        <div className="relative w-full min-h-screen">
            <section className="relative py-20 pt-32">
                <Wrapper>
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                    Terms of Service
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Last updated: {new Date().toLocaleDateString()}
                                </p>
                            </div>

                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                                    <p>
                                        By accessing and using DevSomeware&apos;s services, you accept and agree to be bound by 
                                        the terms and provision of this agreement.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                                    <p>
                                        DevSomeware provides SaaS development services, educational technology solutions, 
                                        and custom software development. We reserve the right to modify or discontinue 
                                        any service at any time.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Provide accurate and complete information</li>
                                        <li>Use our services in compliance with applicable laws</li>
                                        <li>Respect intellectual property rights</li>
                                        <li>Maintain the security of your account</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                                    <p>
                                        All content, features, and functionality of our services are owned by DevSomeware 
                                        or its licensors and are protected by intellectual property laws.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                                    <p>
                                        DevSomeware shall not be liable for any indirect, incidental, special, consequential, 
                                        or punitive damages arising from your use of our services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Information</h2>
                                    <p>
                                        For questions about these Terms of Service, contact us at{" "}
                                        <a href="mailto:team@devsomeware.com" className="text-purple-400 hover:text-purple-300 underline">
                                            team@devsomeware.com
                                        </a>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            </section>
        </div>
    );
};

export default TermsOfServicePage;