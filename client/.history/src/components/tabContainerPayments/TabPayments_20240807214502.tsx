import { useState } from "react";
import Button from "../buttons/button";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";

export default function TabPayments() {

    const options = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <Button label="Open Modal" onClick={openModal} />


            <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />

            {/*
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />

            */}

        </>
    )
}