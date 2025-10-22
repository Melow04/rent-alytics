"use client";
import { Pie, PieChart, Cell } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DonutChartCardProps {
  title: string;
  value: string;
  percentage: number;
  a: string; // "Paid" or "Received"
  b: string; // Total value
  color: string; // e.g., 'hsl(var(--chart-1))'
}

export default function KpiDonutChart({
  title,
  value,
  percentage,
  a,
  b,
  color,
}: DonutChartCardProps) {
  const chartData = [
    { name: "Paid", value: percentage, fill: color },
    {
      name: "Remaining",
      value: 100 - percentage,
      fill: "hsl(var(--muted) / 0.3)",
    },
  ];

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center relative">
        <ChartContainer
          config={{}}
          className="w-32 h-32"
        >
          <PieChart accessibilityLayer>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={60}
              startAngle={90}
              endAngle={450}
              paddingAngle={0}
              strokeWidth={0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* This div overlays the text in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform mt-3">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{percentage}%</span>
            <span className="text-sm text-gray-500">{a}</span>
          </div>
        </div>

        <div className="text-2xl font-bold mt-4">{value}</div>
        <div className="flex justify-between w-full mt-2 text-sm text-gray-500">
          <span>{a}</span>
          <span>{b}</span>
        </div>
      </CardContent>
    </Card>
  );
}