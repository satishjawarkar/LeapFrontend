import type { LucideIcon } from "lucide-react";

export type StatCardData = {
  id: string;
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
  iconColor: string;
};


export type DashboardStat = {
  id: string;
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
  iconColor: string;
};

export type DashboardData = {
  stats: DashboardStat[];
};