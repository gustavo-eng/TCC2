import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
        formState: { errors },
    } = useForm<registerGym>({
        resolver: zodResolver(registerGymSchema),
        mode: "onSubmit", // Valida somente no envio do formulário
        reValidateMode: "onBlur" // Valida novamente ao perder o foco do campo
    })

    const onSubmit = async (data: registerGym) => { // Corrigido o tipo aqui
        setLoading(true);
        console.log('data in submit ', data);
        try {
            // Realizar a lógica de cadastro aqui
        } catch (err) {
            // Lidar com erros
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
                <Input label="Bairro" />
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
                        errorMessage={errors?.number?.message || " ds"}
                        {...register('number')}
                    />
                </div>
                <Input label="Cidade" />
            </Modal>
        </div>
    )
}