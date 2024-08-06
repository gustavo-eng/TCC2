import { useState } from "react";
import Button from "../buttons/button";
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
                textHeader="Register"
                hasFooter
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"
            >
                fasfs
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