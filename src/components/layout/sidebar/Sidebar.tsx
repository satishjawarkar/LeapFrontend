import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { SETUP_NAVIGATION } from "../../../config/navigation/setup-navigation";
import { LOAN_NAVIGATION } from "../../../config/navigation/loan-navigation";
import { HOME_NAVIGATION } from "../../../config/navigation/home-navigation";
import { cn } from "../../../lib/utils";
import { useSidebar } from "./SidebarContext";

type AccordionGroup = {
  id: string;
  title: string;
  items: { id: string; label: string; path: string }[];
};

function AccordionSidebar({ groups }: { groups: AccordionGroup[] }) {
  const [openGroup, setOpenGroup] = useState<string | null>(
    groups[0]?.id ?? null,
  );

  return (
    <nav className="flex-1 py-2">
      <NavLink
        to="/"
        className="block border-b border-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
      >
        Home
      </NavLink>

      {groups.map((group) => {
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
  );
}

export function Sidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const isSetup = location.pathname.startsWith("/setup");
  const isLoan = location.pathname.startsWith("/loan");
  const [openHomeGroup, setOpenHomeGroup] = useState<string | null>(null);

  return (
    <aside
      className={cn(
        "flex h-full shrink-0 flex-col overflow-y-auto bg-[#003053] text-white transition-all duration-200",
        collapsed ? "w-0 overflow-hidden" : "w-72",
      )}
    >
      {isSetup ? (
        <AccordionSidebar groups={SETUP_NAVIGATION} />
      ) : isLoan ? (
        <AccordionSidebar groups={LOAN_NAVIGATION} />
      ) : (
        <nav className="flex-1 space-y-1 p-3">
          {HOME_NAVIGATION.map((item) => {
            const Icon = item.icon;
            const hasChildren = !!item.items && item.items.length > 0;
            const isOpen = openHomeGroup === item.id;

            if (!hasChildren) {
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition",
                      isActive
                        ? "bg-[#0669b2] text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white",
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenHomeGroup(isOpen ? null : item.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition",
                    isOpen
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>

                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-1 space-y-1 pl-9">
                    {item.items!.map((sub) => (
                      <NavLink
                        key={sub.id}
                        to={sub.path}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-lg px-3 py-2 text-sm transition",
                            isActive
                              ? "bg-[#0669b2] text-white"
                              : "text-white/75 hover:bg-white/10 hover:text-white",
                          )
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </aside>
  );
}
