import React from "react";

const profile = [
  {
    address: "Rua das Flores, 123. Bairro Jardim Encantado - Cidade das Estrelas, SP. CEP 12345-678 - Brasil",
    email: "hellen.silva345@gmail.com",
    cpf: "652.478.123-62",
    cellphone: "(11) 00000-0000",
    tokenResident: "#09987",
    block: "A",
    apartment: "8"
  },
];

export const useFetchProfile = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [profileMock, setProfileMock] = React.useState([]);

  const fecthDelivey = () => {
    setTimeout(() => {
      setProfileMock(profile);
      setIsLoading(false);
    }, 3000);
  }
  React.useEffect(() => {
    fecthDelivey();
  }, []);

  return {
    isLoading,
    profileMock,
  };
};