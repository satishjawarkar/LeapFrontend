// src/config/navigation/admin-navigation.ts

import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  FolderTree,
  Package,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;

  badge?: number;
  disabled?: boolean;

  permission?: string;
}

export interface NavigationSection {
  id: string;
  title: string;
  items: NavigationItem[];
}

export const ADMIN_NAVIGATION: NavigationSection[] = [
  {
    id: "overview",
    title: "Overview",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    id: "catalog",
    title: "Catalog",
    items: [
      {
        id: "categories",
        label: "Categories",
        path: "/admin/categories",
        icon: FolderTree,
      },
      {
        id: "products",
        label: "Products",
        path: "/admin/products",
        icon: Package,
      },
    ],
  },
  {
    id: "sales",
    title: "Sales",
    items: [
      {
        id: "orders",
        label: "Orders",
        path: "/admin/orders",
        icon: ShoppingCart,
      },
      {
        id: "customers",
        label: "Customers",
        path: "/admin/customers",
        icon: Users,
        badge: 12,
      },
    ],
  },
  {
    id: "system",
    title: "System",
    items: [
      {
        id: "settings",
        label: "Settings",
        path: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];