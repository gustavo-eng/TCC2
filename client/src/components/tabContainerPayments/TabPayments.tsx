import { Fragment, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { getSession } from "../../lib/axios";
import client from "../../service/client";
import { describeStatusPayment } from "../../utils/describeStatusPayment";
import { extractHour, formatDate } from "../../utils/fornatDate";
import CompetitionCard from "../card/CompetitionCard";
import Input from "../input/Input";
import ModalConfirmation, {
  ModalConfirmationHandle,
} from "../modal/modalConfirmation/ModalConfirmation";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import { Payment } from "./TabPaymentsTypes";

export default function TabPayments() {
  const user: any = getSession("user");

  const [idPayment, setIdPayment] = useState<string| number >();
  const [isModalRegistration, setIsModalRegistration] =
    useState<boolean>(false);

  const [myPayments, setMyPayments] = useState<Payment[]>();
  const [controlFlag, setControlFlag] = useState<boolean>(false);

  const modalRef = useRef<ModalConfirmationHandle>(null);


  const handleOpenModal = (idPayment?: string | number) => {
    setIdPayment(String(idPayment))
    modalRef.current?.openModal();
  };

  const handleConfirm = async () => {
     try {
       const response = await  client.payments.delete(idPayment as string);
       if(response.status) {
         toast.success('Pagamento deletado com sucesso', {duration: 2000})
         setControlFlag(!controlFlag)
        } else {
         toast.error('Erro ao deletar pagamento', {duration: 2000})
       }
      }catch(err) {
        console.log(`Erro ao deletar ==> `, err);
        toast.error('Erro ao deletar ', {duration: 5000});
     }
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
    const response = await client.payments.getByAthlet(user.idAthlete);
    setMyPayments(response.payload);
    return response;
  }

  useEffect(() => {
    getMyPayments();
  }, [controlFlag]);

  return (
    <div className="w-full h-full  flex  flex-col items-center">
      <Toaster />
      <ModalConfirmation
        ref={modalRef}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <ModalRegistration
        isOpen={isModalRegistration}
        onClose={closeModal}
        textHeader={"Editar"}
        idEvent={idPayment?.toString()}
      />
      <div className=" mb-6 flex flex-col items-center  w-full">
        <h1 className="mt-4 mb-4 text-3xl font-bold  text-green-600">
          Meus pagamentos
        </h1>
        <Input
          className="  flex flex-row items-end  w-[90%] lg:w-1/2 rounded "
          inputClassName="h-[35px] rounded-xl border-[1px] border-green-300 hover:border-green-400"
        />
      </div>
      <div className=" grid grid-cols-2 gap-0 lg:grid-cols-4 lg:gap-1  w-fit">
        {myPayments?.map((el, idx) => {
          return (
            <Fragment key={idx}>
              <CompetitionCard
                voucherPath={el?.voucherPath || ""}
                idPayment={el?.idPayment}
                name={String(el?.Event?.description)|| "Not informed"}
                price={String(el?.Event?.price)}
                startDate={String(formatDate(el?.Event?.startDate))}
                startTime={String(extractHour(el?.Event?.startDate))}
                endDate={String(formatDate(el?.Event?.endDate)) ?? null}
                endTime={String(extractHour(el?.Event?.endDate))}
                city={el?.Event?.city ?? "Not Informed"}
                neighborhood={el?.Event?.neighborhood}
                street={el?.Event?.street}
                number={String(el?.Event?.number)}
                status={
                  describeStatusPayment(
                    Boolean(el?.aproved),
                    String(el?.description)
                  ) ?? "Pendente"
                }
                classCategory={el?.Category?.classCategory || ""}
                weight={Number(el?.weight) || ''}
                gender={el?.Category?.gender}
                description={el?.description ?? ""}
                onEdit={() => handleOpenModalRegistration(Number(el?.idPayment))}
                onRemove={() => handleOpenModal(el?.idPayment)}
                edit={false}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
