import { Star } from "lucide-react";
import deliveryimg from "./../assets/deliveryImg.png";

const InfoRow = ({ label, value }) => (
  <div className="flex px-8 pt-4 items-start gap-4">
    <h3 className="text-base font-normal">
      <span className="font-bold">{label}: </span>
      {value}
    </h3>
  </div>
);

export function CardStatsInfo({
  orderNumber,
  orderStatus,
  tokenDelivery,
  resident,
  block,
  apartment,
  isCollaborator = false,
}) {
  const status = {
    WaitingForCollaborator: "Aguardando Colaborador",
    OnItsWay: "A Caminho",
    Delivered: "Finalizado",
  };

  return (
    <div className="flex justify-center py-8 px-8">
      <div className="w-full sm:w-80 h-full border rounded-lg shadow-lg">
        <div className="flex border rounded-t-lg bg-[#0074D9] px-11 pt-4 items-start gap-4">
          <img src={deliveryimg} alt="" role="presentation" />
        </div>
        <InfoRow label="Entrega" value={orderNumber} />
        <div className="flex px-8 pt-4 items-start gap-4">
          <p className="text-base font-normal">
            Sua entrega é realizada por um colaborador parceiro
          </p>
        </div>
        <InfoRow label="Status" value={status[orderStatus]} />
        <InfoRow label="Código de recebimento" value={tokenDelivery} />
        {isCollaborator && (
          <>
            <InfoRow label="Morador" value={resident} />
            <InfoRow label="Bloco" value={block} />
            <InfoRow label="Apartamento" value={apartment} />
          </>
        )}
        <div className="flex mt-8 mb-2 px-8 pt-4 items-start gap-4">
          <p className="flex space-x-1 cursor-pointer">
            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}
          </p>
        </div>
        <div className="flex mb-12 px-8 pt-4 items-start gap-4">
          <p className="text-secondary font-bold">Avaliar Entrega</p>
        </div>
      </div>
    </div>
  );
}
