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
    { name: "Filled", value: percentage, fill: color },
    {
      name: "Remaining",
      value: 100 - percentage,
      fill: "#e5e7eb",
    },
  ];

  return (
    <Card className="flex-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pb-4">
        {/* Chart with centered text */}
        <div className="relative w-28 h-28 mb-3">
          <ChartContainer
            config={{}}
            className="w-28 h-28"
          >
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={38}
                outerRadius={52}
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

          {/* Centered percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{percentage}%</span>
            <span className="text-xs text-muted-foreground">{a}</span>
          </div>
        </div>

        {/* Value below chart */}
        <div className="text-xl font-bold">{value}</div>
        
        {/* Labels */}
        <div className="flex justify-between w-full mt-2 text-xs text-muted-foreground px-1">
          <span>{a}</span>
          <span>{b}</span>
        </div>
      </CardContent>
    </Card>
  );
}