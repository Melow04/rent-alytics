export const TRANSACTION_CATEGORIES = [
  "Rent",
  "Maintenance",
  "Utilities",
  "Insurance",
  "Property Tax",
  "Mortgage",
  "Management Fee",
  "Repairs",
  "Other",
] as const;

export const PROPERTY_TYPES = [
  "residential",
  "commercial",
  "mixed",
] as const;

export const TAX_TYPES = [
  "federal",
  "state",
  "local",
  "property",
] as const;

export const PAYMENT_STATUSES = [
  "pending",
  "completed",
  "overdue",
  "failed",
] as const;

export const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const PERCENTAGE_FORMAT = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const CHART_COLORS = {
  primary: "hsl(var(--chart-1))",
  secondary: "hsl(var(--chart-2))",
  tertiary: "hsl(var(--chart-3))",
  quaternary: "hsl(var(--chart-4))",
  quinary: "hsl(var(--chart-5))",
};
