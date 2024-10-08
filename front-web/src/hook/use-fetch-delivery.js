import React from "react";
import { api } from "../service/api";
import { getFromLocalStorage } from "../utils/localStorage";

export const useFetchDelivery = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [delivery, setDelivery] = React.useState([]);

  const { userAuth } = getFromLocalStorage("userAuth");

  const fecthDelivey = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/orders-list/${userAuth.id}`, {
        headers: { token: userAuth.token },
      });

      setDelivery(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [userAuth.id, userAuth.token]);

  const updateOrder = React.useCallback(
    async (data) => {
      try {
        await api.put("/order-update", data, {
          headers: { token: userAuth.token },
        });
        fecthDelivey();
      } catch (error) {
        console.log(error);
      }
    },
    [fecthDelivey, userAuth.token]
  );

  React.useEffect(() => {
    fecthDelivey();
  }, [fecthDelivey]);

  return {
    isLoading,
    delivery,
    updateOrder,
  };
};
