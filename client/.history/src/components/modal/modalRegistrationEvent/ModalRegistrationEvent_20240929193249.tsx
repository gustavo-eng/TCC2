import { useEffect, useState } from "react";
import client from "../../../service/client";
import Input from "../../input/Input";
import Select from "../../select/Select";
import TimerPicker from "../../timerPicker/TimerPicker";
import Modal from "../Modal";

interface eventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalRegistrationEvent({
  isOpen = false,
  onClose,
}: eventModalProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dataStart, setDataStart] = useState<any>();
  const [dataEnd, setDataEnd] = useState<any>();
  const [optionsType, setOptionsType] = useState<any>();

  const setOptions = async () => {
    try{
        const response = await client.competition.getTypeEvent();
        let optionsVet = []
        if (response.status) {
            response.payload.map((el) => optionsVet.push({value: el?.type, label: el?.type}))
        } else {

        }
    }catch(err){

    }

  }
  useEffect(() => {

  }, [])

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onClickOK={() => console.log("Ok")}
        onClickCancel={() => console.log("Cancel")}
        textHeader="Cadastro do evento"
        hasFooter
        labelBtnCancel="Cancelar"
        labelBtnOk="Salvar"
      >
        {JSON.stringify(dataStart)}
        <div>
          {/* Hour and time */}
          <div className=" flex flex-rol justify-between mt-2">
            <div className=" flex  gap-2 mb-2">
              <TimerPicker
                label="Data de Início"
                value={dataStart}
                onChange={(date) => setDataStart(date)}
              />
              <TimerPicker
                label="Data de Término"
                value={dataEnd}
                onChange={(date) => setDataEnd(date)}
              />
            </div>
          </div>

          <div>

            <Input label="Nome" inputClassName="rounded" />
            <Input label="Preco (R$)" inputClassName="rounded" type="number" />
            <Input label="Bairro" inputClassName="rounded" isOptional />
            <Input label="Rua" inputClassName="rounded" isOptional />
            <Input
              label="Numero"
              inputClassName="rounded"
              isOptional
              type="number"
            />
            <Input label="Cidade" inputClassName="rounded" isOptional />
            <Select
              id="gender"
              name="gender"
              //options={options}
              label="Tipo"
              isOptional={true}
              className="mt-0"
              classNameSelect="bg-white"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

