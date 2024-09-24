import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../input/Input";
import Modal from "../Modal";
import { registerGym } from "./RegisterGymTypes";


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
        //resolver: zodResolver(registerGymSchema)
    })

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            console.log('data in submit ', data);
        }catch(err) {

        }
        setLoading(false);
    }


    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={handleSubmit(onSubmit)}
                onClickCancel={() => console.log('Cancel')}
                textHeader="Cadastro da academia"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Cadastrar"
                loading={loading}
            >
                <Input
                  label="Nome do professor"
                  {...register("sensei")}
                  errorMessage={errors?.sensei?.message || ""}
                />
                <Input
                    label="Nome da academia"
                    {...register('name')}
                    errorMessage={errors?.name?.message || ""}
                    />
                <Input
                    label="Cnpj"
                    {...register('cnpj')}
                    errorMessage={errors?.cnpj?.message || ""}
                    />
                <Input
                    label="Email"
                    {...register('email')}
                    errorMessage={errors?.email?.message || ""}
                    />
                <Input
                    label="Senha"
                    type="password"
                    {...register('password')}
                    errorMessage={errors?.password?.message || ""}
                />
                <Input label="Bairro" />
                <div className="flex">
                    <Input label="Rua" className="mr-1" />
                    <Input label="Numero" type="number" className="w-[40%]" />
                </div>
                <Input label="Cidade" />
            </Modal>
        </div>
    )
}