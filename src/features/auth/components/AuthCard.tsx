import { useState, type ReactNode } from "react";
import { Logo } from "../../../components/common/Logo";
import { Card, CardContent } from "../../../components/ui/card";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthCard({ title, description, children }: Props) {
  const [activeLogin, setActiveLogin] = useState<"nbcfdc" | "sca">("nbcfdc");

  return (
    <Card
      className="
        w-full
        max-w-md
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/70
        
        shadow-xl
        backdrop-blur-xl
        dark:border-zinc-800
        dark:bg-zinc-900/95
      "
    >
      <CardContent className="p-6 sm:p-8">
        {/* HEADER */}
        <div className="mb-8 space-y-3 text-center">
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            {title}
          </h1>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* LOGIN TYPE */}
        <div className="mb-6 flex w-full gap-2 rounded-xl bg-slate-100 p-1">
          {/* NBCFDC LOGIN */}
          <button
            type="button"
            onClick={() => setActiveLogin("nbcfdc")}
            className={`
              flex-1
              rounded-lg
              px-3
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-200
              ${
                activeLogin === "nbcfdc"
                  ? "bg-[#123B6D] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            NBCFDC Login
          </button>

          {/* SCA / BANKS LOGIN */}
          <button
            type="button"
            onClick={() => setActiveLogin("sca")}
            className={`
              flex-1
              rounded-lg
              px-3
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-200
              ${
                activeLogin === "sca"
                  ? "bg-[#123B6D] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            SCA / Banks Login
          </button>
        </div>

        {/* FORM */}
        {children}
      </CardContent>
    </Card>
  );
}
