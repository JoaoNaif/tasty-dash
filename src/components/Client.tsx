"use client";
import { Menu } from "@/components/Menu";
import { Search } from "@/components/Search";
import { Cart } from "@/components/Cart";
import { Pratos } from "@/data/Pratos";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { Order } from "./Order";
import { RegisterPerfil } from "./RegisterPerfil";
import { Footer } from "./Footer";

export const Client = () => {
  const listCart = useAppSelector((state) => state.listCart.cart);
  const option = useAppSelector((state) => state.option.opc);
  const pratos = Pratos;
  const listCartId = listCart.map((i) => i.id);
  const filter = pratos.filter((i) => listCartId.includes(i.id));
  return (
    <div className=" w-[70%] md:w-[80%] flex flex-col items-center container mx-auto justify-between  ">
      <Search />
      {option === 1 && <Menu />}
      {option === 2 && <Order />}
      {option === 3 && <RegisterPerfil />}
      {filter.length > 0 && <Cart />}
      <Footer />
    </div>
  );
};
