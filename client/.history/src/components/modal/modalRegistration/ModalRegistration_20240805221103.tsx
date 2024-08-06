import { useState } from "react";
import FileInput from "../../FileInput/FileInput";
import Select from "../../select/Select";
import Modal from "../Modal";


interface ModalRegistrationProps {
    isOpen: boolean;
    description?: string;
}



export default function ModalRegistration({
    isOpen = false,
}) {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);


    const closeModal = () => {
        setModalOpen(false);
    }

    const startConversationOK = () => alert("CONVERSATION");
    const startConversationCancel = () => alert("CONVERSATION");

    const options = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                onClickOK={startConversationOK}
                onClickCancel={startConversationCancel}
                textHeader="Register"
                hasFooter
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"
            >
                <div className=" w-full h-full p-1">
                    <div className="p-0.5">
                        <h1 className="text-gray-500 font-medium text-[18px] ">Campeonato Paranaese</h1>
                    </div>
                    <div className=" flex flex-row ">
                        <div className="mr-2">Data inicio: xx/xx/xx as hh:mm:yyyy </div>
                        {/* Obrigatorio pois eh para competicao */}
                        <div className="mr-2">Data fim: xx/xx/xx as hh:mm:yyyy</div>
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
        </div>
    )
}

