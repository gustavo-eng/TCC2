import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from "../../../components/input/Input";
import useAppSelector from "../../../hooks/useAppSelector";
import { updateUserSchema } from "../../../pages/myProfile/MyProfileTypes";
import { authSelector } from "../../../store/auth/authReducer";
import { AppDispatch } from "../../../store/store";
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


    const { user } = useAppSelector(authSelector);
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();


    console.log('User gym ', user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(updateUserSchema)
    })

    //console.log(register, handleSubmit)

    const onSubmitDeleteAthlet = () => {
        console.log('id to delete' , idAthlet)
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

                >
                <div className="text-[8px]">IdAthlet: {idAthlet || "Not informed"}</div>
               <Input
                 label="CPF"
                 isOptional
                 type="text"
                 placeholder="Informe o cpf"

                />
               <Input
                 label="RG"
                 isOptional
                 type="text"
                 placeholder="Informe o RG"
                 errorMessage={ ""}
                {...register("cpf")}
               />
               <Input label="Nome"  />
               <Input label="Bairro"  />
               <Input label="Rua"  />
               <Input label="Numero"  />
               <Input label="Cidade"  />
               <Input label="Bairro" />
            </Modal>

        </div>
    )
}

export default ModalEditAthlet;