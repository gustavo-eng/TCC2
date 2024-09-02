import { useRef, useState } from "react";
import Button from "../buttons/button";
import ModalConfirmation, { ModalConfirmationHandle } from "../modal/modalConfirmation/ModalConfirmation";
import ModalEditAthlet from "../modal/modalEditAthlet/ModalEditAthlet";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";
import ModalValidateRegistration from "../modal/modalValidateRegistration/ModalValidateRegistration";
import ModalViewRegistration from "../modal/modalViewRegistration/ModalViewRegistration";

export default function TabTestModal() {


    //Event
    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const [isModalGymOpen, setModalGymOpen] = useState(false);
    const [isModalRegistration, setModalRegistration] = useState(false);
    const [isModalValidateRegistration, setModalValidateRegistrtion ] = useState(false);
    const [isModalEditAthlet, setModalEditAthlet] = useState(false);
    const [isModalViewRegistration, setModalViewRegistration] = useState(false);

    //Event
    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    // Register Gym
    const openModalRegisterGym = () => setModalGymOpen(true);
    const closeModalRegisterGym = () => setModalGymOpen(false);

    //Registration
    const openModalRegistration = () => setModalRegistration(true);
    const closeModalRegistration = () => setModalRegistration(false);

    //Validate Registration
    const openModalValidateRegistration = () => setModalValidateRegistrtion(true);
    const closeModalValidateRegistration = () => setModalValidateRegistrtion(false);

    //Edit Student
    const openModalStudent = () => setModalEditAthlet(true);
    const closeModalStudent = () => setModalEditAthlet(false);

    //Open Modal ViewSolicitations
    const closeModalViewRegistraion = () => setModalViewRegistration(false)
    const openModalViewRegistraion = () => setModalViewRegistration(true)

    //Modal Confirmation
    const modalRef = useRef<ModalConfirmationHandle>(null)


  const handleConfirm = () => {
    // Lógica de confirmação
    console.log('Confirmed!');
  };

  const handleCancel = () => {
    console.log('Cancelled!');
  };

    return (
        <div className="flex flex-row">
            <div className="m-2">
                <Button label="Modal Registration Event"  onClick={openModalEvent}/>
                <ModalRegistrationEvent isOpen={isModalEventOpen} onClose={closeModalEvent}/>
            </div>
            <div className="m-2">
                <Button label="RGym"  onClick={openModalRegisterGym}/>
                <ModalRegisterGym  isOpen={isModalGymOpen} onClose={closeModalRegisterGym}/>
            </div>
            <div className="m-2">
                <Button label=" Modal Registration Payment "  onClick={openModalRegistration}/>
                <ModalRegistration isOpen={isModalRegistration} onClose={closeModalRegistration}/>
            </div>
            <div className="m-2">
                <Button label=" Modal Validate registration" onClick={openModalValidateRegistration}/>
                <ModalValidateRegistration isOpen={isModalValidateRegistration} onClose={closeModalValidateRegistration}/>
            </div>
            <div className="m-2">
                <Button label=" Edit Athlet" onClick={openModalStudent}/>
                <ModalEditAthlet isOpen={isModalEditAthlet} onClose={closeModalStudent}/>
            </div>
            <div className="m-2">
                <Button label="View Registration " onClick={openModalViewRegistraion}/>
               <ModalViewRegistration isOpen={isModalViewRegistration} onClose={closeModalViewRegistraion} />
            </div>
            <div>
            <button
                onClick={() => modalRef.current?.openModal()}
                className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
                Open Modal
            </button>
            <ModalConfirmation
                ref={modalRef}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />

            </div>
        </div>
    );

}