import { Metadata } from "next";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";

export const metadata: Metadata = {
    title: "Privacy Policy - DevSomeware",
    description: "Learn how DevSomeware collects, uses, and protects your personal information in compliance with GDPR and privacy regulations.",
};

const PrivacyPolicyPage = () => {
    return (
        <div className="relative w-full min-h-screen">
            <section className="relative py-20 pt-32">
                <Wrapper>
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                    Privacy Policy
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Last updated: {new Date().toLocaleDateString()}
                                </p>
                            </div>

                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                                    <p>
                                        We collect information you provide directly to us, such as when you create an account, 
                                        contact us, or use our services. This may include your name, email address, company 
                                        information, and project details.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>To provide and improve our services</li>
                                        <li>To communicate with you about your projects</li>
                                        <li>To send you technical updates and security alerts</li>
                                        <li>To comply with legal obligations</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                                    <p>
                                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                                        without your consent, except as described in this policy or as required by law.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                                    <p>
                                        We implement appropriate security measures to protect your personal information against 
                                        unauthorized access, alteration, disclosure, or destruction.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
                                    <p>
                                        If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicyPage;