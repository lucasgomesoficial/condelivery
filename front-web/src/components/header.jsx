import { LogOut, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";
import { Button } from "./index";
import { Preferences } from "./preferences";
import { Suport } from "./suport";
import { ROUTER_CONFIG } from "../config/constants";
import { formattedRole } from "../utils/formatRole";

export function Header() {
  const navigate = useNavigate();
  const { signout, userData } = useAuth();

  function redirectLogout() {
    navigate(ROUTER_CONFIG.LOGIN, { replace: true });
  }

  const isAdmin = userData.current.role === "Admin";

  return (
    <header className="flex justify-between items-center bg-primary w-full h-28 rounded-b-2xl text-white px-14 font-semibold">
      <div className="flex-col gap-8 items-center">
        <p>{userData.current.name}</p>
        <p>{formattedRole(userData.current.role)}</p>
      </div>
      <div className="flex items-center gap-3">
        {!isAdmin && <Preferences />}
        <Suport />
        <Button
          className="px-2 bg-white text-secondary hover:bg-white border-2"
          onClick={() => navigate(ROUTER_CONFIG.PROFILE)}
        >
          <UserCircle />
        </Button>
        <Button
          variant="outline"
          className="flex-initial border-none bg-transparent hover:bg-transparent px-2"
          onClick={() => signout(redirectLogout)}
        >
          <LogOut color="#ffffff" />
        </Button>
      </div>
    </header>
  );
}
