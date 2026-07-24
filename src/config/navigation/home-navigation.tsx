import { Home, HandCoins, Users, Monitor, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HomeSubNavItem {
  id: string;
  label: string;
  path: string;
}

export interface HomeNavItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
  items?: HomeSubNavItem[];
}

export const HOME_NAVIGATION: HomeNavItem[] = [
  { id: "home", label: "Home", path: "/", icon: Home },
  {
    id: "loan",
    label: "Loan",
    path: "/loan",
    icon: HandCoins,
    items: [
      { id: "loan-apply", label: "Apply Loan", path: "/loan/apply" },
      {
        id: "loan-applications",
        label: "Loan Applications",
        path: "/loan/applications",
      },
      {
        id: "loan-disbursement",
        label: "Disbursement",
        path: "/loan/disbursement",
      },
      { id: "loan-reports", label: "Loan Reports", path: "/loan/reports" },
    ],
  },
  { id: "hr", label: "HR", path: "/hr", icon: Users },
  { id: "mis", label: "MIS", path: "/mis", icon: Monitor },
  {
    id: "announcements",
    label: "Announcements",
    path: "/announcements",
    icon: Megaphone,
  },
];
