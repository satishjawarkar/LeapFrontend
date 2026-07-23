import { DashboardBottom } from "../components/DashboardBottom";
import { DashboardCharts } from "../components/DashboardChart";
import { StatsGrid } from "../components/StatGRid";
import { useDashboard } from "../hooks/userDashboard";
// import { useDashboard } from "../hooks/userDAshboard";

export function DashboardPage() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-8">
      <StatsGrid stats={data.stats} />

      <DashboardCharts />

      <DashboardBottom />
    </div>
  );
}
