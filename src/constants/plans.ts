type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "starter",
        title: "Starter",
        desc: "Perfect for small businesses getting started with wireless device operations",
        monthlyPrice: 99,
        yearlyPrice: 990,
        buttonText: "Get Started",
        features: [
            "Up to 100 devices",
            "Basic video processing",
            "Support for 3 platforms",
            "Community support",
            "Standard account trust optimization",
            "Basic AI integration"
        ],
        link: "#"
    },
    {
        id: "professional",
        title: "Professional",
        desc: "Ideal for growing businesses operating at scale across multiple platforms",
        monthlyPrice: 299,
        yearlyPrice: 2990,
        badge: "Most Popular",
        buttonText: "Upgrade to Professional",
        features: [
            "Up to 1,000 devices",
            "Advanced native video processing",
            "All platform integrations (TikTok, Facebook, Instagram, Google, YouTube, Shopee, X)",
            "Priority support",
            "Enhanced account trust optimization",
            "Full AI ecosystem access (DrXAIKOC, DrXAIStudio)",
            "DrXAIChat integration",
            "Advanced analytics & reporting"
        ],
        link: "#"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "For large-scale operations managing millions of devices",
        monthlyPrice: 999,
        yearlyPrice: 9990,
        badge: "Contact Sales",
        buttonText: "Contact Sales",
        features: [
            "Unlimited devices",
            "Premium video processing",
            "All platform integrations",
            "Dedicated account manager",
            "Maximum account trust optimization",
            "Full AI ecosystem with custom integrations",
            "Advanced DrXAIChat features",
            "Custom analytics & reporting",
            "Enterprise-grade security",
            "24/7 priority support",
            "Custom SLA guarantees"
        ],
        link: "#"
    }
];
