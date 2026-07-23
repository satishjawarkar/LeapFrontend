import { ActivityFeed } from "./ActivityFeed";
import { RecentOrdersTable } from "./RecentOrderTable";

export function DashboardBottom() {
    return (
        <section className="grid gap-6 xl:grid-cols-3">

            <div className="xl:col-span-2">
                <RecentOrdersTable />
            </div>

            <ActivityFeed />

        </section>
    );
}