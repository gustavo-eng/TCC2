import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import client from "../../../service/client";
import Input from "../../input/Input";
import Select from "../../select/Select";
import TimerPicker from "../../timerPicker/TimerPicker";
import Modal from "../Modal";
import { registerEvent, registerEventSchema } from "./typeRegisterEvent";

interface eventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalRegistrationEvent({
  isOpen = false,
  onClose,
}: eventModalProps) {

  const [dataStart, setDataStart] = useState<any>();
  const [dataEnd, setDataEnd] = useState<any>();
  const [optionsType, setOptionsType] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const setOptions = async () => {
    try {
        const response = await client.competition.getTypeEvent();
        // Inicializa optionsVet como um array vazio
        let optionsVet: { value: any; label: any; }[] = [];

        if (response.status) {
            // Usa map para criar um novo array diretamente
            optionsVet = response.payload.map((el: any) => ({
                value: el?.idTypeEvent,
                label: el?.type,
            }));
        }

        // Atualiza o estado com as opções, mesmo se a resposta não for bem-sucedida
        setOptionsType(optionsVet);
    } catch (err) {
        console.error("Error fetching event types:", err);
        // Você pode tratar o erro aqui, se necessário
    }
};
  useEffect(() => {
    setOptions();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<registerEvent>({
    resolver: zodResolver(registerEventSchema)
  });

  const onSubmit = async (data: registerEvent) => {
    setLoading(true)
    try {
        const response = await client.competition.post(data)
        if (response.status) {
            toast.success('Evento cadastrado com sucesso')
        } else {
            toast.error('Erro ao cadastrar evento')
        }
    }catch(err) {
        console.error('Error -> ' + err)
    }finally {
        setLoading(false)
    }
  }

  return (
    <div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onClickOK={() => console.log("Ok")}
        onClickCancel={() => toast.error('Cadastro cancelado', {duration: 2000})}
        textHeader="Cadastro do evento"
        hasFooter
        labelBtnCancel="Cancelar"
        labelBtnOk="Salvar"
      >
        <Toaster />
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
            <Input
                label="Nome"
                inputClassName="rounded"
                {...register('description')}
                errorMessage={errors?.description?.message ?? ""}
            />
            <Input
                label="Preco (R$)"
                inputClassName="rounded"
                type="number"
                {...register('price')}
                //errorMessage={errors?.price?.message ?? ""}
            />
            <Input
                label="Bairro"
                inputClassName="rounded"
                {...register('neighborhood')}
                errorMessage={errors?.neighborhood?.message ?? ""}
            />
            <Input
                label="Rua"
                inputClassName="rounded"
                {...register('street')}
                errorMessage={errors?.street?.message ?? ""}
            />
            <Input
              label="Numero"
              inputClassName="rounded"
              type="number"
              {...register('number')}
              //errorMessage={errors?.number?.message ?? ""}
            />
            <Input
                label="Cidade"
                inputClassName="rounded"
                {...register('city')}
                errorMessage={errors?.city?.message ?? ""}

            />
            <Select
              id="gender"
              options={optionsType}
              label="Tipo"
              isOptional={true}
              className="mt-0"
              classNameSelect="bg-white"
              {...register('idTypeEvent')}
              onChange={(e) => setValue('idTypeEvent', e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

