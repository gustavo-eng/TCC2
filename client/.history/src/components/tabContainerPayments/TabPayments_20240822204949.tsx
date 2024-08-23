import { useState } from "react";
import CompetitionCard from "../card/CompetitionCard";
import Input from "../input/Input";
import ModalConfirmation from "../modal/modalConfirmation/ModalConfirmation";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";

export default function TabPayments() {
  const [idPayment, setIdPayment] = useState<string>("");
  const [isModalRegistration, setIsModalRegistration] =
    useState<boolean>(false);

  const handleOpenModalRegistration = (id: number) => {
    setIdPayment(id?.toString());
    setIsModalRegistration(true);
  };

  const closeModal = () => {
    setIsModalRegistration(false);
  };
  const handleConfirm = () => {
    console.log("Item deleted");
  };

  const handleCancel = () => {
    console.log("Delete action cancelled");
  };

  return (
    <div className="w-full h-full">

      <ModalConfirmation
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <ModalRegistration
        isOpen={isModalRegistration}
        onClose={closeModal}
        idEvent={idPayment?.toString()}
      />

      <div className=" mb-6 flex flex-col items-center">
        <h1 className="mt-2 mb-4 font-semibold  text-green-700 text-xl">
          Meus pagamentos{" "}
        </h1>
        <div className="bg-gray-100 flex  w-full justify-center">
          <Input
            className=" flex flex-row items-end w-1/2 "
            inputClassName="h-[35px] rounded"
          />
        </div>
      </div>
      <div className="flex  flex-wrap   w-full h-fit ">
        <CompetitionCard
          idPayment={"20"}
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
          onEdit={() => handleOpenModalRegistration(20)}
          onRemove={() => console.log("Remover")}
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
          onEdit={() => console.log("Editar")}
          onRemove={() => console.log("Remover")}
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
          onEdit={() => console.log("Editar")}
          onRemove={() => console.log("Remover")}
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
          onEdit={() => console.log("Editar")}
          onRemove={() => console.log("Remover")}
        />
      </div>
    </div>
  );
}
