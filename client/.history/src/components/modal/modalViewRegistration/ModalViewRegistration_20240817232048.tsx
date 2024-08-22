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
             onClickOK={() => console.log('ok')}
             onClickCancel={() => console.log('Cancel')}
             textHeader="Status de pagamento do atleta"
             hasFooter={false}
             labelBtnCancel="Cancelar"
             labelBtnOk="Salvar"
            >
fdafa
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;