import { useState } from "react";
import DatePickerSingle from "../../datePickerSingle/DatePickerSingle";
import Input from "../../input/Input";
import Select from "../../select/Select";
import Modal from "../Modal";


interface eventModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalRegistrationEvent({
    isOpen = false,
    onClose,
}: eventModalProps) {

    const [isModalOpen, setModalOpen] = useState(false);
    const [dataStart, setDataStart] = useState<any>();
    const [dataEnd, setDataEnd] = useState<any>();


    const options = [
        { value: '7:00', label: '7:00' },
        { value: '8:00', label: '8:00' },
        { value: '9:00', label: '9:00' },
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        { value: '12:00', label: '12:00' },
        { value: '13:00', label: '13:00' },
        { value: '14:00', label: '14:00' },
        { value: '15:00', label: '15:00' },
        { value: '16:00', label: '16:00' },
        { value: '17:00', label: '17:00' },
        { value: '18:00', label: '18:00' },
        { value: '19:00', label: '19:00' },
        { value: '20:00', label: '20:00' },
        { value: '21:00', label: '21:00' },
        { value: '22:00', label: '22:00' },

      ];

    return (
        <div>
            <Modal
            isOpen={isOpen}
            onClose={onClose}
            onClickOK={() => console.log('Ok')}
            onClickCancel={() => console.log('Cancel')}
            textHeader="Cadastro do evento"
            hasFooter
            labelBtnCancel="Cancelar"
            labelBtnOk="Salvar"
            > {JSON.stringify(dataStart)}
                <div>
                    {/* Hour and time */}
                    <div className=" flex flex-rol justify-between mt-2">
                        <div className=" flex ">
                            <DatePickerSingle
                                date={dataStart}
                                setDate={setDataStart}
                                label="Data de inicio"
                                isOptional={false}
                                className="mr-2"
                            />d
                            <Select
                                id="gender"
                                name="gender"
                                options={options}
                                label="Horário"
                                classNameOptions="text-xs bg-red-400"
                                isOptional={true}
                                className="mt-0 "
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className=" flex ">
                            <DatePickerSingle
                                date={dataEnd}
                                setDate={setDataEnd}
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
                        <Input label="Rua" inputClassName="rounded" isOptional  />
                        <Input label="Numero" inputClassName="rounded" isOptional  type="number" />
                        <Input label="Cidade" inputClassName="rounded" isOptional  />
                        <Select
                            id="gender"
                            name="gender"
                            options={options}
                            label="Tipo"
                            isOptional={true}
                            className="mt-0"
                            classNameSelect="bg-white"
                            onChange={(e) => console.log(e.target.value)}
                        />
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


