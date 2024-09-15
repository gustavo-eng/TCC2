import { Fragment, useEffect, useRef, useState } from "react";
import { getSession } from "../../lib/axios";
import client from "../../service/client";
import CompetitionCard from "../card/CompetitionCard";
import Input from "../input/Input";
import ModalConfirmation, {
  ModalConfirmationHandle,
} from "../modal/modalConfirmation/ModalConfirmation";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import { Payment } from "./TabPaymentsTypes";

export default function TabPayments() {

  const user = getSession('user');

  const [idPayment, setIdPayment] = useState<string>("");
  const [isModalRegistration, setIsModalRegistration] =
    useState<boolean>(false);


  const [myPayments, setMyPayments] = useState<Payment[]>();

  const modalRef = useRef<ModalConfirmationHandle>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  const handleConfirm = () => {
    console.log("Item deleted");
  };

  const handleCancel = () => {
    console.log("Delete action cancelled");
  };

  const handleOpenModalRegistration = (id: number) => {
    setIdPayment(id?.toString());
    setIsModalRegistration(true);
  };

  const closeModal = () => {
    setIsModalRegistration(false);
  };

  async function getMyPayments() {
      const response = await client.payments.getByAthlet('7');
      setMyPayments(response.payload);
      return response;

  }


  useEffect(() => {
    console.log('Teste');
    getMyPayments();
  }, [])

  return (
    <div className="w-full h-full  flex  flex-col items-center">
      {myPayments?.map(el => {
        return (
          <p>{el?.createdAt}</p>
        )
      })}
      <ModalConfirmation
        ref={modalRef}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <ModalRegistration
        isOpen={isModalRegistration}
        onClose={closeModal}
        textHeader="Editar"
        idEvent={idPayment?.toString()}
      />
      <div className=" mb-6 flex flex-col items-center  w-full">
        <h1 className="mt-4 mb-4 text-3xl font-bold  text-green-600">
          Meus pagamentos
        </h1>
          <Input
            className=" bg-gre flex flex-row items-end  w-[90%] lg:w-1/2 rounded "
            inputClassName="h-[35px] rounded-xl border-[2px] border-green-600"
          />
      </div>
      <div className=" grid grid-cols-2 gap-0 lg:grid-cols-4 lg:gap-1  w-fit">
        {
          /*


          */
        }
        {myPayments?.map((el, idx) => {
          return (
            <Fragment key={idx}>

            </Fragment>
          )
        })}
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
          onEdit={() => handleOpenModalRegistration()}
          onRemove={handleOpenModal}
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


      </div>
    </div>
  );
}
0