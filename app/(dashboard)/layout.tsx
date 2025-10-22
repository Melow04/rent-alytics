import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | RentAlytics",
  description: "Overview of your rental property performance",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
