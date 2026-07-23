import { Home, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeaderNavItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
}

export const HEADER_NAVIGATION: HeaderNavItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    id: "setup",
    label: "Setup",
    path: "/setup",
    icon: Settings,
  },
];
