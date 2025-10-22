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
  FileText,
  Download,
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingDown,
  Receipt,
  Calendar as CalendarIcon,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { DataTable } from "@/components/dashboard/data-table";
import { mockTaxRecords, mockTaxDeductions } from "@/lib/services/mock-data";
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

export default function TaxesPage() {
  const totalDue = mockTaxRecords
    .filter((t) => t.status === "pending")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalPaid = mockTaxRecords
    .filter((t) => t.status === "paid")
    .reduce((sum, t) => sum + t.paid, 0);
  const totalDeductions = mockTaxDeductions.reduce((sum, d) => sum + d.amount, 0);

  // Prepare deduction data by category
  const deductionsByCategory = mockTaxDeductions.reduce((acc, deduction) => {
    const existing = acc.find((item) => item.name === deduction.category);
    if (existing) {
      existing.value += deduction.amount;
    } else {
      acc.push({ name: deduction.category, value: deduction.amount });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  // Quarterly tax data
  const quarterlyData = [
    { quarter: "Q1 2024", federal: 12000, state: 6000, property: 8500 },
    { quarter: "Q2 2024", federal: 12300, state: 6200, property: 8700 },
    { quarter: "Q3 2024", federal: 12800, state: 6400, property: 8900 },
    { quarter: "Q4 2024", federal: 12500, state: 6500, property: 8900 },
  ];

  return (
    <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-3xl font-bold">Taxes</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your tax obligations and deductions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            File Taxes
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Tax Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Tax Due"
            value={totalDue}
            format="currency"
            icon={<AlertCircle className="h-4 w-4" />}
            className="border-l-4 border-l-red-500"
          />
          <StatCard
            title="Tax Paid (YTD)"
            value={totalPaid}
            format="currency"
            icon={<CheckCircle2 className="h-4 w-4" />}
            className="border-l-4 border-l-green-500"
          />
          <StatCard
            title="Total Deductions"
            value={totalDeductions}
            format="currency"
            icon={<TrendingDown className="h-4 w-4" />}
            className="border-l-4 border-l-blue-500"
          />
          <StatCard
            title="Estimated Savings"
            value={totalDeductions * 0.22}
            format="currency"
            icon={<DollarSign className="h-4 w-4" />}
            className="border-l-4 border-l-purple-500"
          />
        </div>

        {/* Important Alerts */}
        <Card className="mb-6 border-l-4 border-l-amber-500 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-amber-100 p-2">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900">
                  Upcoming Tax Deadline
                </h3>
                <p className="text-sm text-amber-800 mt-1">
                  Q1 2025 Federal taxes are due on April 15, 2025. You have $13,200 pending.
                </p>
                <Button size="sm" className="mt-3" variant="outline">
                  Pay Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quarterly Tax Obligations & Deductions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Tax Payments</CardTitle>
              <CardDescription>Tax obligations by quarter and type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={quarterlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                  <Bar dataKey="federal" fill="#0088FE" name="Federal" />
                  <Bar dataKey="state" fill="#00C49F" name="State" />
                  <Bar dataKey="property" fill="#FFBB28" name="Property" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deductions by Category</CardTitle>
              <CardDescription>Breakdown of tax deductions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deductionsByCategory}
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
                    {deductionsByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tax Records Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tax Records</CardTitle>
            <CardDescription>All tax payments and obligations</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={mockTaxRecords}
              columns={[
                {
                  key: "type",
                  label: "Type",
                  render: (value) => (
                    <span className="capitalize font-medium">{value}</span>
                  ),
                },
                {
                  key: "year",
                  label: "Period",
                  render: (value, row) => `Q${row.quarter} ${value}`,
                },
                {
                  key: "amount",
                  label: "Amount",
                  render: (value) => formatCurrency(value),
                },
                {
                  key: "paid",
                  label: "Paid",
                  render: (value) => formatCurrency(value),
                },
                {
                  key: "dueDate",
                  label: "Due Date",
                  render: (value) => formatDate(value),
                },
                {
                  key: "status",
                  label: "Status",
                  render: (value) => {
                    const colors = {
                      pending: "text-yellow-600 bg-yellow-50",
                      paid: "text-green-600 bg-green-50",
                      overdue: "text-red-600 bg-red-50",
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

        {/* Deductions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Tax Deductions</CardTitle>
            <CardDescription>Itemized deductions for tax year 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={mockTaxDeductions}
              columns={[
                {
                  key: "category",
                  label: "Category",
                  render: (value) => (
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{value}</span>
                    </div>
                  ),
                },
                {
                  key: "description",
                  label: "Description",
                },
                {
                  key: "amount",
                  label: "Amount",
                  render: (value) => (
                    <span className="font-semibold">{formatCurrency(value)}</span>
                  ),
                },
                {
                  key: "year",
                  label: "Period",
                  render: (value, row) => `Q${row.quarter} ${value}`,
                },
              ]}
              pageSize={5}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
