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

            <div className="flex flex-col w-full p-1">
                <p className="font-semibold text-green-800 mb-4">Campeonato Brasileiro</p>
                <div className="flex flex-row font-semibold text-gray-800 mb-3">
                    <p className="  mr-4">Genero: Masculino</p>
                    <p className=" mr-4">Classe: Senior</p>
                    <p className="">Categoria: -60 </p>
                </div>
                <div className="flex flex-row">
                    <p className="font-medium">Comprovante: </p>

                </div>
                <div className="bg-gray-600 h-[23vh] rounded">
                    fdoaf
                </div>
                <div className="mt-2">
                    <p>Descrição</p>
                    <p className="text-sm">fsdfasdfdfsoakfapodkfpaoksfpoafdk</p>
                </div>
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;