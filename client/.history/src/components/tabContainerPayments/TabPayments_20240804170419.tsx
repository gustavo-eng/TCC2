import { useState } from "react";
import Button from "../buttons/button";
import Modal from "../modal/Modal";
import Select from "../select/Select";

export default function TabPayments() {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setModalOpen(true);
    }

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
        <>
            <Button label="Open Modal" onClick={openModal} />
            <Select
                id="countries"
                name="countries"
                options={options}

                label="Data"
                onChange={(e) => console.log(e.target.value)}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onClickOK={startConversationOK}
                onClickCancel={startConversationCancel}
                hasFooter={false}
                textHeader="Register"
            >
                <div className=" w-full h-full">
                    <div className="p-0.5">
                        <h1 className="text-gray-500 font-medium text-[18px] ">Campeonato Paranaese</h1>
                    </div>
                    <div className=" flex flex-row ">
                        <div className="mr-2">Data inicio: xx/xx/xx as hh:mm:yyyy </div>
                        {/* Obrigatorio pois eh para competicao */}
                        <div className="mr-2">Data fim: xx/xx/xx as hh:mm:yyyy</div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold">Descricao</h1>
                        <p className="text-[15px] break-words">
                            dafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfadafadfsadfadfa
                            dafadfa
                        </p>
                    </div>
                    <div className=" bg-green-400 flex flex-row w-[80%] justify-around mt-1 ">
                        <div className="bg-pink-400">q</div>
                        <div className="bg-pink-700 h-full ">
                            <Select
                                id="countries"
                                name="countries"
                                options={options}
                                label="Data"
                                className=
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className="bg-pink-400">q</div>
                    </div>
                    <div className="mt-5 ">
                        <p>Anexe o comprovante de pagamento</p>
                    </div>

                </div>

            </Modal>
        </>
    )
}