import {Header} from "../../components/index";
import { useFetchDelivery } from "../../hook/use-fetch-delivery";
import { Delivery } from "./components/delivery";

export function Dashboard() {
  const { deliveryMock, isLoading } = useFetchDelivery();
  return (
    <>
      <Header />
      <section className="px-14 pt-12 mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Delivery
            delivery={deliveryMock} 
            isLoading={isLoading}
          />
        </div>
      </section>
    </>
  );
}