import { Badge } from "../../../../components/ui/badge";

type Props = {
  status: string;
};

const variants: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-cyan-100 text-cyan-700",
  Shipped: "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-700",
  Cancelled: "bg-red-100 text-red-700",
};

export function StatusBadge({ status }: Props) {
  return <Badge className={variants[status]}>{status}</Badge>;
}
