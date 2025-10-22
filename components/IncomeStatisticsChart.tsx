"use client";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { x: "15%", aptA: 10200, aptB: 9500 },
  { x: "20%", aptA: 10500, aptB: 9800 },
  { x: "25%", aptA: 11200, aptB: 10500 },
  { x: "30%", aptA: 11800, aptB: 11000 },
  { x: "35%", aptA: 11500, aptB: 11200 },
  { x: "40%", aptA: 12000, aptB: 11300 },
  { x: "50%", aptA: 11700, aptB: 11500 },
  { x: "75%", aptA: 12500, aptB: 12200 },
];

const chartConfig = {
  aptA: {
    label: "Apr 15, $12,259.04",
    color: "#10b981", // emerald-500
  },
  aptB: {
    label: "Apr 10, $11,223.78",
    color: "#f59e0b", // amber-500
  },
} satisfies ChartConfig;

export default function IncomeStatisticsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <LineChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="x"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          fontSize={12}
          tickFormatter={(value) => `$${value / 1000}k`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="aptA"
          type="monotone"
          stroke="var(--color-aptA)"
          strokeWidth={2}
          dot={{ fill: "var(--color-aptA)" }}
        />
        <Line
          dataKey="aptB"
          type="monotone"
          stroke="var(--color-aptB)"
          strokeWidth={2}
          dot={{ fill: "var(--color-aptB)" }}
        />
      </LineChart>
    </ChartContainer>
  );
}