"use client";

import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { PerfilOn } from "./PerfilOn";
import { PerfilOff } from "./PerfilOff";

export const RegisterPerfil = () => {
  const form = useAppSelector((state) => state.form);
  return (
    <div className="flex justify-center items-center w-full">
      {form.live ? <PerfilOn /> : <PerfilOff />}
    </div>
  );
};
