import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentAlytics Dashboard",
  description: "Rental Price Optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Page Content */}
        <div className="flex-1 w-full p-8">{children}</div>
      </body>
    </html>
  );
}