import { CategoryChart } from "./CategoryCharts";
import { RevenueChart } from "./RevenueChart";

export function DashboardCharts() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <RevenueChart />
      </div>

      <CategoryChart />
    </section>
  );
}