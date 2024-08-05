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
            >
                <div className=" w-full h-full">
                    <div className="p-0.5">
                        <h1 className="text-black text-[20px] ">Campeonato Paranaese</h1>
                    </div>
                    <div className="bg-gray-500 flex flex-row">
                        <div>Data inicio: xx/xx/xx </div>
                        <div>fasdf</div>
                        <div>fasdf</div>
                    </div>
                    <div className="bg-gray-300">ff</div>
                    <div className="bg-gray-300">ff</div>
                    <div className="bg-gray-300">ff</div>
                </div>

            </Modal>
        </>
    )
}