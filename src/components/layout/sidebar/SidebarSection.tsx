import type { NavigationSection } from "../../../config/navigation/admin-navigation";
import { SidebarItem } from "./SidebarItem";

type SidebarSectionProps = {
  section: NavigationSection;
};

export function SidebarSection({ section }: SidebarSectionProps) {
  return (
    <section className="space-y-2">
      <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {section.title}
      </h3>

      <div className="space-y-1">
        {section.items.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
