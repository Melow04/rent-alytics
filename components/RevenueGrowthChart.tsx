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
  { month: "Jan", sales: 80, users: 20, taxes: 12 },
  { month: "Feb", sales: 75, users: 22, taxes: 11 },
  { month: "Mar", sales: 90, users: 21, taxes: 13 },
  { month: "Apr", sales: 82, users: 25, taxes: 12 },
  { month: "May", sales: 95, users: 23, taxes: 14 },
  { month: "Jun", sales: 88, users: 26, taxes: 13 },
];

const chartConfig = {
  sales: {
    label: "Total Sales",
    color: "#3b82f6", // blue-500
  },
  users: {
    label: "Active User",
    color: "#a3e635", // lime-400
  },
  taxes: {
    label: "Total Taxes",
    color: "#ef4444", // red-500
  },
} satisfies ChartConfig;

export default function RevenueGrowthChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={chartData} accessibilityLayer barGap={4}>
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
          tickFormatter={(value) => `$${value}k`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="sales" fill="var(--color-sales)" radius={2} />
        <Bar dataKey="users" fill="var(--color-users)" radius={2} />
        <Bar dataKey="taxes" fill="var(--color-taxes)" radius={2} />
      </BarChart>
    </ChartContainer>
  );
}