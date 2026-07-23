import type { JSX } from "react";
import type { StatCardData } from "../types/dashboard";
import { Card, CardContent } from "../../../../components/ui/card";

type StatCardProps = {
  data: StatCardData;
};

export function StatCard({ data }: StatCardProps): JSX.Element {
  const Icon = data.icon;

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{data.title}</p>

          <h2 className="text-3xl font-bold">{data.value}</h2>

          <p className="text-sm font-medium text-green-600">{data.growth}</p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${data.iconColor}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
      </CardContent>
    </Card>
  );
}
