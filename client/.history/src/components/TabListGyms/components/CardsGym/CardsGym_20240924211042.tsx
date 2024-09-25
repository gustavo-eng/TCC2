import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import client from "../../../../service/client";
import Button from "../../../buttons/button";
import ModalConfirmation, {
  ModalConfirmationHandle,
} from "../../../modal/modalConfirmation/ModalConfirmation";

interface CardProps {
  professor?: string;
  email?: string;
  cidade?: string;
  bairro?: string;
  numero?: string;
  telefone?: string;
  titulo?: string;
  className?:string;
  idGym ?: string;
  refreshGyms?: () => void;
}

const CardsGym: React.FC<CardProps> = ({
  professor,
  email,
  cidade,
  bairro,
  numero,
  telefone,
  titulo,
  idGym,
  refreshGyms,
  className
}) => {

  const modalRef = useRef<ModalConfirmationHandle>(null);

  const deleteGym = async (idGym?: string)  => {
    try {
      if (idGym) {
        const response = await client.gym.delete(String(idGym));

        if(response.status) {
          toast.success("Academia deletada com sucesso!");
          () => refreshGyms;
        }else {
          toast.error("Erro ao deletar academia!");
        }
      } else {
        toast.error('Selecione a academia');
      }
    }catch(err) {
      toast.error('Erro ao deletar academia');
    }
  }

  return (
    <div className={twMerge("m-1 w-fit h-fit p-2 bg-white rounded-lg shadow-md border-l-[9px] !border-l-green-400  border-gray-200 hover:bg-gray-50", className)}>
      <Toaster />
      <ModalConfirmation
        ref={modalRef}
        onConfirm={() => deleteGym(idGym as string)}
        onCancel={() => console.log("cancel")}
      />
      <div className="flex items-start">
        <div className="h-full bg-green-500 rounded-l-lg" />
        <div className="ml-4">
          <h2 className="text-xl -tracking-normal text-center font-semibold mb-4 text-green-800">
            {titulo}
          </h2>
          <div className="grid grid-cols-2 gap-3.5 mr-2 text-gray-500">
            <div className="">
              <p className="font-semibold">Professor</p>
              <p>{professor}</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="break-words">{email}</p>
            </div>
            <div>
              <p className="font-semibold">Cidade</p>
              <p>{cidade}</p>
            </div>
            <div>
              <p className="font-semibold">Bairro</p>
              <p>{bairro}</p>
            </div>
            <div>
              <p className="font-semibold">Número</p>
              <p>{numero}</p>
            </div>
            <div>
              <p className="font-semibold">Telefone</p>
              <p>{telefone}</p>
            </div>
          </div>
          <div className=" flex flex-row  gap-2 mt-3 justify-start w-full">
            <Button
              className="p-1.5 px-5 bg-red-500/80 text-white rounded-lg hover:bg-red-500/90"
              label="Deletar"
              onClick={() => modalRef.current?.openModal()}
            />
            <Button
              className="p-1.5 px-5 bg-green-500 text-white rounded-lg hover:bg-green-600"
              label="Editar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGym;
