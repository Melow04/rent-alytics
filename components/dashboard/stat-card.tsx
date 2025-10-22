import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: "increase" | "decrease";
  icon?: React.ReactNode;
  format?: "currency" | "percentage" | "number";
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
  format = "number",
  className,
}: StatCardProps) {
  const ChangeIcon = changeType === "increase" ? ArrowUpRight : ArrowDownRight;
  const TrendIcon = changeType === "increase" ? TrendingUp : TrendingDown;
  const changeColor = changeType === "increase" ? "text-green-600" : "text-red-600";
  const changeBgColor = changeType === "increase" ? "bg-green-50" : "bg-red-50";

  const formatValue = (val: string | number) => {
    if (typeof val === "string") return val;
    if (format === "currency") return `$${val.toLocaleString()}`;
    if (format === "percentage") return `${val}%`;
    return val.toLocaleString();
  };

  return (
    <Card className={cn("hover:shadow-lg transition-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value)}</div>
        {change !== undefined && changeType && (
          <div className="flex items-center gap-1 mt-2">
            <div className={cn("flex items-center gap-0.5 text-sm font-medium px-2 py-0.5 rounded", changeBgColor, changeColor)}>
              <ChangeIcon className="w-3 h-3" />
              <span>{Math.abs(change)}%</span>
            </div>
            <span className="text-xs text-muted-foreground ml-1">vs last period</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
