// Transaction Types
export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: "Pending" | "Paid" | "Received" | "Failed";
  type: "income" | "expense";
  category?: string;
  propertyId?: string;
}

// Property Types
export interface Property {
  id: string;
  name: string;
  address: string;
  type: "residential" | "commercial" | "mixed";
  units: number;
  occupancyRate: number;
  monthlyRent: number;
  expenses: number;
  imageUrl?: string;
  status: "active" | "inactive" | "maintenance";
}

// Tax Types
export interface TaxRecord {
  id: string;
  year: number;
  quarter: number;
  type: "federal" | "state" | "local" | "property";
  amount: number;
  paid: number;
  dueDate: string;
  status: "pending" | "paid" | "overdue";
}

export interface TaxDeduction {
  id: string;
  category: string;
  description: string;
  amount: number;
  year: number;
  quarter: number;
  documentUrl?: string;
}

// Analytics Types
export interface AnalyticsData {
  period: string;
  revenue: number;
  expenses: number;
  profit: number;
  occupancyRate: number;
  properties: number;
}

export interface MetricTrend {
  label: string;
  current: number;
  previous: number;
  change: number;
  changeType: "increase" | "decrease";
}

// Payment Types
export interface Payment {
  id: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "pending" | "completed" | "overdue" | "failed";
  method: "credit_card" | "bank_transfer" | "check" | "cash";
  recipient: string;
  category: string;
  propertyId?: string;
}

export interface PaymentMethod {
  id: string;
  type: "credit_card" | "bank_account" | "digital_wallet";
  last4: string;
  brand?: string;
  isDefault: boolean;
  expiryDate?: string;
}

// Investment Types
export interface Investment {
  id: string;
  propertyId: string;
  initialInvestment: number;
  currentValue: number;
  roi: number;
  cashFlow: number;
  appreciation: number;
  totalReturn: number;
  purchaseDate: string;
}

// Credit Types
export interface CreditScore {
  score: number;
  date: string;
  provider: string;
  factors: CreditFactor[];
}

export interface CreditFactor {
  name: string;
  impact: "positive" | "negative" | "neutral";
  description: string;
}

export interface CreditUtilization {
  total: number;
  used: number;
  percentage: number;
  trend: "improving" | "declining" | "stable";
}

// Security Types
export interface SecurityEvent {
  id: string;
  type: "login" | "password_change" | "2fa_enabled" | "suspicious_activity";
  date: string;
  location: string;
  device: string;
  status: "success" | "failed" | "blocked";
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  loginAlerts: boolean;
  lastPasswordChange: string;
}

// KPI Types
export interface KPI {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
  trend?: number[];
  format?: "currency" | "percentage" | "number";
}

// Chart Data Types
export interface ChartDataPoint {
  label: string;
  value: number;
  category?: string;
  color?: string;
}

export interface TimeSeriesData {
  date: string;
  [key: string]: string | number;
}
