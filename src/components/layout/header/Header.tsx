import { Menu, ChevronDown, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HEADER_NAVIGATION } from "../../../config/navigation/header-navigation";
import heroImage from "../../../assets/hero.png";
import { useSidebar } from "../sidebar/SidebarContext";

export function Header() {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex h-16 shrink-0 items-stretch bg-[#0669b2] text-white shadow-sm">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2 px-5">
        <img src={heroImage} alt="Leap" className="h-8 w-8 object-contain" />

        {/* <div className="leading-tight">
          <p
            className="text-2xl text-white"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            leap
          </p>
          <p className="-mt-1 text-[10px] tracking-widest text-white/80">
            towards future
          </p>
        </div> */}
      </NavLink>

      {/* Sidebar toggle */}
      <button
        type="button"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className="flex items-center px-4 text-white/90 transition hover:bg-white/10 hover:text-white"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Main nav */}
      <nav className="flex items-stretch">
        {HEADER_NAVIGATION.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#055a98] text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* User area */}
      <div className="flex items-center gap-4 px-6">
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/20 text-sm font-semibold">
              SJ
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-semibold leading-tight">
                Satish
              </span>
              <span className="block text-xs leading-tight text-white/80">
                ( Software Developer)
              </span>
            </span>

            <ChevronDown className="h-4 w-4 text-white/80" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-slate-700 shadow-lg">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile");
                }}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-100"
              >
                My Profile
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-100"
              >
                Password Reset
              </button>
            </div>
          )}
        </div>

        <span className="h-8 w-px bg-white/25" />

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex items-center gap-1.5 text-sm font-medium text-white/90 transition hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </header>
  );
}
