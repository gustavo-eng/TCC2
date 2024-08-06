import FileInput from "../../FileInput/FileInput";
import Select from "../../select/Select";
import Modal from "../Modal";


interface ModalRegistrationProps {
    isOpen: boolean;
    nameCompetition?: string;
    startDate?: string;
    endDate?: string;
    onClose: () => void;
    description?: string;
}

export default function ModalRegistration({
    isOpen = false,
    nameCompetition,
    startDate,
    endDate,
    onClose,
}: ModalRegistrationProps) {
    if (!isOpen) return null;

    const startConversationOK = () => alert("CONVERSATION");

    const options = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];
    /*
        Adicionar a logica de registration aqui pois é um card specifico para tal

        */
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={startConversationOK}
                onClickCancel={onClose}
                textHeader="Register"
                hasFooter
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"
            >
                <div className=" w-full h-full p-1">
                    <div className="p-0.5">
                        <h1 className="text-gray-500 font-medium text-[18px] ">{nameCompetition || "Name event"}</h1>
                    </div>
                    <div className=" flex flex-row ">
                        {/* Obrigatorio pois eh para competicao */}
                        {!startDate && <div className="mr-2">Data inicio: {startDate} as hh:mm:yyyy </div>}
                        {!endDate && <div className="">Data fim: xx/xx/xx as hh:mm:yyyy</div>}
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-gray-700">Descricao</h1>
                        <p className="text-[15px] break-words">
                            dafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfa
                            dafadfa
                        </p>
                    </div>
                    <div className=" flex flex-col ">
                        <div className="">
                            <Select
                                id="countries"
                                name="countries"
                                options={options}
                                label="Sexo"
                                isOptional={false}
                                className="mt-2 "
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <Select
                                id="countries"
                                name="countries"
                                options={options}
                                isOptional={false}
                                label="Selecione a classe"
                                className="mt-2"
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <Select
                                id="countries"
                                name="countries"
                                isOptional={false}
                                options={options}
                                label="Categoria (Kg)"
                                className="mt-2"
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <div className="">
                            <FileInput label="Anexe o comprovante" />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

