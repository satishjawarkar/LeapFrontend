import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SETUP_NAVIGATION } from "../../../config/navigation/setup-navigation";
import { cn } from "../../../lib/utils";
import { useSidebar } from "./SidebarContext";

export function Sidebar() {
  const { collapsed } = useSidebar();
  const [openGroup, setOpenGroup] = useState<string | null>("loan-setups");

  return (
    <aside
      className={cn(
        "flex h-full shrink-0 flex-col overflow-y-auto bg-[#003053] text-white transition-all duration-200",
        collapsed ? "w-0 overflow-hidden" : "w-72",
      )}
    >
      <nav className="flex-1 py-2">
        <NavLink
          to="/"
          className="block border-b border-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
        >
          Home
        </NavLink>

        {SETUP_NAVIGATION.map((group) => {
          const isOpen = openGroup === group.id;

          return (
            <div key={group.id} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setOpenGroup(isOpen ? null : group.id)}
                className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {group.title}
                {group.items.length > 0 &&
                  (isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  ))}
              </button>

              {isOpen && group.items.length > 0 && (
                <div className="bg-[#002744] pb-1">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-8 py-2 text-sm transition",
                          isActive
                            ? "bg-[#0669b2] text-white"
                            : "text-white/75 hover:bg-white/10 hover:text-white",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
