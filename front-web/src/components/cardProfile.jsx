import { Building, Hash, Indent, IndentIcon, MapPinIcon, Pencil, Phone, UserCircle, Users } from "lucide-react";

// Componente reutilizável para linhas de informações
const InfoRow = ({ icon: Icon, label, value, iconSize }) => (
  <div className="flex px-8 pt-6 items-start gap-4">
    <Icon size={iconSize} color="#0074D9" />
    <p className="text-base font-normal">
      <span className="font-bold">{label}: </span>{value}
    </p>
  </div>
);

export function CardProfile({ address, email, cpf, cellphone, tokenResident, block, apartment }) {
  return (
    <div className="py-8 px-8">
      <div className="w-full h-full border rounded-lg shadow-lg p-11">
        <div className="flex px-8 pt-4 justify-between gap-4">
          <h3 className="text-base font-medium">Informações Gerais</h3>
          <div>
            <a href="#">
              <Pencil color="#F57201" />
            </a>
          </div>
        </div>
        <InfoRow
          icon={MapPinIcon}
          label="Endereço"
          value={address}
          iconSize={24}
        />
        <InfoRow
          icon={Users}
          label="E-mail"
          value={email}
          iconSize={24}
        />
        <InfoRow
          icon={Indent}
          label="CPF"
          value={cpf}
          iconSize={24}
        />
        <InfoRow
          icon={Phone}
          label="Celular"
          value={cellphone}
          iconSize={24}
        />
        <InfoRow
          icon={Hash}
          label="ID Condomínio"
          value={tokenResident}
          iconSize={24}
        />
        <InfoRow
          icon={Building}
          label="Bloco"
          value={block}
          iconSize={24}
        />
        <InfoRow
          icon={Building}
          label="Apartamento"
          value={apartment}
          iconSize={24}
        />
      </div>
      <div className="flex px-8 pt-11 justify-center text-secondary">
        <a href="#">Apagar meu Perfil</a>
      </div>
    </div>
  );
}
