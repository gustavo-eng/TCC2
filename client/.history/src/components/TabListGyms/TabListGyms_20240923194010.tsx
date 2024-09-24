import { useState } from "react";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import Input from "../input/Input";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";
import ButtonAddGym from "./components/buttonAddGym/buttonAddGym";
import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {

  const [isModalGymOpen, setIsModalGymOpen] = useState<boolean>(false)

  const openModalRegisterGym = () => setIsModalGymOpen(true);
  const closeModalRegisterGym = () => setIsModalGymOpen(false);


  return (
    <div className="w-full h-full flex flex-col  items-start p-1">
      <ModalRegisterGym
        isOpen={isModalGymOpen}
        onClose={closeModalRegisterGym}
      />
      <div className=" w-full flex flex-col items-center text-center mb-4 ">
      <GlobalTile title="Academias"/>
        <div className="w-full flex flex-row justify-center items-center mt-5 ">
            <Input
            className="w-1/2 h-full text-center"
            />
            <ButtonAddGym text="Adicionar academia" onClick={() => openModalRegisterGym()} />
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap lg:justify-start justify-center">
        {Array.from({ length: 2 }, () => {
          return (
            <CardsGym
              titulo="Academia de Judo"
              professor="Gustavo Alexandre Dias"
              email="gustavo.alexandre@email.com"
              cidade="Londrina"
              bairro="Centro"
              numero="89"
              telefone="(43) 999-9659"
            />
          );
        })}
      </div>
    </div>
  );
}

export default TabListGyms;
