import Modal from "../Modal";
import { ModalProps } from "../types";


function ModalValidateRegistration({
    isOpen,
    onClose,
}:ModalProps) {

    return (
        <div>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              onClickOK={() => console.log('Modal')}
              onClickCancel={() => console.log('Cancel')}
              textHeader=" Validar explicando "
              hasFooter
              labelBtnCancel="Cancelar"
              labelBtnOk="Salvar"
            >
             <div>
                <div className="bg-gray-400 w-full flex ">
                    <span>Nome do aluno: Gustavo</span>
                    <span>Nome do aluno: Gustavo</span>
                </div>

             </div>
            </Modal>
        </div>
    )

}

export default ModalValidateRegistration;