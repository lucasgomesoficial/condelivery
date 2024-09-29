import { Button } from "./index";
import { HeadphonesIcon, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "../context/authProvider";
import { useNavigate } from "react-router-dom";
import { Preferences } from "./preferences";
import { Suport } from "./suport";

export function Header() {
  const navigate = useNavigate();
  const { signout, user } = useAuth();

  function test() {
    console.log("logout")
  }

  return (
    <header className="flex justify-between items-center bg-primary w-full h-28 rounded-b-2xl text-white px-14 font-semibold">
      <div className="flex-col gap-8 items-center">
        <p>{user.email}</p>
        <p>CPF: 000000000-00</p>
      </div>
      <div className="flex items-center gap-3">
        <Preferences />
        <Suport />
        <Button
          className="px-2 bg-white text-secondary hover:bg-white border-2"
          onClick={() => navigate("/profile")}
        >
          <UserCircle />
        </Button>
        <Button
          variant="outline"
          className="flex-initial border-none bg-transparent hover:bg-transparent px-2"
          onClick={() => signout(test)}
        >
          <LogOut color="#ffffff" />
        </Button>
      </div>
    </header>
  );
}
