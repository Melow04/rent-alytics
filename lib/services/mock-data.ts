import type {
  Transaction,
  Property,
  TaxRecord,
  TaxDeduction,
  AnalyticsData,
  Payment,
  PaymentMethod,
  Investment,
  CreditScore,
  CreditUtilization,
  SecurityEvent,
  KPI,
  TimeSeriesData,
} from "@/lib/types";

// Transactions
export const mockTransactions: Transaction[] = [
  {
    id: "1",
    name: "Theresa Webb",
    date: "2024-05-08T19:30:00",
    amount: 1200,
    status: "Pending",
    type: "income",
    category: "Rent",
    propertyId: "prop-1",
  },
  {
    id: "2",
    name: "Annette Black",
    date: "2024-05-06T20:25:00",
    amount: -460,
    status: "Paid",
    type: "expense",
    category: "Maintenance",
    propertyId: "prop-2",
  },
  {
    id: "3",
    name: "Jenny Wilson",
    date: "2024-05-04T11:30:00",
    amount: 1140,
    status: "Received",
    type: "income",
    category: "Rent",
    propertyId: "prop-3",
  },
  {
    id: "4",
    name: "Albert Flores",
    date: "2024-05-02T21:12:00",
    amount: -1220,
    status: "Paid",
    type: "expense",
    category: "Repairs",
    propertyId: "prop-1",
  },
  {
    id: "5",
    name: "Kristin Watson",
    date: "2024-05-02T19:30:00",
    amount: 3270,
    status: "Received",
    type: "income",
    category: "Rent",
    propertyId: "prop-4",
  },
];

// Properties
export const mockProperties: Property[] = [
  {
    id: "prop-1",
    name: "Sunset Apartments",
    address: "123 Main St, Los Angeles, CA 90001",
    type: "residential",
    units: 12,
    occupancyRate: 92,
    monthlyRent: 24000,
    expenses: 8500,
    status: "active",
  },
  {
    id: "prop-2",
    name: "Downtown Office Complex",
    address: "456 Business Ave, San Francisco, CA 94102",
    type: "commercial",
    units: 8,
    occupancyRate: 87,
    monthlyRent: 45000,
    expenses: 15200,
    status: "active",
  },
  {
    id: "prop-3",
    name: "Riverside Condos",
    address: "789 River Rd, Seattle, WA 98101",
    type: "residential",
    units: 24,
    occupancyRate: 95,
    monthlyRent: 36000,
    expenses: 12000,
    status: "active",
  },
  {
    id: "prop-4",
    name: "Metro Plaza",
    address: "321 Metro Blvd, Portland, OR 97201",
    type: "mixed",
    units: 16,
    occupancyRate: 88,
    monthlyRent: 28000,
    expenses: 9500,
    status: "active",
  },
];

// Tax Records
export const mockTaxRecords: TaxRecord[] = [
  {
    id: "tax-1",
    year: 2024,
    quarter: 4,
    type: "federal",
    amount: 12500,
    paid: 12500,
    dueDate: "2025-01-15",
    status: "paid",
  },
  {
    id: "tax-2",
    year: 2025,
    quarter: 1,
    type: "federal",
    amount: 13200,
    paid: 0,
    dueDate: "2025-04-15",
    status: "pending",
  },
  {
    id: "tax-3",
    year: 2024,
    quarter: 4,
    type: "state",
    amount: 6500,
    paid: 6500,
    dueDate: "2025-01-15",
    status: "paid",
  },
  {
    id: "tax-4",
    year: 2025,
    quarter: 1,
    type: "property",
    amount: 8900,
    paid: 0,
    dueDate: "2025-03-31",
    status: "pending",
  },
];

export const mockTaxDeductions: TaxDeduction[] = [
  {
    id: "ded-1",
    category: "Mortgage Interest",
    description: "Annual mortgage interest payments",
    amount: 18500,
    year: 2024,
    quarter: 4,
  },
  {
    id: "ded-2",
    category: "Property Maintenance",
    description: "Repairs and maintenance costs",
    amount: 8200,
    year: 2024,
    quarter: 4,
  },
  {
    id: "ded-3",
    category: "Depreciation",
    description: "Property depreciation deduction",
    amount: 12000,
    year: 2024,
    quarter: 4,
  },
  {
    id: "ded-4",
    category: "Insurance",
    description: "Property insurance premiums",
    amount: 5400,
    year: 2024,
    quarter: 4,
  },
];

// Analytics Data
export const mockAnalyticsData: AnalyticsData[] = [
  {
    period: "Jan 2024",
    revenue: 125000,
    expenses: 42000,
    profit: 83000,
    occupancyRate: 91,
    properties: 4,
  },
  {
    period: "Feb 2024",
    revenue: 128000,
    expenses: 38000,
    profit: 90000,
    occupancyRate: 93,
    properties: 4,
  },
  {
    period: "Mar 2024",
    revenue: 132000,
    expenses: 45000,
    profit: 87000,
    occupancyRate: 92,
    properties: 4,
  },
  {
    period: "Apr 2024",
    revenue: 135000,
    expenses: 41000,
    profit: 94000,
    occupancyRate: 94,
    properties: 4,
  },
  {
    period: "May 2024",
    revenue: 133000,
    expenses: 39000,
    profit: 94000,
    occupancyRate: 95,
    properties: 4,
  },
  {
    period: "Jun 2024",
    revenue: 138000,
    expenses: 43000,
    profit: 95000,
    occupancyRate: 94,
    properties: 4,
  },
];

