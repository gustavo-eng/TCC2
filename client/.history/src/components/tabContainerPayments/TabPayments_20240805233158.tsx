import { useState } from "react";
import Button from "../buttons/button";
import Input from "../input/Input";
import Modal from "../modal/Modal";
import Select from "../select/Select";

export default function TabPayments() {

    const options = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <Button label="Open Modal" onClick={openModal} />
            <Select
                id="countries"
                name="countries"
                options={options}
                label="Data"
                onChange={(e) => console.log(e.target.value)}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onClickOK={() => console.log('Ok')}
                onClickCancel={() => console.log('Cancel')}
                textHeader="Cadastro da academia"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Cadastrar"
            >
                <Input label="Nome do professor" />
                <Input label="Nome da academia" />
                <Input label="Cnpj" />
                <Input label="Email" />
                <Input label="Senha" type="password" />
                <Input label="Bairro" />
                <div className="flex">
                    <Input label="Rua" className="mr-1" />
                    <Input label="Numero" type="number" className="w-[40%]" />
                </div>


            </Modal>




            {/*
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />

            */}

        </>
    )
}