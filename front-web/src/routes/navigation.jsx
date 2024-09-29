import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authProvider";
// import { routes, routesProtect } from "./config";
import { Login, Dashboard, ErrorPage, Profile } from "../pages/index";

function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  return children;
}

export function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route path="*" element={<ErrorPage />} />;
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      {/* {routes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
      {routesProtect.map(({ path, component: Component }) => {
        console.log(Component)
        return (
          <Route
            key={path}
            path={path}
            element={
              <RequireAuth>
                <Component />
              </RequireAuth>
            }
          />
        );
      })} */}
    </Routes>
  );
}
