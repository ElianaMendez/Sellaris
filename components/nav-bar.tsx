"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavBar() {
    const pathname = usePathname();

    const links = [
        { href: "/", icon: Home, label: "Feed" },
        { href: "/search", icon: Search, label: "Search" }, // Placeholder for Filter/Search
        { href: "/saved", icon: Heart, label: "Saved" },
        { href: "/connect", icon: User, label: "Account" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A0E1A]/80 backdrop-blur-xl pb-safe">
            <nav className="flex items-center justify-around h-16 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
                {links.map(({ href, icon: Icon, label }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                                isActive ? "text-[#06E0E0]" : "text-white/50 hover:text-white/70"
                            )}
                        >
                            <Icon className={cn("h-6 w-6", isActive && "drop-shadow-[0_0_8px_rgba(6,224,224,0.5)]")} />
                            <span className="text-[10px] font-medium">{label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
