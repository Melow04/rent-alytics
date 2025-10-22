"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Building,
  DollarSign,
  Percent,
  Plus,
  LineChart as LineChartIcon,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { MetricCard } from "@/components/dashboard/metric-card";
import {
  mockInvestments,
  mockProperties,
} from "@/lib/services/mock-data";
import { formatCurrency } from "@/lib/utils/format";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export default function InvestmentsPage() {
  const totalInvestment = mockInvestments.reduce((sum, inv) => sum + inv.initialInvestment, 0);
  const totalValue = mockInvestments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalReturn = mockInvestments.reduce((sum, inv) => sum + inv.totalReturn, 0);
  const avgROI = mockInvestments.reduce((sum, inv) => sum + inv.roi, 0) / mockInvestments.length;

  // Property performance data for radar chart
  const propertyData = mockInvestments.map((inv) => {
    const property = mockProperties.find((p) => p.id === inv.propertyId);
    return {
      name: property?.name.split(" ")[0] || "Unknown",
      ROI: inv.roi,
      CashFlow: (inv.cashFlow / 1000),
      Appreciation: (inv.appreciation / 10000),
      Occupancy: property?.occupancyRate || 0,
    };
  });

  // ROI Comparison
  const roiData = mockInvestments.map((inv) => {
    const property = mockProperties.find((p) => p.id === inv.propertyId);
    return {
      name: property?.name.split(" ")[0] || "Unknown",
      roi: inv.roi,
      cashFlow: inv.cashFlow,
      appreciation: inv.appreciation / 1000,
    };
  });

  return (
    <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-3xl font-bold">Investments</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track your property portfolio and ROI
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Investment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total Investment"
            value={totalInvestment}
            format="currency"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <StatCard
            title="Current Value"
            value={totalValue}
            change={((totalValue - totalInvestment) / totalInvestment) * 100}
            changeType="increase"
            format="currency"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <StatCard
            title="Total Return"
            value={totalReturn}
            change={12.5}
            changeType="increase"
            format="currency"
            icon={<LineChartIcon className="h-4 w-4" />}
          />
          <StatCard
            title="Average ROI"
            value={avgROI.toFixed(1)}
            change={2.3}
            changeType="increase"
            format="percentage"
            icon={<Percent className="h-4 w-4" />}
          />
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {mockInvestments.map((investment) => {
            const property = mockProperties.find((p) => p.id === investment.propertyId);
            return (
              <Card key={investment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Building className="h-8 w-8 text-primary" />
                    <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                      {investment.roi.toFixed(1)}% ROI
                    </span>
                  </div>
                  <CardTitle className="mt-4">{property?.name}</CardTitle>
                  <CardDescription>{property?.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Initial Investment</span>
                      <span className="font-semibold">
                        {formatCurrency(investment.initialInvestment)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Current Value</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(investment.currentValue)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cash Flow</span>
                      <span className="font-semibold">
                        {formatCurrency(investment.cashFlow)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Return</span>
                      <span className="font-semibold text-blue-600">
                        {formatCurrency(investment.totalReturn)}
                      </span>
                    </div>
                    <div className="pt-3 border-t">
                      <Button variant="outline" className="w-full" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ROI Comparison */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ROI Comparison by Property</CardTitle>
            <CardDescription>Compare return on investment across properties</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="roi" fill="#0088FE" name="ROI %" />
                <Bar yAxisId="right" dataKey="cashFlow" fill="#00C49F" name="Cash Flow ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Property Performance Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Property Performance Analysis</CardTitle>
            <CardDescription>
              Multi-dimensional view of property performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={propertyData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                  name="ROI"
                  dataKey="ROI"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Cash Flow (K)"
                  dataKey="CashFlow"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Occupancy"
                  dataKey="Occupancy"
                  stroke="#ffc658"
                  fill="#ffc658"
                  fillOpacity={0.6}
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