// Payments
export const mockPayments: Payment[] = [
  {
    id: "pay-1",
    date: "2024-05-01",
    dueDate: "2024-05-01",
    amount: 2500,
    status: "completed",
    method: "bank_transfer",
    recipient: "City Utilities",
    category: "Utilities",
    propertyId: "prop-1",
  },
  {
    id: "pay-2",
    date: "2024-05-10",
    dueDate: "2024-05-10",
    amount: 8500,
    status: "completed",
    method: "bank_transfer",
    recipient: "Bank of America",
    category: "Mortgage",
    propertyId: "prop-1",
  },
  {
    id: "pay-3",
    date: "2024-05-15",
    dueDate: "2024-05-15",
    amount: 1200,
    status: "pending",
    method: "credit_card",
    recipient: "ABC Insurance",
    category: "Insurance",
    propertyId: "prop-2",
  },
];

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "pm-1",
    type: "credit_card",
    last4: "4242",
    brand: "Visa",
    isDefault: true,
    expiryDate: "12/2026",
  },
  {
    id: "pm-2",
    type: "bank_account",
    last4: "6789",
    isDefault: false,
  },
];

// Investments
export const mockInvestments: Investment[] = [
  {
    id: "inv-1",
    propertyId: "prop-1",
    initialInvestment: 450000,
    currentValue: 625000,
    roi: 38.9,
    cashFlow: 15500,
    appreciation: 175000,
    totalReturn: 190500,
    purchaseDate: "2020-03-15",
  },
  {
    id: "inv-2",
    propertyId: "prop-2",
    initialInvestment: 850000,
    currentValue: 1120000,
    roi: 31.8,
    cashFlow: 29800,
    appreciation: 270000,
    totalReturn: 299800,
    purchaseDate: "2019-07-22",
  },
  {
    id: "inv-3",
    propertyId: "prop-3",
    initialInvestment: 680000,
    currentValue: 920000,
    roi: 35.3,
    cashFlow: 24000,
    appreciation: 240000,
    totalReturn: 264000,
    purchaseDate: "2020-11-10",
  },
];

// Credit Score
export const mockCreditScore: CreditScore = {
  score: 785,
  date: "2024-05-01",
  provider: "Experian",
  factors: [
    {
      name: "Payment History",
      impact: "positive",
      description: "No missed payments in the last 24 months",
    },
    {
      name: "Credit Utilization",
      impact: "positive",
      description: "Using only 18% of available credit",
    },
    {
      name: "Credit Age",
      impact: "positive",
      description: "Average account age of 8 years",
    },
    {
      name: "Recent Inquiries",
      impact: "neutral",
      description: "2 hard inquiries in the last 12 months",
    },
  ],
};

export const mockCreditUtilization: CreditUtilization = {
  total: 50000,
  used: 9000,
  percentage: 18,
  trend: "improving",
};

// Security Events
export const mockSecurityEvents: SecurityEvent[] = [
  {
    id: "sec-1",
    type: "login",
    date: "2024-05-10T14:23:00",
    location: "San Francisco, CA",
    device: "Chrome on Windows",
    status: "success",
  },
  {
    id: "sec-2",
    type: "login",
    date: "2024-05-08T09:15:00",
    location: "San Francisco, CA",
    device: "Safari on iPhone",
    status: "success",
  },
  {
    id: "sec-3",
    type: "password_change",
    date: "2024-05-01T16:45:00",
    location: "San Francisco, CA",
    device: "Chrome on Windows",
    status: "success",
  },
  {
    id: "sec-4",
    type: "login",
    date: "2024-04-28T22:10:00",
    location: "Unknown",
    device: "Unknown",
    status: "blocked",
  },
];

// KPIs
export const mockKPIs: KPI[] = [
  {
    title: "Revenue",
    value: 89780,
    change: 2.53,
    changeType: "increase",
    format: "currency",
  },
  {
    title: "Expenses",
    value: 27900,
    change: 0.98,
    changeType: "increase",
    format: "currency",
  },
  {
    title: "Profits",
    value: 61880,
    change: 4.13,
    changeType: "increase",
    format: "currency",
  },
  {
    title: "Occupancy Rate",
    value: 92,
    change: 1.5,
    changeType: "increase",
    format: "percentage",
  },
];

// Time Series Data for Charts
export const mockRevenueData: TimeSeriesData[] = [
  { date: "Jan", revenue: 125000, expenses: 42000, profit: 83000 },
  { date: "Feb", revenue: 128000, expenses: 38000, profit: 90000 },
  { date: "Mar", revenue: 132000, expenses: 45000, profit: 87000 },
  { date: "Apr", revenue: 135000, expenses: 41000, profit: 94000 },
  { date: "May", revenue: 133000, expenses: 39000, profit: 94000 },
  { date: "Jun", revenue: 138000, expenses: 43000, profit: 95000 },
];

export const mockOccupancyData: TimeSeriesData[] = [
  { date: "Jan", rate: 91 },
  { date: "Feb", rate: 93 },
  { date: "Mar", rate: 92 },
  { date: "Apr", rate: 94 },
  { date: "May", rate: 95 },
  { date: "Jun", rate: 94 },
];
