import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-stone-50 w-full mt-10 flex flex-col gap-5 py-4">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        <div>
          <div className="flex flex-col justify-center items-center gap-1 xl:text-2xl text-xl text-stone-50 border-4 border-stone-50 rounded-full py-3 px-3">
            <span className="font-bold flex items-start ">
              <p className="text-2xl">T</p>
              <p className="underline ">as</p>
              <p className=" text-2xl">Ty</p>
            </span>
            <GiKnifeFork className="text-2xl" />
            <span className="font-bold flex items-start">
              <p className=" text-2xl">D</p>
              <p className="underline">as</p>
              <p className=" text-2xl">H</p>
            </span>
          </div>
          <h1 className="font-bold">Feito por João Naif</h1>
        </div>
        <ul className="flex flex-col my-4 md:m-0 md:flex-row gap-10">
          <li>
            <ul className="text-center font-semibold text-sm">
              <li className="font-bold lg:text-xl">Tecnologias:</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Next</li>
            </ul>
          </li>
          <li>
            <ul className="text-center font-semibold text-sm">
              <li className="font-bold text-xl">Bibliotecas:</li>
              <li>Redux</li>
              <li>Zod</li>
              <li>HookForm</li>
            </ul>
          </li>
          <li>
            <ul className="text-center font-semibold text-sm">
              <li className="font-bold text-xl">Inspirações:</li>
              <li>B7web</li>
              <li>Ifood</li>
            </ul>
          </li>
          <li>
            <ul className="text-center font-semibold text-sm">
              <li className="font-bold text-xl"> Data:</li>
              <li>Inicio: 07/04/2024</li>
              <li>Final: 13/04/2024</li>
            </ul>
          </li>
        </ul>
      </div>
      <ul className="flex justify-center items-center gap-5 text-3xl">
        <li className="border-2 border-stone-50 p-2 rounded-full hover:text-[#FF8C00] hover:border-[#FF8C00]">
          <a
            href="https://www.instagram.com/joaonaif/?hl=pt-br"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="border-2 border-stone-50 p-2 rounded-full hover:text-[#FF8C00] hover:border-[#FF8C00]">
          <a href="https://www.linkedin.com/in/joaonaif/" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="border-2 border-stone-50 p-2 rounded-full hover:text-[#FF8C00] hover:border-[#FF8C00]">
          <a href="https://www.linkedin.com/in/joaonaif/" target="_blank">
            <FiGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};
