import { useState } from "react";
import Button from "../buttons/button";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";

export default function TabTestModal() {

    //Event
    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const [isModalGymOpen, setModalGymOpen] = useState(false);
    const [isModalRegistration, setModalRegistration] = useState(false);

    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    const openModalRegisterGym = () => setModalGymOpen(true);
    const closeModalRegisterGym = () => setModalGymOpen(false);

    const openModalRegistration = () => setModalRegistration(true);
    const closeModalRegistration = () => setModalRegistration(false);


    //
    return (
        <div className="flex flex-row">

            <div className="m-2">
                <Button label="Modal Registration Event"  onClick={openModalEvent} />
                <ModalRegistrationEvent isOpen={isModalEventOpen} onClose={closeModalEvent}/>
            </div>
            <div className="m-2">
                <Button label="RGym"  onClick={openModalRegisterGym} />
                <ModalRegisterGym  isOpen={isModalGymOpen} onClose={closeModalRegisterGym} />
                {/* <ModalRegisterGym  isOpen={isModalGymOpen} onClose={closeModalRegisterGym} /> */}
            </div>
            <div className="m-2">
                <Button label=" Modal Registration Payment "  onClick={openModalRegistration} />
                <ModalRegistration isOpen={isModalRegistration} onClose={closeModalRegistration}/>
            </div>
            <div className="m-2">
                <Button label=" Modal registration"/>

            </div>

        </div>
    )
}