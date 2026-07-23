import { Bell } from "lucide-react";
import { Button } from "../../ui/button";

export function NotificationButton() {
  return (
    <Button variant="ghost" size="icon">
      <Bell className="h-5 w-5" />
    </Button>
  );
}
