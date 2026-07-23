import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./app/providers/AppProvider.tsx";
import { SidebarProvider } from "./components/layout/sidebar/SidebarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </AppProvider>
  </StrictMode>,
);
