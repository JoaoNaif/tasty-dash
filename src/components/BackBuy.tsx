"use client";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setOption } from "@/redux/reducers/optionReducer";
import { BsFillCartXFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

export const BackBuy = () => {
  const option = useAppSelector((state) => state.option.opc);
  const dispatch = useDispatch();
  return (
    <div className="bg-stone-50 h-2/5 rounded-xl py-4 px-10 flex justify-center items-center gap-3 flex-col md:flex-row">
      <BsFillCartXFill className="text-9xl" />
      <div className="flex flex-col justify-start text-center gap-2">
        <h1 className="font-bold text-3xl">Seu carrinho está fazio!</h1>
        <p>Vamos matar aquilo que está te matando!</p>
        <button
          className="border-2 border-[#FF8C00] rounded-2xl py-2 mx-5 font-bold hover:bg-[#FF8C00] hover:text-stone-50 hover:border-transparent transition-colors duration-300 ease-in"
          onClick={() => dispatch(setOption(1))}
        >
          IR AS COMPRAS
        </button>
      </div>
    </div>
  );
};
