import { ArrowLeftIcon } from "lucide-react";
import { Button, Header } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { CardProfile } from "../../components/cardProfile";

export function Profile() {
  const navigate = useNavigate();
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

  return (
    <>
      <Header />
      <section className="px-14 pt-12">
        <div className="flex justify-end"> 
          <Button
            className="flex-initial bg-transparent hover:bg-transparent"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeftIcon color="#0074d9" />
          </Button>
        </div>
        <div className="">
          {profile.map(({ address, email, cpf, cellphone, tokenResident, block, apartment }) => {
            return (
              <CardProfile
                key={tokenResident}
                address={address}
                email={email}
                cpf={cpf}
                cellphone={cellphone}
                tokenResident={tokenResident}
                block={block}
                apartment={apartment}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

