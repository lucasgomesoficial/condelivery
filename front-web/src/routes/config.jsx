import { Login } from "@/pages/LoginPage";
import { Dashboard } from "@/pages/DashboardPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { Profile } from "@/pages/ProfilePage";

export const routes = [
  {
    path: "/",
    component: <Login />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];

export const routesProtect = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
];
