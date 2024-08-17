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
                isOpen={isOpen} onClose={onClose}>

            </Modal>
        </div>
    )
}

export default ModalValidateRegistration;