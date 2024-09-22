import { useEffect, useState } from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import { registrationSelector } from "../../../store/registrations/registrationsReducer";
import { describeStatusPayment } from "../../../utils/describeStatusPayment";
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
    const [status, setStatus] = useState<string>("")

    useEffect(() => {
        setVoucherPath(getObjectByIdPayment(registration, Number(idRegistration)));
        console.log('setVoucherPath', voucherPath)
        if(voucherPath) {
            setStatus(describeStatusPayment(voucherPath?.aproved , voucherPath?.description))
            //setStatus("Rejeitado")
        }
        console.log('status', status)
    }, [idRegistration]);

    useEffect(()=> {}, [statusPayment])



    return (
        <div>

            <Modal
             isOpen={isOpen}
             onClose={onClose}
             textHeader="Status de pagamento do atleta"
            >
            <p className="text-[8px]">Id Registration: {idRegistration || "Not informed"}</p>
            <div className="flex flex-col w-full p-1">
                <p className="font-semibold text-green-700 mb-4">{voucherPath?.Event?.description || 'Nome do evento'}</p>
                <div className="flex flex-row font-semibold text-gray-800 mb-3">
                    <p className="  mr-4">Genero: {voucherPath?.Category?.gender || 'Not informed'}</p>
                    <p className=" mr-4">Classe: {voucherPath?.Category?.classCategory || 'Not informed'}</p>
                    <p className="">Categoria: {voucherPath?.Category?.weight || 'XX (Kg)'} </p>
                </div>
                <div className="flex flex-row mb-2">
                    <p className="font-medium">Comprovante </p> {status && <StatusBadge status={status} className="ml-1"/>}
                    {statusPayment && <StatusBadge status={statusPayment?.toString().trim()} />}
                </div>
                <div className="bg-gray-300 h-[23vh] rounded flex flex-col justify-center items-center">
                <img
                    src={`http://localhost:3001/${voucherPath?.Athlet?.idAthlete}/${String(voucherPath?.voucherPath).split('\\').pop()}` || "src/assets/olimpicGame.webp"}
                    alt="img"
                    className="h-full w-full rounded"
                />
                </div>
                {status && status == "Rejeitado" && (
                    <div className="mt-2 mb-2">
                        <p>Descrição</p>
                        <p className="text-sm">
                            {JSON.stringify(voucherPath?.description)}
                        </p>
                    </div>
                )}
            </div>
            </Modal>
        </div>
    )
}

export default ModalViewRegistration;
