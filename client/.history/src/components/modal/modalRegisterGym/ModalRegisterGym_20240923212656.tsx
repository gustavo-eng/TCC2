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
        resolver: zodResolver(registerGymSchema)
    })

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={() => console.log('Ok')}
                onClickCancel={() => console.log('Cancel')}
                textHeader="Cadastro da academia"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Cadastrar"
            >
                <Input label="Nome do professor" />
                <Input label="Nome da academia" />
                <Input label="Cnpj" />
                <Input label="Email" />
                <Input label="Senha" type="password" />
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