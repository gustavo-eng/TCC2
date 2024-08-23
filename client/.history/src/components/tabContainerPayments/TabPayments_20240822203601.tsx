import { useState } from "react";
import CompetitionCard from "../card/CompetitionCard";
import Input from "../input/Input";

export default function TabPayments() {

    const [idPayment, setIdPayment] = useState<string>('');
    const [isModalRegistration, setIsModalRegistration] = useState<boolean>(false);

    const handleOpenModalRegistration = (id:string) => {
        setIdPayment(id?.toString());
        setIsModalRegistration(true);
    }

    const closeModal = () => {
        setIsModalRegistration(false);
    }

    return (
        <div className="w-full h-full">

            <div className=" mb-6 flex flex-col items-center">
                <h1 className="mt-2 mb-4 font-semibold  text-green-700 text-xl">Meus pagamentos </h1>
                <div className="bg-gray-100 flex  w-full justify-center">
                <Input className=" flex flex-row items-end w-1/2 " inputClassName="h-[35px] rounded"  />
                </div>
            </div>

            <div className="flex  flex-wrap   w-full h-fit ">
                <CompetitionCard
                    idPayment={"1"}
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
                    idPayment={"2"}
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
                    idPayment={"3"}
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