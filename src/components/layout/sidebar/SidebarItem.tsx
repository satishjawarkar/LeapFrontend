import { NavLink } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { Badge } from "../../ui/badge";
import type { NavigationItem } from "../../../config/navigation/admin-navigation";

// import { Badge } from "lucide-react";

type SidebarItemProps = {
  item: NavigationItem;
};

export function SidebarItem({ item }: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        cn(
          "group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200",
          isActive
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )
      }
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />

        <span className="text-sm font-medium">{item.label}</span>
      </div>

      {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
    </NavLink>
  );
}
