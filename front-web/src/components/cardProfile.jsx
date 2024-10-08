import {
  Building,
  Hash,
  Indent,
  MapPinIcon,
  Pencil,
  Phone,
  Users,
} from "lucide-react";
import { EditProfile } from "../pages/ProfilePage/components/edit-profile";
import { useDeleteUser } from "../hook/use-deleted-user";
import { useAuth } from "../hook/use-auth";
import { Button } from "./ui/button";

const InfoRow = ({ icon: Icon, label, value, iconSize }) => (
  <div className="flex px-8 pt-6 items-start gap-4">
    <Icon size={iconSize} color="#0074D9" />
    <p className="text-base font-normal">
      <span className="font-bold">{label}: </span>
      {value}
    </p>
  </div>
);

export function CardProfile({
  address,
  email,
  cpf,
  cellphone,
  tokenResident,
  block,
  apartment,
}) {
  const { fetchDeleteUser } = useDeleteUser();
  const { signout } = useAuth();

  function deleteUser() {
    const hasConfirm = confirm("Tem certeza da exclusão do perfil?");

    if (hasConfirm) {
      fetchDeleteUser();
      signout();
    }
  }

  return (
    <div className="py-8 px-8">
      <div className="w-full h-full border rounded-lg shadow-lg p-11">
        <div className="flex px-8 pt-4 justify-between gap-4">
          <h3 className="text-base font-medium">Informações Gerais</h3>
          <div>
            <EditProfile>
              <Pencil color="#F57201" />
            </EditProfile>
          </div>
        </div>
        <InfoRow
          icon={MapPinIcon}
          label="Endereço"
          value={address}
          iconSize={24}
        />
        <InfoRow icon={Users} label="E-mail" value={email} iconSize={24} />
        <InfoRow icon={Indent} label="CPF" value={cpf} iconSize={24} />
        <InfoRow icon={Phone} label="Celular" value={cellphone} iconSize={24} />
        <InfoRow
          icon={Hash}
          label="ID Condomínio"
          value={tokenResident}
          iconSize={24}
        />
        <InfoRow icon={Building} label="Bloco" value={block} iconSize={24} />
        <InfoRow
          icon={Building}
          label="Apartamento"
          value={apartment}
          iconSize={24}
        />
      </div>
      <div className="flex px-8 pt-11 justify-center text-secondary">
        <Button onClick={deleteUser}>Apagar meu Perfil</Button>
      </div>
    </div>
  );
}
