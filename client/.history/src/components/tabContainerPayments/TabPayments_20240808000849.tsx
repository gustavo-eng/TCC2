import { useState } from "react";

export default function TabPayments() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="bg-red-100 w-full">
            {/*
                <Button label="Open Modal" onClick={openModal} />
                <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />

            */}
            SDa
            {/*
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            */}

        </div>
    )
}