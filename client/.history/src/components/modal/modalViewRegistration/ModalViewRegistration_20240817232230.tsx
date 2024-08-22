import Modal from "../Modal";

interface ModalViewRegistrationProps {
    isOpen: boolean;
    onClose: () => void;
}

//Nome da competicao
// Genero - Classe - Categoria
// Comprovante - <badge>
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

            <div className="">

            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;