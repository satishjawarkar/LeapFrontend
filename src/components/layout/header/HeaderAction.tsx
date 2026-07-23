import ThemeToggle from "../../common/ThemeToggle";
import { NotificationButton } from "./NotificationButton";
import { UserMenu } from "./UserMenu";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <NotificationButton />

      <ThemeToggle />

      <UserMenu />
    </div>
  );
}
