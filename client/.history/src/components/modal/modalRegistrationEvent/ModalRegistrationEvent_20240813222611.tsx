import { useState } from "react";
import DatePickerSingle from "../../datePickerSingle/DatePickerSingle";
import Input from "../../input/Input";
import Select from "../../select/Select";
import Modal from "../Modal";

export default function ModalRegistrationEvent() {
    const [isModalOpen, setModalOpen] = useState(false);

    //const openModal = () => setModalOpen(true);
    //const closeModal = () => setModalOpen(false);
    const options = [
        { value: '7:00', label: '7:00' },
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
            labelBtnOk="Salvar"
            >
                <div>
                    {/* Hour and time */}
                    <div className=" flex flex-rol justify-between mt-2">
                        <div className=" flex ">
                            <DatePickerSingle
                                date={undefined}
                                setDate={undefined}
                                label="Data de inicio"
                                isOptional={true}
                                className="mr-2"
                            />
                            <Select
                                id="gender"
                                name="gender"
                                options={options}
                                label="Horário"
                                isOptional={true}
                                className="mt-0 "
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className=" flex ">
                            <DatePickerSingle
                                date={undefined}
                                setDate={undefined}
                                label="Data de inicio"
                                isOptional={true}
                                className="mr-2"
                            />
                            <Select
                                id="gender"
                                name="gender"
                                options={options}
                                label="Horário"
                                isOptional={true}
                                className="mt-0 "
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>

                    </div>
                    {/* Inputs  forms */}
                    <div>
                        <Input label="Nome" inputClassName="rounded"  />
                        <Input label="Preco (R$)" inputClassName="rounded" type="number" />
                        <Input label="Bairro" inputClassName="rounded" isOptional  />
                        <Input label="Nome do professor" inputClassName="rounded" isOptional  />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

/*
Rua
numero
cidade
tipo (Select)
*/
/*
    {/*
        <Button label="Open Modal" onClick={openModal} />
        <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />
        <ModalRegistration
            isOpen={isModalOpen}
            onClose={closeModal}
        />
*/


