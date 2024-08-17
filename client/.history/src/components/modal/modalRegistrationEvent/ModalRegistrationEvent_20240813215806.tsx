import { useState } from "react";
import DatePickerSingle from "../../datePickerSingle/DatePickerSingle";
import Select from "../../select/Select";
import Modal from "../Modal";

export default function ModalRegistrationEvent() {
    const [isModalOpen, setModalOpen] = useState(false);

    //const openModal = () => setModalOpen(true);
    //const closeModal = () => setModalOpen(false);
    const options = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];
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
                    <div className="bg-gray-200 flex flex-rol justify-between">
                        <div className="bg-gray-300 flex ">
                            <DatePickerSingle
                                date={undefined} setDate={undefined} />
                            <Select
                                id="gender"
                                name="gender"
                                options={options}
                                //label="Sexo"
                                isOptional={false}
                                className="mt-0 "
                                onChange={(e) => console.log(e.target.value)}
                            />
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


