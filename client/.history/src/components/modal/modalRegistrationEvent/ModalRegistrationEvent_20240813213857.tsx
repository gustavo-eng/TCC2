import { useState } from "react";
import DatePickerSingle from "../../datePickerSingle/DatePickerSingle";
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
            hasFooter
            labelBtnCancel="Cancelar"
            labelBtnOk="Cadastrar"
            >
                <div>
                    <p>Data e Horário</p>
                    <div className="bg-gray-400">

                    <DatePickerSingle date={undefined} setDate={undefined} />
                    </div>
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


