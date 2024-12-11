import { Plus } from "@phosphor-icons/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import { extractHour, formatDate } from "../../utils/fornatDate";
import CardAction from "../card/CardAction";
import Input from "../input/Input";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";
import { EventTypes } from "./TabCompetitionTypes";

function findEventById(data: any, idEvent: number) {
  try {
    const event = data.find((item: any) => item?.Event?.idEvent === idEvent);
    if (event) return true;
    return false;
  } catch (err) {
    return false;
  }
}
function countEventById(data: any, idEvent: number) {
  try {
    const eventLength = data.filter(
      (item: any) => item?.Event?.idEvent === idEvent
    ).length;
    if (eventLength) return eventLength;
    return 0;
  } catch (err) {
    return 0;
  }
}

export default function TabCompetitions() {
  const navigate = useNavigate();
  const { user } = useAppSelector(authSelector);
  const [searchText, setSearchText] = useState<string>(""); // State for filtering by name
  const [isModalEventOpen, setModalEventOpen] = useState(false);
  const [isModalRegistration, setModalRegistration] = useState<boolean>(false);
  const [idEvent, setIdEvent] = useState<string>("");
  const [allRegistration, setAllRegistratiom] = useState<any>();
  const [events, setEvents] = useState<EventTypes[] | null>(null);
  //Events modal

  //Event
  const openModalEvent = () => setModalEventOpen(true);
  const closeModalEvent = () => setModalEventOpen(false);

  const handleCardAction = useCallback(
    (id: any) => {
      if (user.role === "athlet") {
        setIdEvent(id?.toString());
        setModalRegistration(true);
      } else if (user.role === "gym") {
        navigate(`/${id}?tab=registersAthlets`);
      } else if (user.role === "fprj") {
        navigate(`/listRegistrations/${id}?tab=listRegistrations`);
      } else {
        console.log("handleCardAction To FPRJ");
      }
    },
    [user.role, navigate]
  );

  const closeModalRegistration = () => {
    setModalRegistration(false);
  };

  async function getAllCompetitions() {
    try {
      const response = await client.competition.get();
      if (response?.status && Array.isArray(response.payload)) {
        setEvents(response.payload); // Atualiza o estado com os eventos recebidos
      } else {
        setEvents(null); // Se não houver eventos, set null
      }
    } catch (error) {
      console.error("Erro ao buscar competições", error);
      setEvents(null); // Tratar erro e garantir que o estado seja atualizado
    }
  }

  const deleteEvent = async (idEvent: string) => {
    try {
      const response = await client.event.delete(idEvent as string);
      if (response.status) {
        toast.error("Evento deletado!", { duration: 4000 });
        await getAllCompetitions();
      } else {
        toast.error("Erro ao deletar evento");
      }
    } catch (err) {
      console.error("Err ==> ", err);
    }
  };

  const filteredEvents = events?.filter(
    (el) =>
      el?.typeEvent?.type?.toLowerCase().includes(searchText.toLowerCase()) ||
      String(formatDate(String(el?.startDate)))
        ?.toUpperCase()
        .includes(searchText.toUpperCase())
  );

  const getAllRegistrions = async (id: string) => {
    try {
      let response: any;
      if (user.role == "gym") {
        response = await client.payments.getByGym(id as string); // paassar id
      } else {
        response = await client.payments.listAll();
      }

      if (response.status) {
        setAllRegistratiom([...response.payload]);
      } else {
        setAllRegistratiom([]);
      }
    } catch (err) {
      console.error("Erro ao procurar todos os pagamentos.");
    }
  };

  useEffect(() => {
    if (user.role != "athlet") {
      getAllRegistrions(String(user.idGym));
    }
    getAllCompetitions();
  }, []);

  return (
    <div className="lg:w-full w-screen">
      <ModalRegistration
        isOpen={isModalRegistration}
        onClose={closeModalRegistration}
        idEvent={idEvent?.toString()}
        textHeader={"Inscrição"}
        nameCompetition=" "
      />
      <ModalRegistrationEvent
        isOpen={isModalEventOpen}
        onClose={closeModalEvent}
      />
      <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
        <h1 className="mt-4  text-3xl font-bold  text-green-600">Eventos</h1>
      </div>
      <div className="w-full flex flex-row justify-center items-end gap-2 mb-2 pr-1.5 flex-wrap h-fit ">
        <Input
          className="  lg:w-[50%] w-full   ml-4 h-fit"
          spanInputClassName=""
          inputClassName="rounded-md border-gray-400 hover:border-green-500 m-0 p-2"
          placeholder="Pesquise pelo nome ou pela data"
          label="Buscar"
          onChange={(e) => setSearchText(e.target.value)}
          isOptional
        />
        {user.role == "fprj" && (
          <Button
            className="lg:mt-0  bg-green-500/85 hover:bg-green-500  lg:w-fit w-full  py-2 px-4 rounded-md flex flex-row justify-between h-full"
            label="Evento"
            classNameLabel="text-sm"
            onClick={openModalEvent}
          >
            <Plus size={18} className="m-0" />
          </Button>
        )}
      </div>
      <div className="w-fit grid grid-cols-2 lg:grid-cols-4 gap-0">
        {filteredEvents?.map((el, idx) => (
          <Fragment key={idx}>
            <CardAction
              name={el?.typeEvent?.type}
              startDate={formatDate(String(el?.startDate))}
              startHour={extractHour(String(el?.createdAt))}
              city={el?.city ?? " "}
              neighborhood={el?.neighborhood}
              street={el?.street ?? " "}
              idEvent={String(el?.idEvent)}
              onClick={() => handleCardAction(Number(el?.idEvent))}
              description={`${el?.description}`}
              price={String(el?.price) || ""}
              btn={
                user.role == "athlet"
                  ? true
                  : findEventById(allRegistration, Number(el?.idEvent))
              }
              showAmount={user.role != "athlet" ? true : false}
              amount={countEventById(allRegistration, Number(el?.idEvent))}
              titleButton={`${
                user.role == "athlet" ? "INSCREVER-SE" : "VER INSCRIÇÕES"
              }`}
            >
              {user.role == "fprj" && (
                <Button
                  className="w-full h-7   rounded-md bg-red-500/75 hover:bg-red-600/70 text-white font-normal text-xs lg:text-sm mb-1 mt-2"
                  label={"Deletar"}
                  classNameLabel="text-xs lg:text-md"
                  onClick={() => deleteEvent(String(el?.idEvent))}
                />
              )}
            </CardAction>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
