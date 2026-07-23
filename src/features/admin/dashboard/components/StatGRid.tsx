import type { JSX } from "react";

import { StatCard } from "./StatCard";
import type { DashboardStat } from "../types/dashboard";

type Props = {
  stats: DashboardStat[];
};

export function StatsGrid({ stats }: Props): JSX.Element {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          data={stat}
        />
      ))}
    </section>
  );
}