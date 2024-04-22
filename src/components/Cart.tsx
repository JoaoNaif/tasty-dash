"use client";

import { Pratos } from "@/data/Pratos";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setListCart } from "@/redux/reducers/listCartReducer";
import { useRef, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaCheck,
  FaExternalLinkAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Description } from "./Description";
import { Cupom } from "./Cupom";
import { setFinish } from "@/redux/reducers/finishReducer";
import {
  setActive,
  setDiscount,
  setTotal,
} from "@/redux/reducers/finalValueReducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const listCart = useAppSelector((state) => state.listCart.cart);
  const finish = useAppSelector((state) => state.finish.finish);
  const values = useAppSelector((state) => state.values);
  const pratos = Pratos;
  const listCartId = listCart.map((i) => i.id);
  const filter = pratos.filter((i) => listCartId.includes(i.id));
  const totalItens = filter.reduce((acc, i) => {
    const foundItem = listCart.find((item) => item.id === i.id);
    if (foundItem) {
      return acc + foundItem.qtd * i.preco;
    }
    return acc;
  }, 0);
  const [sale, setSale] = useState("");
  const [ipt, setIpt] = useState("");

  const [open, setOpen] = useState<boolean>(false);

  const handleAdd = (id: number) => {
    const newQtd = listCart.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          qtd: i.qtd + 1,
        };
      }
      return i;
    });
    dispatch(setListCart(newQtd));
  };

  const handleMinus = (id: number) => {
    const newQtd = listCart
      .map((i) => {
        if (i.id === id) {
          return {
            ...i,
            qtd: i.qtd - 1,
          };
        }
        return i;
      })
      .filter((item) => item.qtd > 0);
    dispatch(setListCart(newQtd));
  };

  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);

  const handleEmailCopy = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      if (email) {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        emailRef.current.classList.add("text-emerald-400");
        setTimeout(() => {
          setEmailCopied(false);
          emailRef.current?.classList.remove("text-emerald-400");
        }, 2000);
      }
    }
  };

  const handleClickFinish = () => {
    dispatch(setFinish(listCart));
    if (sale === "DESCONTO10") {
      dispatch(setDiscount((totalItens * 0.1).toFixed(2)));
      dispatch(setTotal((totalItens * 0.9 + 5.94).toFixed(2)));
    } else {
      dispatch(setDiscount(0));
      dispatch(setTotal((totalItens + 5.94).toFixed(2)));
    }
    dispatch(setActive(true));
  };
  return (
    <div
      className={`bg-[#FF8C00] fixed overflow-hidden bottom-0  lg:w-2/5 xl:w-3/12 md:w-3/5 md:rounded-t-xl transition-transform duration-500 ease-linear ${
        open
          ? "md:h-[70%] h-full w-full md:w-3/5 md:right-3 right-0"
          : "h-1/12 md:right-3 right-2"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex text-stone-50 items-center justify-center gap-3 lg:text-xl xl:text-2xl text-sm font-bold cursor-pointer hover:bg-amber-900 py-2 px-6 transition-colors duration-200 ease-out"
      >
        <FaShoppingCart className="" />
        <h1>Meu Carrinho ({filter.length})</h1>
        {!open ? (
          <IoIosArrowUp className="lg:text-4xl text-xl" />
        ) : (
          <IoIosArrowDown className="lg:text-4xl text-xl" />
        )}
      </div>
      {open && (
        <div className={``}>
          <ul className="xl:max-h-[230px] md:max-h-[200px] max-h-[430px] overflow-y-auto">
            {filter.map((item) => (
              <li
                key={item.id}
                className="flex gap-3 px-6 text-stone-50 my-3 max-h-20 hover:bg-amber-900 "
              >
                <img
                  src={item.src}
                  alt="Foto do Prato"
                  className="w-1/5 h-20 bg-stone-50 rounded-xl"
                />
                <div className="flex flex-col justify-evenly w-3/5 ">
                  <h1 className="font-bold">{item.nome}</h1>
                  <div className="font-semibold text-sm">
                    {listCart.map((i) => (
                      <div key={i.id} className="flex">
                        {item.id === i.id && <p>R${item.preco * i.qtd}</p>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1 w-1/5 ">
                  {listCart.map((i) => (
                    <div key={i.id} className="flex text-2xl">
                      {item.id === i.id && <p>{i.qtd}</p>}
                    </div>
                  ))}
                  <div className="flex flex-col-reverse  items-center justify-center ">
                    <span
                      onClick={() => handleMinus(item.id)}
                      className="hover:bg-stone-50 hover:text-amber-900 h-7 w-7 flex justify-normal items-center px-2 cursor-pointer transition-colors duration-200 ease-linear"
                    >
                      <FaArrowDown />
                    </span>
                    <span
                      onClick={() => handleAdd(item.id)}
                      className="hover:bg-stone-50 hover:text-amber-900 h-7 w-7 flex justify-normal items-center px-2 cursor-pointer transition-colors duration-200 ease-linear"
                    >
                      <FaArrowUp />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col px-4 py-2 text-stone-50">
            <h1 className="font-bold">Entrega</h1>
            <div className="flex justify-between">
              <ul className="text-sm">
                <li>Minha casa</li>
                <li>Rua Brasil 2438</li>
                <li>São Paulo, São Paulo </li>
              </ul>
              <FaExternalLinkAlt className="text-xl" />
            </div>
          </div>
          <div className="text-stone-50">
            <div className="flex flex-col items-start p-4 gap-2">
              <h1 className="font-bold ">Cupom de desconto</h1>
              <div className="w-full flex items-center">
                <div className="w-4/5 rounded-xl flex items-center justify-center overflow-hidden ">
                  <input
                    type="text"
                    className="w-4/5 text-black outline-none px-2 py-3 "
                    value={ipt}
                    onChange={(e) => setIpt(e.target.value)}
                    placeholder="Adicione seu cupom..."
                  />
                  <button
                    onClick={() => setSale(ipt)}
                    className="w-1/5 flex justify-center items-center cursor-pointer bg-emerald-400 h-12 "
                  >
                    <FaCheck />
                  </button>
                </div>
                <Description description={<Cupom />}>
                  <div
                    ref={emailRef}
                    onClick={handleEmailCopy}
                    className="font-bold ml-4 flex flex-col items-center cursor-pointer transition-colors ease-linear duration-200"
                  >
                    <IoTicket className="text-3xl " />
                    <h1>DESCONTO10</h1>
                  </div>
                </Description>
              </div>
            </div>

            <ul className="px-4 text-sm font-bold text-stone-50">
              <li className="flex justify-between">
                <p>Desconto</p>
                <span className="flex gap-1">
                  R${" "}
                  {sale === "DESCONTO10" ? (
                    <p>{(totalItens * 0.1).toFixed(2)}</p>
                  ) : (
                    <p>0.00</p>
                  )}
                </span>
              </li>
              <li className="flex justify-between">
                <p>Taxa de entrega</p>
                <p>R$ 5.94</p>
              </li>
              <li className="flex justify-between">
                <p>Subtotal</p>
                <p>R$ {totalItens.toFixed(2)}</p>
              </li>
              <li className="flex justify-between">
                <p>Total</p>
                <span className="flex gap-1">
                  R${" "}
                  {sale === "DESCONTO10" ? (
                    <p>{(totalItens * 0.9 + 5.94).toFixed(2)}</p>
                  ) : (
                    <p>{(totalItens + 5.94).toFixed(2)}</p>
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center mt-5 ">
            <button
              onClick={handleClickFinish}
              className="bg-amber-900 w-4/5 rounded-3xl py-3 font-bold text-stone-50 hover:bg-amber-950 transition-colors duration-200 ease-in"
            >
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
