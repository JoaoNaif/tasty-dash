import { IoMdAlert } from "react-icons/io";

export const Cupom = () => {
  return (
    <div className="flex flex-col gap-1">
      <h3>Pegue seu cupom:</h3>
      <h1 className="text-sm">DESCONTO10</h1>
      <div className="flex items-center gap-2">
        <IoMdAlert className="text-xl font-bold" />
        <p className="text-left">Apenas 1º compra</p>
      </div>
    </div>
  );
};
