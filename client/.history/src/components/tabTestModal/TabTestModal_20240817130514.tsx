import { useState } from "react";
import Button from "../buttons/button";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";

export default function TabTestModal() {

    //Event
    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const [isModalGymOpen, setModalGymOpen] = useState(false);

    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    const openModalRegisterGym = () => setModalGymOpen(true)
    const closeModalRegisterGym = () => setModalGymOpen(true)

    //

    return (
        <div className="flex flex-row">
            <div className="m-2">
                <Button label="Modal Registration Event"  onClick={openModalEvent} />
                <ModalRegistrationEvent isOpen={isModalEventOpen} onClose={closeModalEvent}/>
            </div>
            <div className="m-2">
                <Button label="Modal RGym"  onClick={openModalRegisterGym} />
                <ModalRegisterGym  isOpen={isModalGymOpen} onClose={closeModalRegisterGym} />
                {/* <ModalRegisterGym  isOpen={isModalGymOpen} onClose={closeModalRegisterGym} /> */}
            </div>
        </div>
    )
}