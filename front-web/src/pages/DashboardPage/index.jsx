import { Header } from "../../components/index";
import { useAuth } from "../../hook/use-auth";
import { renderWithRole } from "./config/render-with-role";

export function Dashboard() {
  const { userData } = useAuth();
  return (
    <>
      <Header />
      <section className="px-14 pt-12 mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          {renderWithRole(userData.current.role)}
        </div>
      </section>
    </>
  );
}
