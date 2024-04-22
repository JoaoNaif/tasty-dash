import { Pratos } from "@/data/Pratos";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

export const ViewOrder = () => {
  const pratos = Pratos;
  const finish = useAppSelector((state) => state.finish.finish);
  const listFinishId = finish.map((i) => i.id);
  const filter = pratos.filter((i) => listFinishId.includes(i.id));
  const values = useAppSelector((state) => state.values);
  return (
    <div className="flex flex-col lg:flex-row w-full mt-4 md:mt-6">
      <ul className=" py-2 flex-1 h-[250px] overflow-y-auto flex flex-col gap-4 ">
        {filter.map((item) => (
          <li key={item.id} className="flex justify-between items-center ">
            <div className="flex">
              <img
                src={item.src}
                className="h-16 w-16 bg-stone-200 rounded-xl"
                alt="Foto do prato"
              />
              <div className="flex flex-col gap-2 pl-2 text-sm md:text-xl">
                <h1 className="font-bold">{item.nome}</h1>
                <p>R${item.preco.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <ul>
                {finish.map((i) => (
                  <li key={i.id}>
                    {i.id === item.id && (
                      <p className="md:h-10 md:w-10 h-6 w-6 bg-[#FF8C00] text-stone-50 font-bold flex justify-center items-center rounded ">
                        {i.qtd}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className="gap-0 md:gap-3 mt-4 md:mt-0 flex-1 flex flex-col md:flex-row lg:flex-col  justify-around items-center ">
        <div className="">
          <h1 className="font-bold">Data do Pedido:</h1>
          <p className="text-sm">20/03/2024</p>
        </div>
        <div>
          <h1 className="font-bold">Endereço de entrega:</h1>
          <ul className="text-sm">
            <li>Minha casa</li>
            <li>Rua Brasil</li>
            <li>São Paulo, São Paulo</li>
          </ul>
        </div>
      </div>
      <div className="font-bold flex-1 flex flex-col justify-evenly gap-0 md:gap-3">
        <ul className="flex justify-between w-full">
          <li>Desconto</li>
          <li>R${values.discount}</li>
        </ul>
        <ul className="flex  justify-between w-full">
          <li>Taxa de Entrega</li>
          <li>R$5.94</li>
        </ul>
        <ul className="flex  justify-between w-full">
          <li>Total</li>
          <li>R${values.total}</li>
        </ul>
      </div>
    </div>
  );
};
