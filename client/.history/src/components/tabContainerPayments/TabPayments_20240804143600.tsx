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

    return (
        <>
            <Button label="Open Modal" onClick={openModal} />
            <Select />
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onClickOK={startConversationOK}
                onClickCancel={startConversationCancel}
                hasFooter={false}
            >
                <div className="bg-purple-300 w-full h-full">
                    <div className="bg-gray-300">
                        Description

                    </div>
                    <div className="bg-gray-300">ff</div>
                    <div className="bg-gray-300">ff</div>
                    <div className="bg-gray-300">ff</div>
                </div>

            </Modal>
        </>
    )
}