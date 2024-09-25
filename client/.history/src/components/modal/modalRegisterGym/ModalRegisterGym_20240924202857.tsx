import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import client from "../../../service/client";
import Input from "../../input/Input";
import Modal from "../Modal";
import { registerGym, registerGymSchema } from "./RegisterGymTypes";


interface ModalRegisterGymProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalRegisterGym({
    isOpen,
    onClose
}: ModalRegisterGymProps) {


    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<registerGym>({
        resolver: zodResolver(registerGymSchema),
        //mode: "onSubmit", // Valida somente no envio do formulário
        reValidateMode: "onBlur" // Valida novamente ao perder o foco do campo
    })

    const formValues = watch();
    //console.log('formValues', formValues); // Monitora os valores em tempo real

    const onSubmit = async (data: registerGym) => { // Corrigido o tipo aqui
        setLoading(true);
        console.log('data in submit ', data);
        try {
            // Realizar a lógica de cadastro aqui
            const response = await client.gym.register(data);
            console.log('response', response);

        } catch (err) {
            // Lidar com erros
            console.error('Erro ao cadastrar academia. Error: ', err);
        }
        setLoading(false);
    }



    return (
        <div>
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
                    type="number"
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