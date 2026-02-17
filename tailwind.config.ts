import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0E1A", // Midnight Blue
                foreground: "#FFFFFF",
                primary: {
                    DEFAULT: "#06E0E0", // Electric Teal
                    foreground: "#000000",
                },
                card: {
                    DEFAULT: "rgba(255, 255, 255, 0.05)",
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "rgba(255, 255, 255, 0.1)",
                    foreground: "#A0A0A0",
                },
                accent: {
                    DEFAULT: "#00B8D9", // Gold/Teal mix for Scale Score if needed, or just define specific colors
                    gold: "#FFD700",
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                heading: ['var(--font-outfit)'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
};
export default config;
