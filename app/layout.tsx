import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Sellaris | Ad Intelligence",
  description: "Identify winning products with AI-powered ad intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        Note: If you encounter hydration errors with extensions, 
        add suppressHydrationWarning to html or body
      */}
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen pb-20`}>
        {children}
      </body>
    </html>
  );
}
