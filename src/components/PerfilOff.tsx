"use client";

import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setEmail, setLive, setPass } from "@/redux/reducers/formReducer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(7, "Mínimo 7 caractere"),
});

export const PerfilOff = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const formInput = useAppSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleSignUpForm: SubmitHandler<any> = (data) => {
    dispatch(setEmail(data.email));
    dispatch(setPass(data.password));
    dispatch(setLive(true));
  };

  const [check, setCheck] = useState(false);
  const [link, setLink] = useState(true);
  const [type, setType] = useState("password");

  return (
    <div className=" h-full mt-10 ">
      <h1 className="font-bold text-stone-50 text-center text-3xl ">
        Entre na Conta
      </h1>
      <div className="flex min-h-[500px] bg-[#FF8C00] w-[700px]">
        <div className="flex-1 px-4 text-stone-50 ">
          <ul className="flex gap-10 mt-2 mb-10 font-bold">
            <li onClick={() => setLink(true)}>
              <p
                className={`cursor-pointer ${
                  link ? "text-amber-900" : "text-stone-50"
                }`}
              >
                Login
              </p>
              {link && <div className="h-1 w-4/5 bg-amber-900 rounded-full " />}
            </li>
            <li onClick={() => setLink(false)}>
              <p
                className={`cursor-pointer ${
                  !link ? "text-amber-900" : "text-stone-50"
                }`}
              >
                Descrição
              </p>
              {!link && (
                <div className="h-1 w-4/5 bg-amber-900 rounded-full " />
              )}
            </li>
          </ul>
          {link ? (
            <>
              <div className="my-3 flex flex-col ">
                <h1 className="text-xl font-bold">
                  Faça o registro com a gente
                </h1>
                <p className="text-sm">mate oque está te matando!</p>
              </div>
              <form onSubmit={handleSubmit(handleSignUpForm)}>
                <div className="flex flex-col ">
                  <div className="flex flex-col bg-amber-900 rounded ">
                    <span className="text-amber-700 pt-1 px-2">E-mail</span>
                    <input
                      type="text"
                      {...register("email")}
                      className="text-stone-50 bg-transparent px-2 py-1 outline-none border-b-2 border-transparent focus:border-stone-50 transition-colors duration-200 ease-in"
                    />
                  </div>
                  <p className="text-red-500 bg-stone-50 font-bold my-2 px-1 w-1/2  text-center">
                    {errors.email?.message as string}
                  </p>
                </div>
                <div className="flex flex-col ">
                  <div className="flex flex-col bg-amber-900 rounded">
                    <span className="text-amber-700 pt-1 px-2">Senha</span>
                    <div className="flex ">
                      <input
                        type={type}
                        className="text-stone-50 w-full bg-transparent px-2 py-1 outline-none border-b-2 border-transparent focus:border-stone-50 transition-colors duration-200 ease-in"
                        {...register("password")}
                      />
                      <div className="flex items-center justify-center text-xl px-2">
                        {type === "password" ? (
                          <FaEye onClick={() => setType("text")} />
                        ) : (
                          <FaEyeSlash onClick={() => setType("password")} />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-red-500 bg-stone-50 font-bold my-2 px-1 w-1/2  text-center">
                    {errors.password?.message as string}
                  </p>
                </div>

                <ul className="text-sm mt-3 flex justify-between ">
                  <li
                    className="flex gap-1 cursor-pointer"
                    onClick={() => setCheck(!check)}
                  >
                    <div
                      className={`w-5 h-5 border flex justify-center items-center font-bold text-xl  ${
                        check
                          ? "border-amber-900 bg-amber-900 text-stone-50"
                          : "border-stone-50 bg-stone-50"
                      } transition-colors duration-300 ease-in`}
                    >
                      {check && <FaCheck />}
                    </div>
                    <p className="hover:underline">Lembrar de mim?</p>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    esqueceu a senha?
                  </li>
                </ul>

                <input
                  type="submit"
                  value={`Entrar`}
                  className="mt-10 bg-amber-900 w-1/2 rounded-2xl py-2 cursor-pointer"
                />
              </form>
            </>
          ) : (
            <div>
              <p>
                <span className="text-amber-900 font-bold mr-1 text-xl">
                  Tasty Dash
                </span>
                é o seu companheiro definitivo quando se trata de descobrir,
                pedir e desfrutar de uma ampla variedade de pratos deliciosos no
                conforto da sua casa ou onde quer que você esteja. Com uma
                interface intuitiva e uma extensa seleção de restaurantes locais
                e cadeias populares,{" "}
                <span className="text-amber-900 font-bold mr-1 text-xl">
                  Tasty Dash
                </span>{" "}
                simplifica a maneira como você satisfaz seus desejos
                gastronômicos.
              </p>
            </div>
          )}
        </div>
        <div className="bg-gastronomy bg-cover bg-center flex-1 h-[500px] w-[400px]"></div>
      </div>
    </div>
  );
};
