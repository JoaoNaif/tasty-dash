import { IoIosArrowForward } from "react-icons/io";

interface Props {
  title: string;
  desc: string;
}

export const ListPerfil = ({ title, desc }: Props) => {
  return (
    <li className="flex items-center justify-between px-1 py-3 hover:bg-stone-200 cursor-pointer border-b border-stone-200">
      <div>
        <h1 className="font-bold  text-sm">{title}</h1>
        <p className="md:text-sm text-xs">{desc}</p>
      </div>
      <IoIosArrowForward className="text-2xl" />
    </li>
  );
};
