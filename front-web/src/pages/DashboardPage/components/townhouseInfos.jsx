import { CardInformations } from "../../../components/index";

export function TownhouseInfos({ infos, isLoad }) {
  if (isLoad)

    return (
      <>
        {infos ? (
          infos.map(({ address, residentAmount, deliveryAmount, tokenResident }) => (
            <CardInformations
              key={tokenResident}
              address={address}
              residentAmount={residentAmount}
              deliveryAmount={deliveryAmount}
              tokenResident={tokenResident}
            />
          ))) : (
          <p>Não há informações no momento</p>
        )}
      </>
    );
}