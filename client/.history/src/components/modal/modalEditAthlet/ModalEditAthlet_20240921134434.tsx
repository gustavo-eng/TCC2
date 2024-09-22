import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../../../components/input/Input";
import { updateUser, updateUserSchema } from "../../../pages/myProfile/MyProfileTypes";
import client from "../../../service/client";
import Modal from "../Modal";

interface ModalEditAthletProps {
    isOpen: boolean;
    onClose: () => void;
    idAthlet?:string;
    onClickOk ?: () => void | any;
}


function ModalEditAthlet({
    isOpen,
    onClose,
    idAthlet
}:ModalEditAthletProps ) {

    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<updateUser>({
        resolver: zodResolver(updateUserSchema),
        mode: "onSubmit", // Valida somente no envio do formulário
        reValidateMode: "onBlur" // Valida novamente ao perder o foco do campo
    })


    const onSubmitDeleteAthlet = async (data: updateUser) => {

        setLoading(true);

        const response = await client.auth.update(data, String(idAthlet))

        if(response.status) {
            toast.success('Atleta atualizado com sucesso', {duration: 4000})
        } else {
            toast.error('Erro ao atualizar atleta', {duration: 4000})
        }

        setLoading(false);


    }


    return (
        <div>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={handleSubmit(onSubmitDeleteAthlet)}
                onClickCancel={() => console.log('Cancel')}
                textHeader="Edição do atleta"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"
                loading={loading}
                >
                <div className="text-[8px]">IdAthlet: {idAthlet || "Not informed"}</div>
               <Input
                 label="CPF"
                 isOptional
                 type="text"
                 placeholder="Informe o cpf"
                 errorMessage={errors?.cpf?.message ?? ""}
                 {...register('cpf')}

                />
               <Input
                 label="RG"
                 isOptional
                 type="text"
                 placeholder="Informe o RG"
                 errorMessage={errors.rg?.message ?? ""}
                {...register("rg")}
               />
               <Input
                 label="Nome"
                 isOptional
                 type="text"
                 placeholder="Informe o nome"
                 errorMessage={errors?.name?.message ?? ""}
                 {...register("name")}
                />
               <Input
                 label="Bairro"
                 isOptional
                 type="text"
                 placeholder="Informe o bairro"
                 errorMessage={errors?.neighborhood?.message ?? ""}
                 {...register("neighborhood")}
                />
               <Input
                 label="Rua"
                 isOptional
                 type="text"
                 placeholder="Informe a rua"
                 errorMessage={errors?.street?.message ?? ""}
                 {...register("street")}
                />
               <Input
                label="Numero"
                isOptional
                type="text"
                placeholder="Informe o numero"
                //errorMessage={errors?.number?.message ?? " " }
                {...register("number")}
               />
               <Input
                label="Cidade"
                isOptional
                type="text"
                placeholder="Informe a cidade"
                errorMessage={errors?.city?.message ?? ""}
                {...register("city")}
               />
            </Modal>
        </div>
    )
}

export default ModalEditAthlet;