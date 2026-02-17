import { AdIntelligenceService } from "@/lib/services/ad-intelligence";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

function ScaleScoreChip({ score }: { score: number }) {
    const isHigh = score > 9.0;
    return (
        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold border ${isHigh ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'bg-teal-500/10 border-teal-500/30 text-teal-400'}`}>
            <TrendingUp className="w-3 h-3" />
            <span>Scale: {score}</span>
        </div>
    );
}

export default async function FeedPage() {
    const products = await AdIntelligenceService.getFeed();

    return (
        <div className="space-y-6 pb-24">
            {/* Search Header */}
            <div className="sticky top-0 z-40 pt-4 pb-2 bg-[#0A0E1A]/80 backdrop-blur-xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products, niches, or angles..."
                        className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 pl-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#06E0E0]/50 placeholder-white/30 backdrop-blur-md"
                    />
                    <svg className="absolute left-4 top-3.5 h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Feed Stream */}
            <div className="space-y-4">
                {products.map((product) => (
                    <GlassCard key={product.id} className="group relative">
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-[#06E0E0]/20 text-white/70 hover:text-[#06E0E0] transition-colors z-10">
                            <Heart className="w-5 h-5" />
                        </button>

                        {/* Thumbnail Placeholder */}
                        <div className={`aspect-video w-full rounded-lg mb-4 ${product.thumbnailUrl} relative overflow-hidden`}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-50">
                                <span className="text-white/20 text-4xl font-black tracking-tighter">AD CREATIVE</span>
                            </div>
                            {/* Scale Badge Overlay */}
                            <div className="absolute top-2 left-2">
                                <Badge variant="teal" className="backdrop-blur-md bg-black/40 border-none">
                                    {product.funnelType}
                                </Badge>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#06E0E0] transition-colors">{product.title}</h3>
                                    <p className="text-sm text-white/50">{product.creator}</p>
                                </div>
                                <ScaleScoreChip score={product.scaleScore} />
                            </div>

                            <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center text-[#06E0E0]">
                                    <Zap className="w-4 h-4 mr-1 fill-current" />
                                    <span className="font-bold">{product.activeAds} Active Ads</span>
                                </div>
                                <div className="text-white/40 text-xs">
                                    {product.daysActive} days active
                                </div>
                            </div>

                            <Link href={`/product/${product.id}`} className="block mt-4">
                                <Button variant="primary" className="w-full group-hover:shadow-[0_0_20px_rgba(6,224,224,0.4)] transition-all">
                                    See Funnel Analysis <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
