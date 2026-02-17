import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-lg transition-all hover:bg-white/10 hover:border-white/20",
                "before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50",
                className
            )}
        >
            {children}
        </div>
    );
}
