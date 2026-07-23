import {
  DollarSign,
  ShoppingBag,
  Users,
} from "lucide-react";

import { DashboardChart } from "./DashboardChart";
import { DashboardStat } from "./DashboardStats";

export function DashboardPreview() {
  return (
    <div className="mt-10 space-y-5">

      <DashboardChart />

      <div className="grid grid-cols-2 gap-4">

        <DashboardStat
          title="Revenue"
          value="$88.4K"
          icon={DollarSign}
        />

        <DashboardStat
          title="Orders"
          value="1,284"
          icon={ShoppingBag}
        />

        <DashboardStat
          title="Customers"
          value="340"
          icon={Users}
        />

        <DashboardStat
          title="Products"
          value="2,840"
          icon={ShoppingBag}
        />

      </div>

    </div>
  );
}