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
             textHeader="Edição do atleta"
             hasFooter={true}
             labelBtnCancel="Cancelar"
             labelBtnOk="Salvar"
            >
              modal Edit studentadfafs
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;