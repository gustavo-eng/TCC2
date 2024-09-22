import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useAppSelector from "../../../hooks/useAppSelector";
import { authSelector } from "../../../store/auth/authReducer";
import { AppDispatch } from "../../../store/store";
import Input from "../../input/Input";
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

    const {register, handleSubmit} = useForm<any>()
    console.log(register, handleSubmit)

    const onSubmitDeleteAthlet = (id?: string ) => {
        console.log('id to delete')
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
               <Input label="CPF" />
               <Input label="RG"  />
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