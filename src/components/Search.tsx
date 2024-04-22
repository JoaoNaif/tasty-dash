"use client";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setSearchStatus } from "@/redux/reducers/searchReducer";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import { useDispatch } from "react-redux";

export const Search = () => {
  const [show, setShow] = useState<boolean>(false);
  const search = useAppSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchStatus(e.target.value));
  };
  return (
    <div className="w-full flex gap-3 md:gap-0 flex-col md:flex-row items-center justify-between px-10 bg-[#FF8C00] p-2 mt-7 ">
      <div className="flex flex-col justify-center items-center gap-1 xl:text-2xl text-xl text-stone-50 border-4 border-stone-50 rounded-full xl:py-6 xl:px-8 md:py-4 md:px-6 px-10 py-4">
        <span className="font-bold flex items-start ">
          <p className="xl:text-4xl text-2xl">T</p>
          <p className="underline">as</p>
          <p className="xl:text-4xl text-2xl">Ty</p>
        </span>
        <GiKnifeFork className="text-3xl" />
        <span className="font-bold flex items-start">
          <p className="xl:text-4xl text-2xl">D</p>
          <p className="underline">as</p>
          <p className="xl:text-4xl text-2xl">H</p>
        </span>
      </div>
      <div className="flex items-center gap-3  ">
        <input
          type="text"
          className={`transition-all duration-200 ease-linear outline-none px-2 py-1 rounded-md text-amber-900 border focus:border-amber-900 md:focus:border-4 focus:border-2 ${
            show ? "opacity-100" : "opacity-0"
          }`}
          onChange={handleSearchChange}
          value={search.status}
          placeholder="Oque deseja..."
        />
        <div
          className="xl:text-4xl text-2xl transition-colors duration-200 ease-linear cursor-pointer bg-slate-50 text-[#FF8C00] p-2 rounded-full hover:bg-stone-200 hover:text-amber-900"
          onClick={() => setShow(!show)}
        >
          <FaMagnifyingGlass />
        </div>
      </div>
    </div>
  );
};
