import Modal from "../Modal";

interface ModalViewRegistrationProps {
    isOpen: boolean;
    onClose: () => void;
}

function ModalViewRegistration({
    isOpen,
    onClose,
}: ModalViewRegistrationProps){
    return (
        <div>
            <Modal
             isOpen={isOpen}
             onClose={onClose}
             textHeader="Status de pagamento do atleta"
             hasFooter={false}
            >

            </Modal>
        </div>
    )
}

export default ModalViewRegistration;