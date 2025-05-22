import {
    LayoutTemplateIcon,
    BriefcaseIcon,
    Code2Icon,
    ServerCogIcon,
    BarChart4Icon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Modular Feature Deployment",
        description: "Ship your web apps as standalone, reusable features — ideal for scaling SaaS products or delivering custom client modules.",
        icon: LayoutTemplateIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Freelance & Client Workspace",
        description: "Manage all freelance and agency projects in one dashboard — including timelines, deliverables, and scoped features.",
        icon: BriefcaseIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Developer-First Workflow",
        description: "Built for devs — with support for GitHub, Docker, CI/CD, and hot reload environments for every project or product sprint.",
        icon: Code2Icon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Infrastructure Made Easy",
        description: "Provision, manage, and monitor backend services, databases, and APIs with no DevOps overhead — optimized for speed and reliability.",
        icon: ServerCogIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Insightful Project Analytics",
        description: "Understand how clients interact with delivered features, monitor performance, and optimize future deliverables with real usage data.",
        icon: BarChart4Icon,
        image: "/images/feature-five.svg",
    }
];
