import deliveryimg from "./../../../assets/delivery.svg";
import { CardInformations, CardStatsInfo } from "../../../components/index";

export function Delivery({ delivery, isLoading }) {

  if (isLoading) return <div className="grid grid-cols-1 justify-center">
    <div>
      <p className="text-center text-8xl font-semibold text-secondary">Carregando...</p>
    </div>
    <div>
      <img className="size-full" src={deliveryimg} alt="" />
    </div>
  </div>

  return (
    <>
      <CardInformations
        address="#Rua das Flores, 123. Bairro Jardim Encantado - Cidade das Estrelas, SP. CEP 12345-678 - Brasil"
        residentAmount="1.045"
        deliveryAmount="8885"
        tokenResident="9987"
      />
      <div className="border border-solid border-inherit"></div>
      {delivery ? (
        delivery.map(({ orderNumber, orderStatus, tokenDelivery }) => (
          <CardStatsInfo
            key={orderNumber}
            orderNumber={orderNumber}
            orderStatus={orderStatus}
            tokenDelivery={tokenDelivery}
          />
        ))) : (
        <p>Não há pedidos no momento</p>
      )}
    </>
  );
}