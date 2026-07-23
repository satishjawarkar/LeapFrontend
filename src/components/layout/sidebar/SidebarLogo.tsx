import { Store } from "lucide-react";
import heroImage from "../../../assets/hero.png";

export function SidebarLogo() {
  return (
    <div className="flex items-center gap-3 px-2 py-3">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
        style={{ backgroundColor: "#0895e0" }}
      >
        <img src={heroImage} alt="Leap Logo" />
      </div>

      <div>
        <h2 className="text-lg font-bold">Leap</h2>

        <p className="text-xs text-muted-foreground">Admin Dashboard</p>
      </div>
    </div>
  );
}
