import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import client from "../../../service/client";
import Input from "../../input/Input";
import Modal from "../Modal";
import { registerGym, registerGymSchema } from "./RegisterGymTypes";


interface ModalRegisterGymProps {
    isOpen: boolean;
    onClose: () => void;
    refresh?: any
}

export default function ModalRegisterGym({
    isOpen,
    refresh,
    onClose
}: ModalRegisterGymProps) {


    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<registerGym>({
        resolver: zodResolver(registerGymSchema),
        reValidateMode: "onBlur"
    })

    const onSubmit = async (data: registerGym) => { // Corrigido o tipo aqui
        setLoading(true);
        try {
            // Realizar a lógica de cadastro aqui
            const response = await client.gym.register(data);
            if(response.status) {
                toast.success('Academia criada', {duration: 2000})
                refresh();
            } else {
                toast.error('Erro', {duration: 2000})
            }

        } catch (err) {
            toast.error('Erro', {duration: 2000})
        }
        setLoading(false);
    }


    return (
        <div>
            <Toaster />
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={handleSubmit(onSubmit)}
                onClickCancel={onClose}
                textHeader="Cadastro da academia"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Cadastrar"
                loading={loading}
            >
                <Input
                  label="Nome do professor"
                  //value={String(errors)}
                  errorMessage={errors?.sensei?.message || ""}
                  {...register("sensei")}
                />
                <Input
                    label="Nome da academia"
                    errorMessage={errors?.name?.message || ""}
                    {...register('name')}
                    />
                <Input
                    label="Cnpj"
                    errorMessage={errors?.cnpj?.message || ""}
                    {...register('cnpj')}
                    />
                <Input
                    label="Email"
                    errorMessage={errors?.email?.message || ""}
                    {...register('email')}
                    />
                <Input
                    label="Senha"
                    type="password"
                    errorMessage={errors?.password?.message || ""}
                    {...register('password')}
                    />
                <Input
                    label="Bairro"
                    errorMessage={errors?.neighborhood?.message || ""}
                    {...register('neighborhood')}
                />
                <Input
                    label="Telefone"
                    errorMessage={errors?.neighborhood?.message || ""}
                    {...register('phone')}
                />
                <div className="flex">
                    <Input
                        label="Rua"
                        className="mr-1"
                        errorMessage={errors?.street?.message || ""}
                        {...register('street')}
                        />
                    <Input
                        label="Numero"
                        type="number"
                        className="w-[40%]"
                        //errorMessage={errors?.number?.message ?? ""}
                        {...register('number')}
                    />
                </div>
                <Input
                    label="Cidade"
                    {...register('city')}
                />
            </Modal>
        </div>
    )
}