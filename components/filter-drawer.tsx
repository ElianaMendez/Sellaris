"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FilterDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Button - Floating or Header */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-4 z-40 bg-[#06E0E0] text-black p-3 rounded-full shadow-[0_0_20px_rgba(6,224,224,0.4)] hover:scale-105 transition-transform"
            >
                <SlidersHorizontal className="w-6 h-6" />
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer Panel */}
            <div className={cn(
                "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#0A0E1A]/95 border-l border-white/10 backdrop-blur-2xl p-6 shadow-2xl transition-transform duration-300 ease-in-out transform",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-heading text-2xl font-bold text-white">Refine Results</h2>
                    <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Niche Section */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Niche</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Health", "Wealth", "Relationships", "Hobbies"].map(niche => (
                                <button key={niche} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white hover:border-[#06E0E0] hover:text-[#06E0E0] transition-colors">
                                    {niche}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Language Section */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Language</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Portuguese", "Spanish", "English"].map(lang => (
                                <button key={lang} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white hover:border-[#06E0E0] hover:text-[#06E0E0] transition-colors">
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8">
                        <Button variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
                            Apply Filters
                        </Button>
                        <Button variant="ghost" className="w-full mt-2" onClick={() => setIsOpen(false)}>
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
