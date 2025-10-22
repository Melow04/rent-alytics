"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  Landmark,
  Wallet,
  CreditCard,
  ShieldCheck,
  Settings,
  LogOut,
  Building,
} from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Taxes",
    href: "/taxes",
    icon: <Landmark size={20} />,
  },
  {
    title: "Investments",
    href: "/investments",
    icon: <Building size={20} />,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: <Wallet size={20} />,
  },
  {
    title: "Credit",
    href: "/credit",
    icon: <CreditCard size={20} />,
  },
  {
    title: "Security",
    href: "/security",
    icon: <ShieldCheck size={20} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-900 text-white h-screen fixed">
      <div className="p-6">
        <h1 className="text-2xl font-bold">RentAlytics</h1>
      </div>
      <nav className="flex-1 px-4 py-2 space-y-2">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700",
              pathname === item.href ? "bg-gray-800" : "text-gray-400"
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <LogOut size={20} />
          Log Out
        </Button>
      </div>
    </div>
  );
}