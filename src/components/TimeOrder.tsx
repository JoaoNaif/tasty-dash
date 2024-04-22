import { CircleOrder } from "./CircleOrder";
import { LineOrder } from "./LineOrder";

export const TimeOrder = () => {
  return (
    <div>
      <div className="flex items-center px-5">
        <CircleOrder percentage={100} />
        <LineOrder percentage={100} />
        <CircleOrder percentage={100} />
        <LineOrder percentage={20} />
        <CircleOrder percentage={20} />
      </div>
      <div>
        <ul className="flex justify-between mt-1 text-sm  font-bold ">
          <li>Pedido recebido</li>
          <li>Pedido enviado</li>
          <li>Pedido entregue</li>
        </ul>
      </div>
    </div>
  );
};
