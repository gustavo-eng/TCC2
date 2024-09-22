import { useEffect, useState } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import { registrationSelector } from "../../../store/registrations/registrationsReducer";
import { getObjectByIdPayment } from "../../../utils/getObjectByIdPayment";
import StatusBadge from "../../StatusBadge/StatusBadge";
import Modal from "../Modal";

interface ModalViewRegistrationProps {
    isOpen: boolean;
    onClose: () => void;
    description?: string;
    statusPayment?: 'Pendente' | 'Rejeitado' | 'Aprovado' | any;
    idRegistration ?: string;
}

function ModalViewRegistration({
    isOpen,
    onClose,
    description,
    statusPayment,
    idRegistration,
}: ModalViewRegistrationProps){

    let {registration} = useAppSelector(registrationSelector)
    const [voucherPath, setVoucherPath] = useState<string>();
    useEffect(() => {
        setVoucherPath(getObjectByIdPayment(registration, Number(idRegistration)));
    }, [])

    return (
        <div>

            <Modal
             isOpen={isOpen}
             onClose={onClose}
             textHeader="Status de pagamento do atleta"
            >
            <p className="text-[8px]">Id Registration: {idRegistration || "Not informed"}</p>
            {JSON.stringify( {voucherPath})}
            <div className="flex flex-col w-full p-1">
                <p className="font-semibold text-green-700 mb-4">Campeonato Brasileiro</p>
                <div className="flex flex-row font-semibold text-gray-800 mb-3">
                    <p className="  mr-4">Genero: Masculino</p>
                    <p className=" mr-4">Classe: Senior</p>
                    <p className="">Categoria: -60 </p>
                </div>
                <div className="flex flex-row mb-2">
                    <p className="font-medium">Comprovante </p>
                    {statusPayment && <StatusBadge status={statusPayment?.toString().trim()} />}
                </div>
                <div className="bg-gray-300 h-[23vh] rounded flex flex-col justify-center items-center">
                    {/* IMAGE HERE */}
                    IMAGE HERE
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