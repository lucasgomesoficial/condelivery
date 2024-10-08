import { CardStatsInfo } from "../../components";
import { SkeletonDashboard } from "../../components/skeleton-dashboard";
import { useFetchDelivery } from "../../hook/use-fetch-delivery";
import { createdOrderNumber } from "../../utils/created-order-number";

export function DeliveryCollaborator() {
  const { delivery, isLoading, updateOrder } = useFetchDelivery();

  const deliveryOnItsWay = delivery.filter(
    ({ status }) => status === "WaitingForCollaborator"
  );

  const deliveryFinish = delivery.filter(
    ({ status }) => status === "Delivered"
  );

  function updateStatus(orderId) {
    const hasConfirm = confirm("Aceitar pedido?");

    if (hasConfirm) {
      updateOrder({ orderId, roleUser: "Collaborator" });
    }
  }

  if (isLoading) return <SkeletonDashboard />;

  return (
    <>
      {deliveryOnItsWay.length ? (
        deliveryOnItsWay.map(
          ({ id, status, receivingCode, resident, block, apartment }) => (
            <a
              key={id}
              onClick={() => updateStatus(id)}
              className="cursor-pointer"
            >
              <CardStatsInfo
                orderNumber={createdOrderNumber(id)}
                orderStatus={status}
                tokenDelivery={receivingCode}
                resident={resident}
                block={block}
                apartment={apartment}
                isCollaborator
              />
            </a>
          )
        )
      ) : (
        <p>Não há pedidos no momento</p>
      )}
      <div className="border border-solid border-inherit"></div>
      {deliveryFinish.length &&
        deliveryFinish.map(
          ({ id, status, receivingCode, resident, block, apartment }) => (
            <CardStatsInfo
              key={id}
              orderNumber={createdOrderNumber(id)}
              orderStatus={status}
              tokenDelivery={receivingCode}
              resident={resident}
              block={block}
              apartment={apartment}
              isCollaborator
            />
          )
        )}
    </>
  );
}
