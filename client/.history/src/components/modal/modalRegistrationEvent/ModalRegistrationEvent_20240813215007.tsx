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
                    <div className="bg-gray-200 flex flex-rol justify-evenly">
                        <div className="bg-gray-600">
                            <p className="mb-1">Data e Horário de inicio  </p>
                            <DatePickerSingle date={undefined} setDate={undefined} />
                        </div>
                        <div>

                            <DatePickerSingle date={undefined} setDate={undefined} />
                        </div>

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

