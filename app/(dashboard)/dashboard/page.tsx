"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Bell,
  CalendarDays,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Home,
} from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import { DataTable } from "@/components/dashboard/data-table";
import FinancePerformanceChart from "@/components/FinancePerformanceChart";
import IncomeStatisticsChart from "@/components/IncomeStatisticsChart";
import RevenueGrowthChart from "@/components/RevenueGrowthChart";
import KpiDonutChart from "@/components/KpiDonutChart";

import { mockTransactions, mockKPIs } from "@/lib/services/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils/format";

export default function DashboardPage() {
  return (
    <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back! Here's your property overview
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="gap-2">
            <CalendarDays className="h-5 w-5" />
            <span className="hidden md:inline">1 Jan, 2024 - 1 Jun, 2024</span>
          </Button>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total Revenue"
            value={mockKPIs[0].value}
            change={mockKPIs[0].change}
            changeType={mockKPIs[0].changeType}
            format="currency"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <StatCard
            title="Total Expenses"
            value={mockKPIs[1].value}
            change={mockKPIs[1].change}
            changeType={mockKPIs[1].changeType}
            format="currency"
            icon={<TrendingDown className="h-4 w-4" />}
          />
          <StatCard
            title="Net Profits"
            value={mockKPIs[2].value}
            change={mockKPIs[2].change}
            changeType={mockKPIs[2].changeType}
            format="currency"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <StatCard
            title="Occupancy Rate"
            value={mockKPIs[3].value}
            change={mockKPIs[3].change}
            changeType={mockKPIs[3].changeType}
            format="percentage"
            icon={<Home className="h-4 w-4" />}
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

            {/* Transactions Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={mockTransactions}
                  columns={[
                    {
                      key: "name",
                      label: "Name",
                      render: (value, row) => (
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>{value.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{value}</div>
                            <div className="text-sm text-muted-foreground">
                              {formatDate(row.date)}
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      key: "category",
                      label: "Category",
                    },
                    {
                      key: "amount",
                      label: "Amount",
                      render: (value) => (
                        <span
                          className={
                            value > 0 ? "text-green-600" : "text-red-600"
                          }
                        >
                          {value > 0 ? "+" : ""}
                          {formatCurrency(value)}
                        </span>
                      ),
                    },
                    {
                      key: "status",
                      label: "Status",
                      render: (value) => {
                        const colors = {
                          Pending: "text-yellow-600 bg-yellow-50",
                          Paid: "text-green-600 bg-green-50",
                          Received: "text-blue-600 bg-blue-50",
                          Failed: "text-red-600 bg-red-50",
                        };
                        return (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              colors[value as keyof typeof colors]
                            }`}
                          >
                            {value}
                          </span>
                        );
                      },
                    },
                  ]}
                  pageSize={5}
                />
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
            <div className="grid grid-cols-2 gap-4">
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
            <div className="grid grid-cols-2 gap-4">
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
