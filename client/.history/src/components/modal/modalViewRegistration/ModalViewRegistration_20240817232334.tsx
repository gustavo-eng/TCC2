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
             hasFooter={true}
             childrenFooter={<>fdsafasfasdokp</>}
            >

            <div className="flex flex-col w-full bg-green-400">
                fijdso
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;