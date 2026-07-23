import type { DashboardData } from "../types/dashboard";

export async function getDashboard(): Promise<DashboardData> {
  return {
    stats: [],
  };
}
