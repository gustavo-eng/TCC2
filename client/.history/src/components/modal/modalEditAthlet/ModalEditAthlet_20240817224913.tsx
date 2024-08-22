import Input from "../../input/Input";
import Modal from "../Modal";

interface ModalEditAthletProps {
    isOpen: boolean;
    onClose: () => void;
}


function ModalEditAthlet({
    isOpen,
    onClose,
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
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />
               <Input label="Cpf" className="mb-1" />


            </Modal>

        </div>
    )
}

export default ModalEditAthlet;