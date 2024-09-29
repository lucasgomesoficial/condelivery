import React from "react";

const delivery = [
  { orderNumber: "#0001", orderStatus: "received", tokenDelivery: "8885" },
  { orderNumber: "#0002", orderStatus: "preparing", tokenDelivery: "8886" },
  { orderNumber: "#0003", orderStatus: "sending", tokenDelivery: "8887" },
];

export const useFetchDelivery = () => {
  const [isLoading, setIsLoading] = React.useState(true); 
  const [deliveryMock, setDeliveryMock] = React.useState([]);

  const fecthDelivey = () => {
    setTimeout(() => {
      setDeliveryMock(delivery);
      setIsLoading(false);
    }, 3000);
  }
  React.useEffect(() => {
    fecthDelivey();
  }, []);

  return {
    isLoading, 
    deliveryMock,
  };
};