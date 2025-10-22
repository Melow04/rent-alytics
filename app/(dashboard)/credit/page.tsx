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
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Percent,
  Activity,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { mockCreditScore, mockCreditUtilization } from "@/lib/services/mock-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function CreditPage() {
  // Mock credit history data
  const creditHistory = [
    { month: "Jan", score: 762 },
    { month: "Feb", score: 768 },
    { month: "Mar", score: 771 },
    { month: "Apr", score: 775 },
    { month: "May", score: 780 },
    { month: "Jun", score: 785 },
  ];

  const utilizationHistory = [
    { month: "Jan", utilization: 22 },
    { month: "Feb", utilization: 21 },
    { month: "Mar", utilization: 19 },
    { month: "Apr", utilization: 20 },
    { month: "May", utilization: 18 },
    { month: "Jun", utilization: 18 },
  ];

  return (
    <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-3xl font-bold">Credit</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitor your credit score and credit health
          </p>
        </div>
        <Button variant="outline">Refresh Score</Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Credit Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Credit Score"
            value={mockCreditScore.score}
            change={1.3}
            changeType="increase"
            format="number"
            icon={<Activity className="h-4 w-4" />}
            className="border-l-4 border-l-green-500"
          />
          <StatCard
            title="Credit Utilization"
            value={mockCreditUtilization.percentage}
            change={-2.0}
            changeType="decrease"
            format="percentage"
            icon={<Percent className="h-4 w-4" />}
            className="border-l-4 border-l-blue-500"
          />
          <StatCard
            title="Available Credit"
            value={mockCreditUtilization.total - mockCreditUtilization.used}
            format="currency"
            icon={<CreditCard className="h-4 w-4" />}
          />
          <StatCard
            title="Total Credit"
            value={mockCreditUtilization.total}
            format="currency"
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>

        {/* Credit Score Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Credit Score History</CardTitle>
              <CardDescription>Your credit score over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={creditHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[700, 850]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#0088FE"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Credit Score</CardTitle>
              <CardDescription>Current score as of {mockCreditScore.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-40 h-40">
                  <svg className="transform -rotate-90 w-40 h-40">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#0088FE"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(mockCreditScore.score / 850) * 440} 440`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{mockCreditScore.score}</span>
                    <span className="text-sm text-muted-foreground">/ 850</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-green-600">Excellent</p>
                  <p className="text-sm text-muted-foreground">
                    Source: {mockCreditScore.provider}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credit Utilization */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Credit Utilization Trend</CardTitle>
            <CardDescription>
              Keep your utilization below 30% for optimal credit health
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={utilizationHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Area
                  type="monotone"
                  dataKey="utilization"
                  stroke="#00C49F"
                  fill="#00C49F"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{formatCurrency(mockCreditUtilization.used)}</p>
                <p className="text-sm text-muted-foreground">Used</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {formatCurrency(mockCreditUtilization.total - mockCreditUtilization.used)}
                </p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{mockCreditUtilization.percentage}%</p>
                <p className="text-sm text-muted-foreground">Utilization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Factors */}
        <Card>
          <CardHeader>
            <CardTitle>Factors Affecting Your Score</CardTitle>
            <CardDescription>Key elements impacting your credit health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCreditScore.factors.map((factor, index) => {
                const Icon =
                  factor.impact === "positive"
                    ? CheckCircle2
                    : factor.impact === "negative"
                    ? AlertCircle
                    : TrendingDown;
                const colorClass =
                  factor.impact === "positive"
                    ? "text-green-600 bg-green-50"
                    : factor.impact === "negative"
                    ? "text-red-600 bg-red-50"
                    : "text-yellow-600 bg-yellow-50";

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border"
                  >
                    <div className={`p-2 rounded-full ${colorClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{factor.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {factor.description}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${colorClass}`}
                    >
                      {factor.impact}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
}
