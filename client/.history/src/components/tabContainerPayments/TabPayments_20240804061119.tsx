import { useState } from "react";
import Button from "../buttons/button";
import Modal from "../modal/Modal";
export default function TabPayments() {

    console.log(Button)
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    const another = () => {
        setModalOpen(false);
    }

    const startConversationOK = () => alert("CONVERSATION")
    const startConversationCancel = () => alert("CONVERSATION")

    return (
        <>
            <Button label="Open Modal" onClick={openModal} />
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onClickOK={startConversationOK}
                onClickCancel={startConversationCancel}
                hasFooter={true}

            >
                <div className="bg-red-500 mb-1">fafdsa</div>
                <div className="bg-red-500 mb-1">fafdsa</div>
                <div className="bg-red-500 mb-1">fafdsa</div>
                <div className="bg-red-500 mb-1">fafdsa</div>
                <div className="bg-red-500 mb-1">fafdsa</div>

            </Modal>
        </>
    )
}