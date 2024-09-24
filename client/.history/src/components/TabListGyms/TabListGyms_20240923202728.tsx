import { Fragment, useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import Input from "../input/Input";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";
import ButtonAddGym from "./components/buttonAddGym/buttonAddGym";
import CardsGym from "./components/CardsGym/CardsGym";

interface gymsTypes {
  city?: string;
  cnpj?: string;
  email?: string;
  idGym?: string | number;
  name?: string;
  neighborhood ?: string;
  number ?: string | number;
  password ?: string;
  phone ?: string;
  role ?: string;
  sensei ?: string;
  street ?: string;
}

function TabListGyms() {

  const [isModalGymOpen, setIsModalGymOpen] = useState<boolean>(false);
  const [gyms, setGyms] = useState<gymsTypes[]>([]);

  const openModalRegisterGym = () => setIsModalGymOpen(true);
  const closeModalRegisterGym = () => setIsModalGymOpen(false);

  const getGyms = async () => {
    const gyms = await client.gym.list();
    if(gyms?.payload) {
      setGyms(gyms?.payload);
    } else {
      setGyms([]);
    }
    console.warn('gyms', gyms?.payload)
  }

  useEffect(() => {
    getGyms();
  }, []);


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
            className="w-1/2 h-full text-center mr-2"
            />
            <ButtonAddGym text="Adicionar academia" onClick={() => openModalRegisterGym()} />
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap lg:justify-start justify-center">
        {gyms && gyms.length > 0 && gyms?.map((el, index) => {
          return (
            <Fragment key={index}>
              <CardsGym
              className="min-w-[400px]"
              titulo={el?.name || ""}
              professor={el?.sensei || ""}
              email={el?.email || ""}
              cidade={el?.city || ""}
              bairro={el?.neighborhood || ""}
              numero={String(el?.number) || ""}
              telefone={el?.phone || " (xx) xxxx-xxxx "}
            />
            </Fragment>
          )
        })}
      </div>
    </div>
  );
}

export default TabListGyms;
