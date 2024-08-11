import { useState } from "react";
import CardPayments from "../card/CardPayment";
import CompetitionCard from "../card/CompetitionCard";

export default function TabPayments() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="bg-red-100 w-full flex flex-row flex-wrap">
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
                startDate="Data inicio"
                endDate="Data fim"
                startTime="Horário inicio"
                endTime="Horário fim"
                city="Cidade"
                neighborhood="Bairro"
                street="Rua"
                number="Número"
                status="Pending"
                onEdit={() => console.log('Editar')}
                onRemove={() => console.log('Remover')}
            />
            <CompetitionCard
                name="NOME DA COMPETIÇÃO"
                price="150"
                startDate="Data inicio"
                endDate="Data fim"
                startTime="Horário inicio"
                endTime="Horário fim"
                city="Cidade"
                neighborhood="Bairro"
                street="Rua"
                number="Número"
                status="Pending"
                onEdit={() => console.log('Editar')}
                onRemove={() => console.log('Remover')}
            />
            <CompetitionCard
                name="NOME DA COMPETIÇÃO"
                price="150"
                startDate="Data inicio"
                endDate="Data fim"
                startTime="Horário inicio"
                endTime="Horário fim"
                city="Cidade"
                neighborhood="Bairro"
                street="Rua"
                number="Número"
                status="Pending"
                onEdit={() => console.log('Editar')}
                onRemove={() => console.log('Remover')}
            />


        </div>
    )
}