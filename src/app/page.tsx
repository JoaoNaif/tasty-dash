import { Client } from "@/components/Client";
import { Header } from "@/components/Header";

//Laranja Vivo #FFA500
//Laranja Pêssego #FFDAB9

const Page = () => {
  return (
    <div className="flex min-h-screen h-full bg-food bg-contain bg-repeat ">
      <Header />
      <Client />
    </div>
  );
};

export default Page;
