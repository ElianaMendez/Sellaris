import { AdIntelligenceService } from "@/lib/services/ad-intelligence";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TrendChart from "@/components/trend-chart";
import { ArrowLeft, Download, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await AdIntelligenceService.getProduct(params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="space-y-6 pb-24">
            {/* Header / Nav Back */}
            <Link href="/" className="inline-flex items-center text-white/50 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Feed
            </Link>

            {/* Video Player Placeholder */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-bold">VIDEO PLAYER</span>
                </div>
                <Button variant="glass" className="absolute top-4 right-4" size="sm">
                    <Download className="w-4 h-4 mr-2" /> Download Creative
                </Button>
            </div>

            {/* Title & Stats */}
            <div>
                <h1 className="font-heading text-3xl font-bold text-white mb-1">{product.title}</h1>
                <p className="text-white/50">by {product.creator}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <GlassCard className="flex flex-col items-center justify-center py-4 space-y-1">
                    <Zap className="w-6 h-6 text-[#06E0E0] fill-current" />
                    <span className="text-2xl font-bold text-white">{product.activeAds}</span>
                    <span className="text-xs text-white/50 uppercase">Active Ads</span>
                </GlassCard>
                <GlassCard className="flex flex-col items-center justify-center py-4 space-y-1">
                    <span className="text-2xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">{product.scaleScore}</span>
                    <span className="text-xs text-white/50 uppercase">Scale Score</span>
                </GlassCard>
                <GlassCard className="flex flex-col items-center justify-center py-4 space-y-1">
                    <span className="text-xl font-bold text-white">{product.daysActive}d</span>
                    <span className="text-xs text-white/50 uppercase">Longevity</span>
                </GlassCard>
                <GlassCard className="flex flex-col items-center justify-center py-4 space-y-1">
                    <Badge variant={product.revenueEstimate === 'High' ? 'teal' : 'default'}>{product.revenueEstimate}</Badge>
                    <span className="text-xs text-white/50 uppercase mt-1">Est. Revenue</span>
                </GlassCard>
            </div>

            {/* AI Analysis */}
            <GlassCard className="space-y-3 border-l-4 border-l-[#06E0E0]">
                <h3 className="font-heading font-bold text-lg text-white">🔮 AI Hook Analysis</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                    This offer uses a strong <span className="text-[#06E0E0] font-semibold">{product.hookAngle}</span> angle.
                    The VSL opens with a Pattern Interrupt targeting &quot;impostor syndrome&quot; before pivoting to the mechanism.
                </p>
                <div className="flex gap-2 mt-2">
                    <Badge variant="default">Pattern Interrupt</Badge>
                    <Badge variant="default">Story-Lead</Badge>
                </div>
            </GlassCard>

            {/* Trend Chart */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Ad Reach Trend (30 Days)</h3>
                <GlassCard className="p-0 overflow-hidden bg-black/20">
                    <div className="p-4">
                        {product.trends.length > 0 ? (
                            <TrendChart data={product.trends} />
                        ) : (
                            <div className="h-32 flex items-center justify-center text-white/30 text-sm">No trend data available</div>
                        )}
                    </div>
                </GlassCard>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4">
                <Button variant="primary" className="w-full h-12 text-lg shadow-[0_0_30px_rgba(6,224,224,0.3)]">
                    Verify in Conquista Network
                </Button>
                <Button variant="secondary" className="w-full">
                    View in Meta Ad Library <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
}
