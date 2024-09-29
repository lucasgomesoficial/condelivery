import { Hash, MapPinIcon, PackageCheck, UserCircle, Users } from "lucide-react";

// Componente reutilizável para linhas de informações
const InfoRow = ({ icon: Icon, label, value, iconSize }) => (
  <div className="flex px-8 pt-6 items-start gap-4">
    <Icon size={iconSize} color="#0074D9" />
    <p className="text-base font-normal">
      <span className="font-bold">{label}: </span>{value}
    </p>
  </div>
);

export function CardInformations({ address, residentAmount, deliveryAmount, tokenResident }) {
  return (
    <div className="flex justify-center py-8 px-8">
      <div className="w-full sm:w-80 h-full border rounded-lg shadow-lg">
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-medium">Informações Gerais</h3>
        </div>
        <InfoRow
          icon={MapPinIcon}
          label="Endereço"
          value={address}
          iconSize={68}
        />
        <InfoRow
          icon={Users}
          label="Quantidade de Moradores"
          value={residentAmount}
          iconSize={24}
        />
        <InfoRow
          icon={PackageCheck}
          label="Quantidade de entregas"
          value={deliveryAmount}
          iconSize={24}
        />
        <InfoRow
          icon={Hash}
          label="Código de recebimento"
          value={tokenResident}
          iconSize={24}
        />
        <div className="flex mt-8 mb-2 px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-medium">Colaboradores Ativos</h3>
        </div>
        <div className="flex mb-2 px-8 pt-4 items-start gap-4">
          <p className="flex space-x-5 cursor-pointer">
            {[...Array(5)].map((_, i) => (
              <UserCircle
                key={i}
                size={24}
                color="#0074d9"
              />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
