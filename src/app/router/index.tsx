import { createBrowserRouter, Navigate } from "react-router-dom";
import CustomerLayout from "../../layouts/CustomerLayout";
import CustomerDashboard from "../../features/customer/pages/CustomerDashboard";
import AdminLayout from "../../layouts/AdminLayout";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { HomePage } from "../../features/public/pages/HomePage";
import { SchemeSetupPage } from "../../features/Setup/SchemeSetupPage";
import { SetupPlaceholderPage } from "../../features/Setup/SetupPlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/customer",
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <CustomerDashboard />,
      },
    ],
  },

  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "setup",
        element: <Navigate to="/setup/scheme-setup" replace />,
      },
      {
        path: "setup/scheme-setup",
        element: <SchemeSetupPage />,
      },
      {
        path: "setup/loan-type-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/sector-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/loan-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/group-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/channelising-partner-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/state-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/district-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/user-list",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/terms-conditions-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/bank-setup",
        element: <SetupPlaceholderPage />,
      },
      {
        path: "setup/course-setup",
        element: <SetupPlaceholderPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
