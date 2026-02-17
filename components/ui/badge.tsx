import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "teal" | "gold" | "red";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        default: "bg-white/10 text-white border-white/10",
        teal: "bg-teal-500/10 text-teal-400 border-teal-500/20 shadow-[0_0_10px_rgba(6,224,224,0.1)]",
        gold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 shadow-[0_0_10px_rgba(255,215,0,0.1)]",
        red: "bg-red-500/10 text-red-400 border-red-500/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-md",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
