import { useState } from "react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { useNavigate } from "react-router-dom";

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* AVATAR */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <Avatar className="cursor-pointer">
          <AvatarFallback className="bg-primary text-white">UA</AvatarFallback>
        </Avatar>
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            w-48
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            p-1
            shadow-lg
          "
        >
          <button
            type="button"
            className="
              w-full
              rounded-lg
              px-4
              py-2.5
              text-left
              text-sm
              text-slate-700
              transition
              hover:bg-slate-100
            "
            onClick={() => {
              navigate("/login");

              console.log("User Avatar clicked");
              setIsOpen(false);
            }}
          >
            Logout
          </button>

          <button
            type="button"
            className="
              w-full
              rounded-lg
              px-4
              py-2.5
              text-left
              text-sm
              text-slate-700
              transition
              hover:bg-slate-100
            "
            onClick={() => {
              console.log("Password Reset clicked");
              setIsOpen(false);
            }}
          >
            Password Reset
          </button>
        </div>
      )}
    </div>
  );
}
