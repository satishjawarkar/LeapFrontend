import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "./app/query-client/queryClient.ts";
import { AppProvider } from "./app/providers/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
