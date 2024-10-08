import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants";
import { Dashboard, ErrorPage, Login, Profile } from "../pages/index";
import { getFromLocalStorage } from "../utils/localStorage";

function RequireAuth({ children }) {
  const location = useLocation();
  const { userAuth } = getFromLocalStorage("userAuth");
  if (!userAuth) {
    return (
      <Navigate to={ROUTER_CONFIG.LOGIN} state={{ path: location.pathname }} />
    );
  }

  return children;
}

export function Navigation() {
  return (
    <Routes>
      <Route path={ROUTER_CONFIG.LOGIN} element={<Login />} />;
      <Route path={ROUTER_CONFIG.ERROR} element={<ErrorPage />} />;
      <Route
        path={ROUTER_CONFIG.DASHBOARD}
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path={ROUTER_CONFIG.PROFILE}
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
