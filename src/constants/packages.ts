export type PACKAGE = {
    id: string;
    title: string;
    desc: string;
    discoveryDuration: string;
    strategyDuration: string;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const CONSULTATION_PACKAGES: PACKAGE[] = [
    {
        id: "startup",
        title: "Startup Consultation",
        desc: "Perfect for entrepreneurs and startups looking to build their first SaaS product with scalable architecture and modern tech stack.",
        discoveryDuration: "30 min",
        strategyDuration: "60 min",
        buttonText: "Schedule Free Call",
        features: [
            "SaaS architecture planning",
            "Technology stack recommendations",
            "MVP feature roadmap",
            "Development timeline estimation",
            "Deployment strategy discussion",
            "Basic cost estimation",
            "Resource requirements analysis"
        ],
        link: "#"
    },
    {
        id: "enterprise",
        title: "Enterprise Consultation",
        desc: "Comprehensive consultation for established businesses and agencies needing enterprise-grade SaaS solutions with custom integrations.",
        discoveryDuration: "45 min",
        strategyDuration: "90 min",
        badge: "Most Popular",
        buttonText: "Book Strategy Session",
        features: [
            "Enterprise architecture design",
            "Multi-tenant strategy planning",
            "Custom integration roadmap",
            "Scalability & performance planning",
            "Security & compliance review",
            "Team augmentation options",
            "Detailed project proposal",
            "Ongoing support planning"
        ],
        link: "#"
    }
];

export const CONSULTATION_FAQ = [
    {
        id: 1,
        question: "How does the consultation process work?",
        answer: "We start with a discovery call to understand your requirements, followed by a detailed strategy session where we create a custom development plan and proposal for your SaaS project."
    },
    {
        id: 2,
        question: "Do you work with both startups and enterprises?",
        answer: "Yes! We have experience building SaaS solutions for early-stage startups to Fortune 500 companies, adapting our approach to match your scale and requirements."
    },
    {
        id: 3,
        question: "What happens after the consultation?",
        answer: "You'll receive a detailed project proposal with timeline, technology recommendations, cost estimates, and next steps. No obligation to proceed - the consultation is designed to help you make informed decisions."
    },
    {
        id: 4,
        question: "Do you offer ongoing development services?",
        answer: "Absolutely! Beyond consultation, we provide end-to-end SaaS development, from MVP to enterprise scale, including ongoing maintenance and feature development."
    },
    {
        id: 5,
        question: "Can you help with existing SaaS applications?",
        answer: "Yes, we offer consultation for existing SaaS products including performance optimization, feature enhancements, scalability improvements, and modernization strategies."
    },
    {
        id: 6,
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern SaaS technologies including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), microservices architecture, and database design."
    },
    {
        id: 7,
        question: "Do you provide freelance developer resources?",
        answer: "Yes, we offer both full project development and individual developer resources for agencies and companies needing to augment their development teams."
    },
    {
        id: 8,
        question: "How do you handle project pricing?",
        answer: "All pricing is custom and determined after understanding your specific requirements. We provide transparent, detailed proposals with no hidden costs after our consultation sessions."
    },
    {
        id: 9,
        question: "What about mobile app development for SaaS?",
        answer: "We develop responsive web applications and native mobile apps as part of comprehensive SaaS solutions, ensuring your users have great experiences across all devices."
    }
];

export const CONSULTATION_SERVICES = [
    {
        id: 1,
        title: 'SaaS MVP Development',
        timeframe: '4-8 weeks',
        approach: 'Agile Development',
        buttonText: 'Discuss MVP',
        scope: {
            consultation: 'Free 30min call',
            planning: 'Architecture design',
            development: 'Core features',
            deployment: 'Cloud hosting',
        },
        features: [
            'User authentication & management',
            'Subscription billing integration',
            'Responsive admin dashboard',
            'API development',
            'Database design',
            'Cloud deployment',
            'Basic analytics',
            'Documentation',
        ],
    },
    {
        id: 2,
        title: 'Enterprise SaaS Platform',
        timeframe: '3-6 months',
        approach: 'Custom Development',
        buttonText: 'Plan Enterprise Solution',
        scope: {
            consultation: 'Strategy session',
            planning: 'Enterprise architecture',
            development: 'Full-scale build',
            deployment: 'Multi-region hosting',
        },
        features: [
            'Multi-tenant architecture',
            'Advanced user roles & permissions',
            'Custom integrations & APIs',
            'Enterprise security features',
            'Advanced analytics & reporting',
            'White-label capabilities',
            'Dedicated support',
            'Scalable infrastructure',
            'Compliance & security audits',
        ],
    },
    {
        id: 3,
        title: 'Freelance & Agency Support',
        timeframe: 'Flexible',
        approach: 'Team Augmentation',
        buttonText: 'Explore Partnership',
        scope: {
            consultation: 'Partnership discussion',
            planning: 'Resource allocation',
            development: 'Skilled developers',
            deployment: 'Client delivery',
        },
        features: [
            'Experienced SaaS developers',
            'Flexible engagement models',
            'Modern tech stack expertise',
            'Quality assurance',
            'Client communication support',
            'Project management',
            'Code documentation',
            'Knowledge transfer',
            'Ongoing maintenance',
        ],
    },
];