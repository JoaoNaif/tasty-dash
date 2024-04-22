"use client";
import { FaBookOpen } from "react-icons/fa6";
import { GiCupcake, GiRoastChicken } from "react-icons/gi";
import { MdNoFood } from "react-icons/md";
import { MenuAll } from "./MenuAll";
import { useState } from "react";
import { MenuSalty } from "./MenuSalty";
import { MenuSweet } from "./MenuSweet";
import { MenuBittersweet } from "./MenuBittersweet";
export const Menu = () => {
  const [filterFood, setFilterFood] = useState<number>(0);
  return (
    <div className="min-w-[50%] transition-all duration-200 ease-linear">
      <div className="text-stone-50 mt-5">
        <h1 className="font-bold xl:text-xl bg-orange-50 text-amber-900 w-full md:w-1/3 py-2 rounded-md text-center">
          Selecione uma categoria: {filterFood === 0 && "CARDÁPIO"}{" "}
          {filterFood === 1 && "SALGADO"} {filterFood === 2 && "DOCE"}{" "}
          {filterFood === 3 && "AGRIDOCE"}
        </h1>
        <ul className="xl:text-6xl text-5xl w-full md:w-1/3 flex gap-3 justify-evenly my-7 text-[#FF8C00]">
          <li
            onClick={() => setFilterFood(0)}
            className={` p-2 rounded-xl cursor-pointer ${
              filterFood === 0
                ? "bg-stone-50 text-amber-900"
                : "bg-orange-100 hover:bg-stone-50"
            }`}
          >
            <FaBookOpen />
          </li>
          <li
            onClick={() => setFilterFood(1)}
            className={` p-2 rounded-xl cursor-pointer ${
              filterFood === 1
                ? "bg-stone-50 text-amber-900"
                : "bg-orange-100 hover:bg-stone-50"
            }`}
          >
            <GiRoastChicken />
          </li>
          <li
            onClick={() => setFilterFood(2)}
            className={` p-2 rounded-xl cursor-pointer ${
              filterFood === 2
                ? "bg-stone-50 text-amber-900"
                : "bg-orange-100 hover:bg-stone-50"
            }`}
          >
            <GiCupcake />
          </li>
          <li
            onClick={() => setFilterFood(3)}
            className={` p-2 rounded-xl cursor-pointer ${
              filterFood === 3
                ? "bg-stone-50 text-amber-900"
                : "bg-orange-100 hover:bg-stone-50"
            }`}
          >
            <MdNoFood />
          </li>
        </ul>
      </div>
      {filterFood === 0 && <MenuAll />}
      {filterFood === 1 && <MenuSalty />}
      {filterFood === 2 && <MenuSweet />}
      {filterFood === 3 && <MenuBittersweet />}
    </div>
  );
};
