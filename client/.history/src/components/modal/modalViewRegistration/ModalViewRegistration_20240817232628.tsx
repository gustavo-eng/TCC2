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
                <p className="font-semibold text-green-800 mb-4">Campeonato Brasileiro</p>
                <div className="flex flex-row font-bold">
                    <p className="  mr-4">Genero: Masculino</p>
                    <p className=" mr-4">Classe: Senior</p>
                    <p className="">Categoria: -60 </p>
                </div>
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;