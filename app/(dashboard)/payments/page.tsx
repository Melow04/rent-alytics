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
  CreditCard,
  Wallet,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  Plus,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { DataTable } from "@/components/dashboard/data-table";
import { mockPayments, mockPaymentMethods } from "@/lib/services/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PaymentsPage() {
  const completedPayments = mockPayments.filter((p) => p.status === "completed");
  const pendingPayments = mockPayments.filter((p) => p.status === "pending");
  const totalPaid = completedPayments.reduce((sum, p) => sum + p.amount, 0);
  const totalPending = pendingPayments.reduce((sum, p) => sum + p.amount, 0);

  // Payment by category
  const paymentsByCategory = mockPayments.reduce((acc, payment) => {
    const existing = acc.find((item) => item.name === payment.category);
    if (existing) {
      existing.value += payment.amount;
    } else {
      acc.push({ name: payment.category, value: payment.amount });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  // Monthly payment trend
  const monthlyData = [
    { month: "Jan", utilities: 2500, mortgage: 8500, insurance: 1200, maintenance: 800 },
    { month: "Feb", utilities: 2400, mortgage: 8500, insurance: 1200, maintenance: 1500 },
    { month: "Mar", utilities: 2600, mortgage: 8500, insurance: 1200, maintenance: 600 },
    { month: "Apr", utilities: 2300, mortgage: 8500, insurance: 1200, maintenance: 2100 },
    { month: "May", utilities: 2500, mortgage: 8500, insurance: 1200, maintenance: 900 },
    { month: "Jun", utilities: 2700, mortgage: 8500, insurance: 1200, maintenance: 1300 },
  ];

  return (
    <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your payments and payment methods
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Payment
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total Paid"
            value={totalPaid}
            format="currency"
            icon={<CheckCircle2 className="h-4 w-4" />}
            className="border-l-4 border-l-green-500"
          />
          <StatCard
            title="Pending Payments"
            value={totalPending}
            format="currency"
            icon={<Clock className="h-4 w-4" />}
            className="border-l-4 border-l-yellow-500"
          />
          <StatCard
            title="Completed This Month"
            value={completedPayments.length}
            format="number"
            icon={<Calendar className="h-4 w-4" />}
          />
          <StatCard
            title="Payment Methods"
            value={mockPaymentMethods.length}
            format="number"
            icon={<CreditCard className="h-4 w-4" />}
          />
        </div>

        {/* Upcoming Payments Alert */}
        {pendingPayments.length > 0 && (
          <Card className="mb-6 border-l-4 border-l-blue-500 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900">
                    Upcoming Payments
                  </h3>
                  <p className="text-sm text-blue-800 mt-1">
                    You have {pendingPayments.length} pending payment(s) totaling{" "}
                    {formatCurrency(totalPending)}
                  </p>
                  <Button size="sm" className="mt-3" variant="outline">
                    Review Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Monthly Payments & Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payment Breakdown</CardTitle>
              <CardDescription>Payment categories over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                  <Bar dataKey="utilities" stackId="a" fill="#0088FE" />
                  <Bar dataKey="mortgage" stackId="a" fill="#00C49F" />
                  <Bar dataKey="insurance" stackId="a" fill="#FFBB28" />
                  <Bar dataKey="maintenance" stackId="a" fill="#FF8042" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payments by Category</CardTitle>
              <CardDescription>Distribution of payment types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentsByCategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentsByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Payment History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>All recent payments and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={mockPayments}
              columns={[
                {
                  key: "date",
                  label: "Date",
                  render: (value) => formatDate(value),
                },
                {
                  key: "recipient",
                  label: "Recipient",
                  render: (value) => <span className="font-medium">{value}</span>,
                },
                {
                  key: "category",
                  label: "Category",
                },
                {
                  key: "amount",
                  label: "Amount",
                  render: (value) => (
                    <span className="font-semibold">{formatCurrency(value)}</span>
                  ),
                },
                {
                  key: "method",
                  label: "Method",
                  render: (value) => {
                    const methodMap = {
                      credit_card: "Credit Card",
                      bank_transfer: "Bank Transfer",
                      check: "Check",
                      cash: "Cash",
                    };
                    return methodMap[value as keyof typeof methodMap] || value;
                  },
                },
                {
                  key: "status",
                  label: "Status",
                  render: (value) => {
                    const colors = {
                      completed: "text-green-600 bg-green-50",
                      pending: "text-yellow-600 bg-yellow-50",
                      overdue: "text-red-600 bg-red-50",
                      failed: "text-red-600 bg-red-50",
                    };
                    return (
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
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

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your saved payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockPaymentMethods.map((method) => (
                <Card key={method.id} className="bg-gradient-to-br from-gray-900 to-gray-700 text-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {method.type === "credit_card" ? (
                          <CreditCard className="h-8 w-8" />
                        ) : (
                          <Wallet className="h-8 w-8" />
                        )}
                      </div>
                      {method.isDefault && (
                        <span className="text-xs bg-white text-gray-900 px-2 py-1 rounded">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm opacity-75">
                        {method.type === "credit_card" ? method.brand : "Bank Account"}
                      </p>
                      <p className="text-xl font-mono">•••• •••• •••• {method.last4}</p>
                      {method.expiryDate && (
                        <p className="text-sm opacity-75">Expires {method.expiryDate}</p>
                      )}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="secondary">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-dashed hover:border-primary transition-colors cursor-pointer">
                <CardContent className="pt-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                  <Plus className="h-12 w-12 text-muted-foreground mb-2" />
                  <p className="font-medium">Add Payment Method</p>
                  <p className="text-sm text-muted-foreground">
                    Credit card or bank account
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
