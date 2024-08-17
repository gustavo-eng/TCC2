import { useState } from "react";
import Modal from "../Modal";

export default function ModalRegistrationEvent() {
    const [isModalOpen, setModalOpen] = useState(false);

    //const openModal = () => setModalOpen(true);
    //const closeModal = () => setModalOpen(false);

    return (
        <div>
            <Modal
            isOpen
            //onClose={}
            onClickOK={() => console.log('Ok')}
            onClickCancel={() => console.log('Cancel')}
            textHeader="Cadastro do evento"
            labelBtnCancel="Cancelar"
            labelBtnOk="Cadastrar"
            >
                <div>
fas
                </div>
            </Modal>
        </div>
    )
}

/*
    {/*
        <Button label="Open Modal" onClick={openModal} />
        <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />
        <ModalRegistration
            isOpen={isModalOpen}
            onClose={closeModal}
        />
*/


