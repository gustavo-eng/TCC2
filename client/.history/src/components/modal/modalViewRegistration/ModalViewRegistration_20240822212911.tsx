import Modal from "../Modal";

interface ModalViewRegistrationProps {
    isOpen: boolean;
    onClose: () => void;
    description?: string;
    statusPayment?: 'Pendente' | 'Rejeitado' | 'Aprovado';
}

function ModalViewRegistration({
    isOpen,
    onClose,
    description,
    statusPayment,

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
                    <p className="font-medium">Comprovante </p>

                </div>
                <div className="bg-gray-300 h-[23vh] rounded">
                    fdoaffdlass
                </div>
                {!description && (
                    <div className="mt-2 mb-2">
                        <p>Descrição</p>
                        <p className="text-sm">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem libero nullam mattis massa aliquam hendrerit velit conubia. Tempor ad rutrum ut rutrum egestas. Efficitur primis senectus massa non ex iaculis. Lorem aenean porta inceptos primis non lobortis lobortis litora. Id convallis vehicula commodo dolor hac. Et viverra posuere condimentum est venenatis sed malesuada condimentum vivamus. Eros libero posuere vel velit sociosqu accumsan. Magna hendrerit praesent augue, iaculis aliquet inceptos dignissim praesent. Iaculis tempor malesuada, facilisis inceptos aliquet euismod efficitur congue.
                        </p>
                    </div>
                )}
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;