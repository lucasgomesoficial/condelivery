import { CardInformations, CardStatsInfo } from "../../components";
import { SkeletonDashboard } from "../../components/skeleton-dashboard";
import { useFetchDelivery } from "../../hook/use-fetch-delivery";
import { createdOrderNumber } from "../../utils/created-order-number";

export function Delivery() {
  const { delivery, isLoading } = useFetchDelivery();

  if (isLoading) return <SkeletonDashboard />;

  const deliveryOnItsWay = delivery.filter(
    ({ status }) => status === "OnItsWay"
  );

  const deliveryFinish = delivery.filter(
    ({ status }) => status === "Delivered"
  );

  return (
    <>
      <CardInformations
        address="#Rua das Flores, 123. Bairro Jardim Encantado - Cidade das Estrelas, SP. CEP 12345-678 - Brasil"
        residentAmount="1.045"
        deliveryAmount="8885"
      />
      <div className="border border-solid border-inherit"></div>
      {deliveryOnItsWay.length ? (
        deliveryOnItsWay.map(({ id, status, receivingCode }) => (
          <CardStatsInfo
            key={id}
            orderNumber={createdOrderNumber(id)}
            orderStatus={status}
            tokenDelivery={receivingCode}
          />
        ))
      ) : (
        <p>Não há pedidos no momento</p>
      )}
      {deliveryFinish.length &&
        deliveryFinish.map(({ id, status, receivingCode }) => (
          <CardStatsInfo
            key={id}
            orderNumber={createdOrderNumber(id)}
            orderStatus={status}
            tokenDelivery={receivingCode}
          />
        ))}
    </>
  );
}
