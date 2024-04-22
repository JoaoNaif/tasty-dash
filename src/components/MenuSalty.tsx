"use client";

import { Pratos } from "@/data/Pratos";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Modal } from "./Modal";

export const MenuSalty = () => {
  const search = useAppSelector((state) => state.search);
  const pratos = Pratos;
  const salty = pratos.filter((i) => i.tipo === "salgado");
  const filter = salty.filter((i) =>
    i.nome.toLocaleLowerCase().includes(search.status.toLocaleLowerCase())
  );
  const [idModal, setIdModal] = useState<number>(0);
  return (
    <div>
      {idModal !== 0 && <Modal id={idModal} setId={setIdModal} />}
      {search.status.length > 0 ? (
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {filter.map((item) => (
            <li
              key={item.id}
              className="bg-stone-50 flex rounded-md xl:h-52 h-44"
            >
              <img
                src={item.src}
                alt="Foto do prato"
                className="w-2/5 border rounded-md bg-stone-200 "
              />
              <div className="w-2/5 ml-4 overflow-x-hidden flex flex-col justify-evenly my-7 text-amber-900">
                <h1 className="xl:text-xl text-sm font-bold ">{item.nome}</h1>
                <span className="font-semibold ">{item.peso}g</span>
                <ul className="flex gap-3">
                  {item.ingredientes.map((i) => (
                    <li key={i} className="text-sm">
                      {i.split(" ").join("_")}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                onClick={() => setIdModal(item.id)}
                className="w-1/5 text-4xl flex items-center justify-center hover:bg-stone-200 cursor-pointer transition-colors duration-200 ease-linear"
              >
                <FaChevronRight className="text-amber-900" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {salty.map((item) => (
            <li
              key={item.id}
              className="bg-stone-50 flex rounded-md xl:h-52 h-44"
            >
              <img
                src={item.src}
                alt="Foto do prato"
                className="w-2/5 border rounded-md bg-stone-200 "
              />
              <div className="w-2/5 ml-4 overflow-x-hidden flex flex-col justify-evenly my-7 text-amber-900">
                <h1 className="xl:text-xl text-sm font-bold ">{item.nome}</h1>
                <span className="font-semibold ">{item.peso}g</span>
                <ul className="flex gap-3">
                  {item.ingredientes.map((i) => (
                    <li key={i} className="text-sm">
                      {i.split(" ").join("_")}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                onClick={() => setIdModal(item.id)}
                className="w-1/5 text-4xl flex items-center justify-center hover:bg-stone-200 cursor-pointer transition-colors duration-200 ease-in"
              >
                <FaChevronRight className="text-amber-900" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
