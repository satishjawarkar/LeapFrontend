import type { ReactNode } from "react";
import { BrandPanel } from "./BrandPanel";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="grid h-screen overflow-hidden lg:grid-cols-2">
        <BrandPanel />

        <div
          className="
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-white/10
        p-12
      "
        >
          {children}
        </div>
      </div>

      <p className="pointer-events-none fixed bottom-4 left-0 w-full text-center text-sm text-black/70">
        © 2026. Developed & Maintained By NBCFDC
      </p>
    </>
  );
}
