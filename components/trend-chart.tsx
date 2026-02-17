"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { type TrendPoint } from "@/lib/services/ad-intelligence";

export default function TrendChart({ data }: { data: TrendPoint[] }) {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis
                        dataKey="date"
                        stroke="#ffffff50"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value: string) => value.split('-')[2]} // Show day only
                    />
                    <YAxis
                        stroke="#ffffff50"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value: number) => `${value}`}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0A0E1A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#06E0E0' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="reach"
                        stroke="#06E0E0"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, fill: '#06E0E0', stroke: '#fff' }}
                        filter="drop-shadow(0 0 8px rgba(6, 224, 224, 0.5))"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
