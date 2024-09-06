import { useRef } from "react";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import Input from "../input/Input";
import ModalConfirmation, { ModalConfirmationHandle } from "../modal/modalConfirmation/ModalConfirmation";
import ButtonAddGym from "./components/buttonAddGym/buttonAddGym";
import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {

  const handleClick = () => {
    alert('Botão clicado!');
  };

  const modalRef = useRef<ModalConfirmationHandle>(null);

  return (
    <div className="w-full h-full flex flex-col  items-start p-1">
      <ModalConfirmation
        ref={modalRef}
        onConfirm={() => console.log('onConfirm')}
        onCancel={() => console.log('onCancel')}
      />
      <div className=" w-full flex flex-col items-center text-center mb-4 ">
      <GlobalTile title="Academias"/>
        <div className="w-full flex flex-row justify-center items-center mt-5 ">
            <Input
            className="w-1/2 h-full text-center"
            />
            <ButtonAddGym text="Adicionar academia" onClick={() => modalRef.current?.openModal()} />
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap lg:justify-start justify-center">
        {Array.from({ length: 5 }, () => {
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
