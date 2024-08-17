import { useState } from "react";
import Button from "../buttons/button";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";

export default function TabTestModal() {

    //Event
    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    //

    return (
        <div className="flex flex-row">
            <div className="m-2">
                <Button label="Modal Registration Event"  onClick={openModalEvent} />
                <ModalRegistrationEvent isOpen={isModalEventOpen} onClose={closeModalEvent}/>
            </div>
            <div>
                <Button label="Modal Registration Event"  onClick={openModalEvent} />

            </div>
        </div>
    )
}