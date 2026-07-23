import type { ReactNode } from "react";

import { QueryProvider } from "./QueryProvider";
import { ToastProvider } from "./ToastProvider";
import { ThemeProvider } from "./ThemeProvider";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
      {children}
      </ThemeProvider>
      <ToastProvider/>
    </QueryProvider>
  );
}