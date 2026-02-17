export interface TrendPoint {
    date: string;
    reach: number;
}

export interface Product {
    id: string;
    title: string;
    creator: string;
    thumbnailUrl: string; // Placeholder color or URL
    activeAds: number;
    scaleScore: number;
    daysActive: number;
    revenueEstimate: "Low" | "Medium" | "High";
    trends: TrendPoint[];
    hookAngle?: string;
    funnelType?: "VSL" | "TSL" | "Quiz";
}

export const MOCK_PRODUCTS: Product[] = [
    {
        id: "confraria-da-conquista",
        title: "Confraria da Conquista",
        creator: "Conquista Network",
        thumbnailUrl: "bg-gradient-to-br from-purple-900 to-blue-900",
        activeAds: 190,
        scaleScore: 9.2,
        daysActive: 45,
        revenueEstimate: "High",
        hookAngle: "Financial Freedom / Social Proof",
        funnelType: "VSL",
        trends: Array.from({ length: 30 }, (_, i) => ({
            date: `2024-01-${i + 1}`,
            reach: 1000 + Math.random() * 500 + (i * 50),
        })),
    },
    {
        id: "english-mastery",
        title: "English Mastery 3.0",
        creator: "Global Lang",
        thumbnailUrl: "bg-gradient-to-br from-teal-900 to-green-900",
        activeAds: 85,
        scaleScore: 8.5,
        daysActive: 22,
        revenueEstimate: "Medium",
        hookAngle: "Career Advancement",
        funnelType: "TSL",
        trends: [],
    },
    {
        id: "yoga-for-seniors",
        title: "Yoga for Seniors",
        creator: "Vitality Plus",
        thumbnailUrl: "bg-gradient-to-br from-orange-900 to-red-900",
        activeAds: 340,
        scaleScore: 9.8,
        daysActive: 120,
        revenueEstimate: "High",
        hookAngle: "Health & Longevity",
        funnelType: "VSL",
        trends: [],
    },
    {
        id: "crypto-dominion",
        title: "Crypto Dominion",
        creator: "Finance Bros",
        thumbnailUrl: "bg-gradient-to-br from-yellow-900 to-amber-900",
        activeAds: 45,
        scaleScore: 6.2,
        daysActive: 5,
        revenueEstimate: "Low",
        hookAngle: "Quick Riches",
        funnelType: "VSL",
        trends: [],
    }
];

export const AdIntelligenceService = {
    getFeed: async (): Promise<Product[]> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return MOCK_PRODUCTS;
    },
    getProduct: async (id: string): Promise<Product | undefined> => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return MOCK_PRODUCTS.find((p) => p.id === id);
    },
};
