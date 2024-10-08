import deliveryimg from "../assets/delivery.svg";

export function SkeletonDashboard() {
  return (
    <div className="grid grid-cols-1 justify-center">
      <div>
        <p className="text-center text-8xl font-semibold text-secondary">
          Carregando...
        </p>
      </div>
      <div>
        <img className="size-full" src={deliveryimg} alt="" />
      </div>
    </div>
  );
}
