import { useState } from "react";

export default function ModalRegistrationEvent() {
    const [isModalOpen, setModalOpen] = useState(false);

    //const openModal = () => setModalOpen(true);
    //const closeModal = () => setModalOpen(false);

    return (
     {/*
            <Button label="Open Modal" onClick={openModal} />
            <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            */}

     <div>
            Modal registration Event
        </div>
    )
}
