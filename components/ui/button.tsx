import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "glass";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const variants = {
            primary: "bg-[#06E0E0] text-black hover:bg-[#06E0E0]/80 shadow-[0_0_15px_rgba(6,224,224,0.3)] font-semibold border border-transparent",
            secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md",
            ghost: "hover:bg-white/5 text-white/70 hover:text-white",
            glass: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md shadow-lg",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
