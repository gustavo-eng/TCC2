import { useState } from "react";
import Button from "../buttons/button";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";

export default function TabPayments() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="bg-red-100 w-full">
            <Button label="Open Modal" onClick={openModal} />
            <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />

            {/*
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            */}

        </div>
    )
}