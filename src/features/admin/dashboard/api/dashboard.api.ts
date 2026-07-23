import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

import type { DashboardData } from "../types/dashboard";

export async function getDashboard(): Promise<DashboardData> {
  return {
    stats: [
      {
        id: "revenue",
        title: "Revenue",
        value: "$88,420",
        growth: "+18%",
        icon: DollarSign,
        iconColor: "bg-violet-500",
      },
      {
        id: "orders",
        title: "Orders",
        value: "1,284",
        growth: "+12%",
        icon: ShoppingCart,
        iconColor: "bg-cyan-500",
      },
      {
        id: "customers",
        title: "Customers",
        value: "340",
        growth: "+8%",
        icon: Users,
        iconColor: "bg-purple-500",
      },
      {
        id: "products",
        title: "Products",
        value: "2,840",
        growth: "+4%",
        icon: Package,
        iconColor: "bg-green-500",
      },
    ],
  };
}