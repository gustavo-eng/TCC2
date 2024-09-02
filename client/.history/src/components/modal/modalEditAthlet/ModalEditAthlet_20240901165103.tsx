import Input from "../../input/Input";
import Modal from "../Modal";

interface ModalEditAthletProps {
    isOpen: boolean;
    onClose: () => void;
    idAthlet?:string;
}


function ModalEditAthlet({
    isOpen,
    onClose,
    idAthlet
}:ModalEditAthletProps ) {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={() => console.log('ok')}
                onClickCancel={() => console.log('Cancel')}
                textHeader="Edição do atleta"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"

                >
                <div>IdAthlet: {idAthlet || "Not informed"}</div>
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