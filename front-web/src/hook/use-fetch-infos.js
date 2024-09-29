import React from "react";

const infos = [
  {
    address: "#Rua das Flores, 123. Bairro Jardim Encantado - Cidade das Estrelas, SP. CEP 12345-678 - Brasil",
    residentAmount: "1.045",
    deliveryAmount: "8885",
    tokenResident: "9987",
  }
];

export const useFetchInfos = () => {
  const [isLoad, setIsLoad] = React.useState(true);
  const [infosyMock, setInfosMock] = React.useState([]);

  const fecthInfos = () => {
    setTimeout(() => {
      setInfosMock(infos);
      setIsLoad(false);
    }, 3000);
  }
  React.useEffect(() => {
    fecthInfos();
  }, []);

  return {
    isLoad,
    infosyMock,
  };
};