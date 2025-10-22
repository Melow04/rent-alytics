"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", income: 18600, opex: 8000 },
  { month: "Feb", income: 20500, opex: 9500 },
  { month: "Mar", income: 17200, opex: 11200 },
  { month: "Apr", income: 21900, opex: 10800 },
  { month: "May", income: 19000, opex: 12100 },
  { month: "Jun", income: 23000, opex: 10500 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#18181b", // zinc-900
  },
  opex: {
    label: "OpEx",
    color: "#a1a1aa", // zinc-400
  },
} satisfies ChartConfig;

export default function FinancePerformanceChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
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
        <Bar dataKey="income" fill="var(--color-income)" radius={4} />
        <Bar dataKey="opex" fill="var(--color-opex)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}