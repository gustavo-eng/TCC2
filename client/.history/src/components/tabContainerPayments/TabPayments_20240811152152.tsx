import { useState } from "react";
import CardPayments from "../card/CardPayment";
import CompetitionCard from "../card/CompetitionCard";

export default function TabPayments() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="bg-red-100 w-full flex flex-row">
            {/*
            <Button label="Open Modal" onClick={openModal} />
            <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            */}
            <CardPayments />
            <CompetitionCard
                name="NOME DA COMPETIÇÃO"
                price="150"
                startDate="11/08/2024"
                startTime="14:35 PM"
                endDate="25/10/2024"
                endTime="23:35 PM"
                city="Curitibba"
                neighborhood="Centro"
                street="Rua"
                number="Número"
                status="Pendente"
                onEdit={() => console.log('Editar')}
                onRemove={() => console.log('Remover')}
            />



        </div>
    )
}