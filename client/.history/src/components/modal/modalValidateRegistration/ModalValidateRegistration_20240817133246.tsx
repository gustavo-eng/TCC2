import Modal from "../Modal";
import { ModalProps } from "../types";


function ModalValidateRegistration({
    isOpen,
    onClose,
}:ModalProps) {

    console.log(isOpen, onClose)
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
                    Modal validate registration
                </div>

            </Modal>
        </div>
    )
}

export default ModalValidateRegistration;