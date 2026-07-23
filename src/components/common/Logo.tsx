import { Link } from "react-router-dom";
import heroImage from "../../../src/assets/hero.png";
export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div
        className="
    rounded-xl
    bg-gradient-to-br
    from-[oklch(0.64_0.15_242.24)]
    to-[oklch(0.52_0.18_265)]
    p-2
    text-white
    shadow-lg
  "
      >
        <img src={heroImage} alt="Leap Logo" />
      </div>
      {/* 
      <div>
        <h1 className="text-xl font-bold tracking-tight">Leap</h1>
      </div> */}
    </Link>
  );
}
