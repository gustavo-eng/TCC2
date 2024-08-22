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
            >

            <div className="flex flex-col w-full bg-green-50">
                <p className="font-semibold text-green-800 mb-6">Campeonato Brasileiro</p>
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;