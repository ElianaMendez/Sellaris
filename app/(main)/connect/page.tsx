"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Shield, LogOut } from "lucide-react";

export default function ConnectPage() {
    const [isConnected, setIsConnected] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);

    const handleConnect = () => {
        setIsSyncing(true);
        // Simulate API call
        setTimeout(() => {
            setIsConnected(true);
            setIsSyncing(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 text-center">

            <div className="space-y-2">
                <div className="w-24 h-24 bg-white/5 rounded-full mx-auto flex items-center justify-center border border-white/10 mb-4">
                    <span className="text-3xl">👤</span>
                </div>
                <h1 className="font-heading text-2xl font-bold text-white">Account Settings</h1>
                <p className="text-white/50 text-sm">Manage your integrations and subscription</p>
            </div>

            <GlassCard className="w-full max-w-sm space-y-6 py-8 px-6 border-white/20">
                {/* Status Indicator */}
                <div className="flex flex-col items-center space-y-3">
                    <div className={`relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 ${isConnected ? 'bg-green-500/20 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)]' : 'bg-red-500/20 text-red-400 shadow-[0_0_20px_rgba(248,113,113,0.3)]'}`}>
                        {isConnected ? <CheckCircle className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                        {/* Ripple effect */}
                        {!isConnected && <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20 animate-ping"></span>}
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {isConnected ? 'Connected' : 'Disconnected'}
                    </h2>
                </div>

                <p className="text-sm text-white/70">
                    {isConnected
                        ? 'Your Facebook & Instagram Ads Manager is successfully synced. Intelligence data is updating in real-time.'
                        : 'Verify your connection to Facebook/Instagram Ads Manager to unlock full intelligence sync.'
                    }
                </p>

                {!isConnected ? (
                    <Button variant="primary" className="w-full" onClick={handleConnect} disabled={isSyncing}>
                        {isSyncing ? 'Connecting...' : 'Connect Meta Ads Manager'}
                    </Button>
                ) : (
                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 text-xs text-green-300">
                        Sync Status: Active • Last update: Just now
                    </div>
                )}
            </GlassCard>

            <div className="w-full max-w-sm space-y-2">
                <Button variant="secondary" className="w-full justify-start text-white/70">
                    <Shield className="w-4 h-4 mr-3" /> Privacy & Security
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    <LogOut className="w-4 h-4 mr-3" /> Logout
                </Button>
            </div>
        </div>
    );
}
