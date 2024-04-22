"use client";

import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { FaCircleUser } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { ListPerfil } from "./ListPerfil";
import { useDispatch } from "react-redux";
import { setLive } from "@/redux/reducers/formReducer";

export const PerfilOn = () => {
  const form = useAppSelector((state) => state.form);
  const dispatch = useDispatch();
  return (
    <div className="lg:w-1/2 md:w-2/3  my-10 flex flex-col p-2 xl:p-0 xl:px-2 rounded bg-stone-50 text-[#FF8C00]">
      <div className="flex justify-between items-center  w-full p-2 my-2">
        <div className="flex items-center justify-center gap-1">
          <FaCircleUser className="md:text-3xl text-2xl" />
          <h1 className="md:text-sm text-xs">{form.email}</h1>
        </div>
        <ImExit
          className="md:text-3xl text-2xl cursor-pointer"
          onClick={() => dispatch(setLive(false))}
        />
      </div>
      <div className="flex xl:flex-row flex-col gap-4">
        <ul className="flex-1 flex flex-col">
          <ListPerfil title="Conversas" desc="Meu histórico de conversas" />
          <ListPerfil
            title="Notificações"
            desc="Minha central de notificações"
          />
          <ListPerfil title="Pagamentos" desc="Meus saldos e cartões" />
          <ListPerfil title="Assinaturas" desc="Minhas assinaturas" />
        </ul>
        <ul className="flex-1 flex flex-col">
          <ListPerfil title="Clube Tasty" desc="Meus benefícios exclusivos" />
          <ListPerfil title="Cupons" desc="Meus cupons de descontos" />
          <ListPerfil
            title="Tasty Card"
            desc="Minha área de compra e resgaste"
          />
          <ListPerfil title="Fidelidade" desc="Minhas fidelidades" />
        </ul>
      </div>
    </div>
  );
};
