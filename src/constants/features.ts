import {
    LayoutTemplateIcon,
    BriefcaseIcon,
    Code2Icon,
    ServerCogIcon,
    BarChart4Icon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Multi-Tenant Architecture",
        description: "Build scalable SaaS applications with enterprise-grade multi-tenancy, data isolation, and customizable tenant configurations out of the box.",
        icon: LayoutTemplateIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Enterprise SaaS Framework",
        description: "Accelerate development with pre-built SaaS components including subscription management, user authentication, billing integration, and admin dashboards.",
        icon: BriefcaseIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Cloud-Native Development",
        description: "Leverage containerized microservices, Kubernetes orchestration, and automated CI/CD pipelines designed specifically for SaaS deployment at scale.",
        icon: Code2Icon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Managed Cloud Infrastructure",
        description: "Deploy on auto-scaling cloud infrastructure with built-in monitoring, security compliance, and global CDN — no infrastructure management required.",
        icon: ServerCogIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "SaaS Performance Insights",
        description: "Monitor tenant usage patterns, application performance, subscription metrics, and user engagement with comprehensive analytics tailored for SaaS businesses.",
        icon: BarChart4Icon,
        image: "/images/feature-five.svg",
    }
];