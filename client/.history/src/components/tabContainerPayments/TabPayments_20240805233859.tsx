import { useState } from "react";
import Button from "../buttons/button";
import Select from "../select/Select";

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
            <Select
                id="countries"
                name="countries"
                options={options}
                label="Data"
                onChange={(e) => console.log(e.target.value)}
            />

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