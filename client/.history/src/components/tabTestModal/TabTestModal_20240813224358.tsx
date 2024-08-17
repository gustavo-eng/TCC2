import { useState } from "react";
import Button from "../buttons/button";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";

export default function TabTestModal() {

    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    return (
        <div className="flex flex-row">
            <div>
                <Button label="Modal Registration Event"  onClick={openModalEvent} />
                <ModalRegistrationEvent isOpen={isModalEventOpen} onClose={closeModalEvent}/>
            </div>
        </div>
    )
}