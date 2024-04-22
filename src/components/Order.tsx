"use client";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { OtherOrder } from "./OtherOrder";
import { TimeOrder } from "./TimeOrder";
import { ViewOrder } from "./ViewOrder";
import { BackBuy } from "./BackBuy";

export const Order = () => {
  const order = useAppSelector((state) => state.values.active);
  return (
    <div className="my-10 w-full md:h-screen h-full  text-[#FF8C00] ">
      {order ? (
        <div className="bg-stone-50 lg:h-2/5 md:h-[55%] h-3/6 rounded-xl py-4 px-10 flex flex-col gap-3 ">
          <TimeOrder />
          <ViewOrder />
        </div>
      ) : (
        <BackBuy />
      )}
      <h1 className="text-2xl text-stone-50 font-bold mt-3 md:mt-10 mb-2 bg-amber-900 rounded-md px-2 md:w-1/6 w-3/6">
        Outros Pedidos
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1  gap-3 mb-32 ">
        <OtherOrder />
        <OtherOrder />
        <OtherOrder />
        <OtherOrder />
      </div>
    </div>
  );
};
