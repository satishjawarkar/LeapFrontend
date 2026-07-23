import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../components/ui/card";
import { recentOrders } from "../data/recent-orders.mock";
import { StatusBadge } from "./StatusBadge";

export function RecentOrdersTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>

        <button className="text-sm text-primary">View all</button>
      </CardHeader>

      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Order</th>

              <th className="text-left">Customer</th>

              <th className="text-left">Product</th>

              <th className="text-left">Amount</th>

              <th className="text-left">Status</th>

              <th className="text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-muted">
                <td className="py-4 font-medium">{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td>{order.amount}</td>

                <td>
                  <StatusBadge status={order.status} />
                </td>

                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
