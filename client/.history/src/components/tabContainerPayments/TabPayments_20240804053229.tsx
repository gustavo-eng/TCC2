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

    return (

        <>
            <Button label="Open Modal" onClick={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>fff</Modal>
        </>
    )
}