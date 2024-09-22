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

    let {registration} = useAppSelector(registrationSelector);
    const [voucherPath, setVoucherPath] = useState<any>();

    useEffect(() => {
        setVoucherPath(getObjectByIdPayment(registration, Number(idRegistration)));
    }, [idRegistration]);

    return (
        <div>

            <Modal
             isOpen={isOpen}
             onClose={onClose}
             textHeader="Status de pagamento do atleta"
            >
                {JSON.stringify(voucherPath)}
            <p className="text-[8px]">Id Registration: {idRegistration || "Not informed"}</p>
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
                <img
                    src={`http://localhost:3001/${voucherPath?.Athlet?.idAthlete}/${String(voucherPath?.voucherPath).split('\\').pop()}` || "src/assets/olimpicGame.webp"}
                    alt="img"
                    className="h-full w-full rounded"
                />
                </div>
                {!description && (
                    <div className="mt-2 mb-2">
                        <p>Descrição</p>
                        <p className="text-sm">
                            {JSON.stringify(voucherPath.description)}
                        </p>
                    </div>
                )}
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;
