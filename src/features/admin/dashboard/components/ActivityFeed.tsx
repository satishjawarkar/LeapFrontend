import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../components/ui/card";
import { activityFeed } from "../data/activity.mock";
import { ActivityItem } from "./ActivityItem";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {activityFeed.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </CardContent>
    </Card>
  );
}
