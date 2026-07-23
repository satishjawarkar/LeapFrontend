import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../../layouts/CustomerLayout";
import CustomerDashboard from "../../features/customer/pages/CustomerDashboard";
import AdminLayout from "../../layouts/AdminLayout";
import { DashboardPage } from "../../features/admin/dashboard/pages/DashBoardPage";
import { LoginPage } from "../../features/auth/pages/LoginPage";

export const router = createBrowserRouter([
  // {
  //   element: <PublicLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <HomePage />,
  //     },
  //   ],
  // },

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
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
