import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Bell,
  CalendarDays,
} from "lucide-react";

// Import the new chart components
import FinancePerformanceChart from "@/components/FinancePerformanceChart";
import IncomeStatisticsChart from "@/components/IncomeStatisticsChart";
import RevenueGrowthChart from "@/components/RevenueGrowthChart";
import KpiDonutChart from "@/components/KpiDonutChart";

// Placeholder data for transactions
const transactions = [
  {
    name: "Theresa Webb",
    date: "7:30 pm, 08 may 2022",
    amount: "+$1200",
    status: "Pending",
    color: "text-yellow-500",
  },
  {
    name: "Annette Black",
    date: "8:25 pm, 06 may 2022",
    amount: "-$460",
    status: "Paid",
    color: "text-green-500",
  },
  {
    name: "Jenny Wilson",
    date: "11:30 am, 04 may 2022",
    amount: "+$1140",
    status: "Received",
    color: "text-blue-500",
  },
  {
    name: "Albert Flores",
    date: "9:12 pm, 02 may 2022",
    amount: "-$1220",
    status: "Paid",
    color: "text-green-500",
  },
  {
    name: "Kristin Watson",
    date: "7:30 pm, 02 may 2022",
    amount: "+$3270",
    status: "Received",
    color: "text-blue-500",
  },
];

// Re-usable component for KPI cards
function KpiCard({ title, value, percentage, changeType }: {
  title: string;
  value: string;
  percentage: string;
  changeType: "increase" | "decrease";
}) {
  const Icon = changeType === "increase" ? ArrowUpRight : ArrowDownRight;
  const color = changeType === "increase" ? "text-green-500" : "text-red-500";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Icon className={`w-4 h-4 ${color}`} />
          <span className={`ml-1 ${color}`}>{percentage}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex-1 md:pl-64 flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b h-20">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="gap-2">
            <CalendarDays className="h-5 w-5" />
            <span>1 Jan, 2023 - 1 Jun, 2023</span>
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <KpiCard
            title="Revenue"
            value="$89,780"
            percentage="+2.53%"
            changeType="increase"
          />
          <KpiCard
            title="Expenses"
            value="$27,900"
            percentage="+0.98%"
            changeType="increase"
          />
          <KpiCard
            title="Profits"
            value="$61,880"
            percentage="+4.13%"
            changeType="increase"
          />
        </div>

        {/* Charts and Transactions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Column (2/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Finance Performance & Income Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Finance Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <FinancePerformanceChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Income Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <IncomeStatisticsChart />
                </CardContent>
              </Card>
            </div>

            {/* Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.amount}</div>
                        <div className={`text-sm ${item.color}`}>{item.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Revenue Growth */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueGrowthChart />
              </CardContent>
            </Card>

            {/* Donut Charts */}
            <div className="grid grid-cols-2 gap-6">
              <KpiDonutChart
                title="Profit Margin"
                value="$61,880"
                percentage={75}
                a="Paid"
                b="$81,880"
                color="hsl(var(--chart-1))"
              />
              <KpiDonutChart
                title="Gross Margin"
                value="$78,542"
                percentage={78}
                a="Paid"
                b="$78,542"
                color="hsl(var(--chart-2))"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <KpiDonutChart
                title="Accounts Receivable"
                value="$12,222.90"
                percentage={87}
                a="Received"
                b="$12,222.90"
                color="hsl(var(--chart-3))"
              />
              <KpiDonutChart
                title="Accounts Payable"
                value="$3,222.10"
                percentage={54}
                a="Paid"
                b="$3,222.10"
                color="hsl(var(--chart-4))"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}