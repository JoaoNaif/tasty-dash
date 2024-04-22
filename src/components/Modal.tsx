"use client";
import { Pratos } from "@/data/Pratos";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setListCart } from "@/redux/reducers/listCartReducer";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

export const Modal = ({ id, setId }: Props) => {
  const pratos = Pratos;
  const filter = pratos.filter((i) => i.id === id);
  const [num, setNum] = useState<number>(1);

  const listCart = useAppSelector((state) => state.listCart.cart);
  const dispatch = useDispatch();

  const handleClickMinus = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const handleClickPlus = () => {
    setNum(num + 1);
  };

  const handleAddCart = (id: number, qtd: number) => {
    const idFilter = listCart.map((i) => i.id);
    if (idFilter.includes(id)) {
      const newQtd = listCart.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            qtd: i.qtd + qtd,
          };
        }
        return i;
      });
      dispatch(setListCart(newQtd));
    } else {
      const newItem = { id: id, qtd: qtd };
      const newCart = [...listCart, newItem];
      dispatch(setListCart(newCart));
    }
    setId(0);
  };

  return (
    <div className="fixed h-screen w-full flex flex-col justify-center items-center bg-black bg-opacity-80 top-0 left-0 z-20">
      {filter.map((item) => (
        <div
          key={item.id}
          className="bg-stone-50 md:w-3/5 xl:h-3/5 md:h-4/5 w-full h-full md:rounded-2xl xl:pt-0 pt-4"
        >
          <div className="flex xl:flex-row flex-col xl:justify-between justify-center h-4/5 text-amber-900 p-6">
            <img
              src={item.src}
              alt="Foto dos pratos"
              className="xl:h-full xl:max-w-[50%] h-3/6 md:w-4/6 w-full mx-auto bg-stone-200 rounded-md"
            />
            <div className="flex  flex-col justify-evenly items-start flex-1 xl:ml-10 mx-10 mt-10 xl:mt-0">
              <h1 className="font-bold xl:text-4xl text-2xl mt-2 xl:mt-0">
                {item.nome} {item.peso} g
              </h1>
              <ul className="flex flex-col gap-2 xl:my-4 my-2 list-disc">
                <h3 className="font-bold xl:text-2xl text-xl">Igredientes</h3>
                {item.ingredientes.map((i) => (
                  <li key={i} className=" font-semibold">
                    {i.split(" ").join("_")}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between w-full mt-5 md:mt-0">
                <div className="xl:text-5xl text-4xl flex items-center gap-3">
                  <button
                    onClick={handleClickMinus}
                    className="hover:bg-amber-900 hover:text-stone-50 rounded-full px-4  w-12 h-12 flex justify-center items-center"
                  >
                    -
                  </button>
                  <p className="font-bold">{num}</p>
                  <button
                    onClick={handleClickPlus}
                    className="hover:bg-amber-900 hover:text-stone-50   w-12 h-12 flex items-start justify-center rounded-full"
                  >
                    +
                  </button>
                </div>
                <p className="xl:text-4xl text-3xl font-bold">
                  R${(item.preco * num).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex xl:justify-end justify-center items-center md:items-end p-2 md:p-4 gap-4 h-1/5 mr-10 text-stone-50 font-bold">
            <button
              onClick={() => setId(0)}
              className="bg-amber-900 px-4 rounded-md h-1/2 hover:bg-amber-950"
            >
              Cancelar
            </button>
            <button
              onClick={() => handleAddCart(item.id, num)}
              className="text-2xl h-2/3 bg-amber-900 rounded-md px-5 hover:bg-amber-950"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
