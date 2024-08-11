import { useState } from "react";
import CompetitionCard from "../card/CompetitionCard";
import Input from "../input/Input";

export default function TabPayments() {

    const [isModalOpen, setModalOpen] = useState(false);

    //const openModal = () => setModalOpen(true);
    //const closeModal = () => setModalOpen(false);

    return (
        <div className="bg-gray-100 w-full ">

            {/*
            <Button label="Open Modal" onClick={openModal} />
            <ModalRegisterGym isOpen={isModalOpen} onClose={closeModal} />
            <ModalRegistration
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            */}
            {/*
            <CardPayments />
            */}
            <div className=" mb-6 flex flex-col items-center">
                <h1 className="mt-2 mb-4 font-semibold">Meus pagamentos </h1>
                <div className="bg-gray-100 flex  w-full justify-center">
                <Input className=" flex flex-row items-end w-1/2 " inputClassName="h-[35px] rounded"  />
                </div>
            </div>

            <div className="flex  flex-wrap   w-full h-fit ">
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Pendente"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Aprovado"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Rejeitado"
                    description="fasidjfasdfasfduifhauihfaofasfasjiojfioasjiasdufhauifhafioofkpsofasidjfioofkapsofasidjfosafkpakfpoaskioofkapsof"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Rejeitado"
                    description="fasidjfasdfasfduifhauihfaofasfasjiojfioasjiasdufhauifhafioofkpsofasidjfioofkapsofasidjfosafkpakfpoaskioofkapsof"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Rejeitado"
                    description="fasidjfasdfasfduifhauihfaofasfasjiojfioasjiasdufhauifhafioofkpsofasidjfioofkapsofasidjfosafkpakfpoaskioofkapsof"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Rejeitado"
                    description="fasidjfasdfasfduifhauihfaofasfasjiojfioasjiasdufhauifhafioofkpsofasidjfioofkapsofasidjfosafkpakfpoaskioofkapsof"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />
                <CompetitionCard
                    name="Paranaense"
                    price="150"
                    startDate="11/08/2024"
                    startTime="14:35 PM"
                    endDate="25/10/2024"
                    endTime="23:35 PM"
                    city="Curitiba"
                    neighborhood="Centro"
                    street="Rua Pedro"
                    number="78"
                    status="Rejeitado"
                    description="fasidjfasdfasfduifhauihfaofasfasjiojfioasjiasdufhauifhafioofkpsofasidjfioofkapsofasidjfosafkpakfpoaskioofkapsof"
                    onEdit={() => console.log('Editar')}
                    onRemove={() => console.log('Remover')}
                />

            </div>



        </div>
    )
}