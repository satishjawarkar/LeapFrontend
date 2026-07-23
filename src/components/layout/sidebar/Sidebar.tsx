import { ADMIN_NAVIGATION } from "../../../config/navigation/admin-navigation";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarSection } from "./SidebarSection";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-background">
      <div className="border-b p-5">
        <SidebarLogo />
      </div>

      <nav className="flex-1 space-y-8 overflow-y-auto p-4">
        {ADMIN_NAVIGATION.map((section) => (
          <SidebarSection key={section.id} section={section} />
        ))}
      </nav>
    </aside>
  );
}
