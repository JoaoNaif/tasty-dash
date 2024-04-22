"use client";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setOption } from "@/redux/reducers/optionReducer";
import { FaCartArrowDown, FaHouse, FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export const Header = () => {
  const option = useAppSelector((state) => state.option.opc);
  const dispatch = useDispatch();

  const handleClickPage = (id: number) => {
    dispatch(setOption(id));
  };
  return (
    <div className="bg-[#FF8C00] px-6 w-1/12 h-full fixed flex items-center justify-center rounded-md">
      <ul className="flex flex-col gap-10 lg:text-4xl text-xl text-stone-50">
        <li
          onClick={() => handleClickPage(1)}
          className={`hover:bg-amber-900 cursor-pointer p-3 rounded-full ${
            option === 1 && "bg-amber-900"
          }`}
        >
          <FaHouse />
        </li>
        <li
          onClick={() => handleClickPage(2)}
          className={`hover:bg-amber-900 cursor-pointer p-3 rounded-full ${
            option === 2 && "bg-amber-900"
          }`}
        >
          <FaCartArrowDown />
        </li>
        <li
          onClick={() => handleClickPage(3)}
          className={`hover:bg-amber-900 cursor-pointer p-3 rounded-full ${
            option === 3 && "bg-amber-900"
          }`}
        >
          <FaUser className="" />
        </li>
      </ul>
    </div>
  );
};
