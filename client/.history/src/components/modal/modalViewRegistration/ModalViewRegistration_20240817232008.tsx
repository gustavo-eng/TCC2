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
             textHeader="Status de pagamento do atletaafkapokfopafpoapfoapodfkpfkadskofpkpo"
             hasFooter={true}
             labelBtnCancel="Cancelar"
             labelBtnOk="Salvar"
            >

            </Modal>
        </div>
    )
}

export default ModalViewRegistration;