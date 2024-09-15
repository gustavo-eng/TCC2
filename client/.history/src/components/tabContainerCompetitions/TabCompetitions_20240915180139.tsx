import { Plus } from "@phosphor-icons/react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import { getSession } from "../../lib/axios";
import client from "../../service/client";
import { extractHour, formatDate } from "../../utils/fornatDate";
import CardAction from "../card/CardAction";
import Input from "../input/Input";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";
import Select from "../select/Select";
import { EventTypes } from "./TabCompetitionTypes";

export default function TabCompetitions() {
  const navigate = useNavigate();
  //const user = useAppSelector(userSelector);
  const user: any = getSession("user");
  const [isModalEventOpen, setModalEventOpen] = useState(false);
  const [isModalRegistration, setModalRegistration] = useState<boolean>(false);
  const [idEvent, setIdEvent] = useState<string>("");


  //Events modal
  const [events, setEvents] = useState<EventTypes[] | null>(null);
  //Event
  const openModalEvent = () => setModalEventOpen(true);
  const closeModalEvent = () => setModalEventOpen(false);

  const options = [
    { value: "US", label: "Todos" },
    { value: "US", label: "Competicao estadual" },
    { value: "US", label: "Competicao nacional" },
    { value: "US", label: "Competicao internacional" },
    { value: "CA", label: "Seminario" },
    { value: "FR", label: "Cursos" },
  ];

  const handleOpenModalRegistration = (id: string) => {
    setIdEvent(id?.toString());
    setModalRegistration(true);
  };

  const handleCardAction = (id: any) => {
    if (user.role === "athlet") {
      setIdEvent(id?.toString());
      setModalRegistration(true);
    } else if (user.role === "gym") {
      navigate(`/${id}?tab=registersAthlets`);
    } else {
      console.log("handleCardAction To FPRJ");
    }
  };

  const closeModalRegistration = () => {
    setModalRegistration(false);
  };

  const [date, setDate] = useState<Date | undefined>();

  async function getAllCompetitions() {
    try {
      const response = await client.competition.get();
      if (response?.status && Array.isArray(response.payload)) {
        setEvents(response.payload); // Atualiza o estado com os eventos recebidos
      } else {
        setEvents(null); // Se não houver eventos, set null
      }
      console.log("events ", events);
    } catch (error) {
      console.error("Erro ao buscar competições", error);
      setEvents(null); // Tratar erro e garantir que o estado seja atualizado
    }
  }


  // States for filters
  const [searchText, setSearchText] = useState<string>(""); // State for filtering by name
  const [searchDate, setSearchDate] = useState<string>("");  // State for filtering by startDate

 // Filter events based on name and start date
  const filteredEvents = events?.filter(
    (el) =>
      el?.typeEvent?.type?.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchText ? formatDate(String(el?.startDate)) === searchText : true)
  );

  useEffect(() => {
    getAllCompetitions(); // Chama a função para buscar as competições quando o componente for montado
  }, []);

  return (
    <div>
      <ModalRegistration
        isOpen={isModalRegistration}
        onClose={closeModalRegistration}
        idEvent={idEvent?.toString()}
        textHeader={"Inscrição"}
      />
      <ModalRegistrationEvent
        isOpen={isModalEventOpen}
        onClose={closeModalEvent}
      />
      <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
        <h1 className="mt-4  text-3xl font-bold  text-green-600">Eventos</h1>
      </div>
      <div className="w-full flex flex-row justify-center items-end  mb-5 pr-1.5 flex-wrap">
        <Input
          className=" flex flex-row items-end w-[50%] "
          inputClassName="rounded-md border-gray-400 hover:border-green-500  h-[35px] "
          //inputClassName="rounded-md border-gray-400 hover:border-green-500 w-full lg:w-[18vw] h-[4vh] mr-[-4px]"
          label="Buscar"
          onChange={(e) => setSearchText(e.target.value)}
          isOptional
        />
        <Select
          id="hours"
          name="hours"
          label="Tipo do evento"
          options={options}
          onChange={(e) => console.log(e.target.value)}
          className=" w-1/5 mr-2 ml-1 bg-gray-50"
          classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500  "
        />
        {/*
          <DatePickerSingle date={date} setDate={setDate} />
        */}
        {user.role == "fprj" && (
          <Button
            className="ml-1 lg:mt-0 bg-green-500/85 hover:bg-green-500  w-fit  lg:w-fit py-2 px-2 rounded-md flex flex-row justify-between "
            label="Evento"
            classNameLabel="text-sm"
            onClick={openModalEvent}
          >
            <Plus size={18} className="" />
          </Button>
        )}
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-1">
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
              description={`${el?.description} _idEvent: ${el?.idEvent}`}
              titleButton={`${user.role == "athlet" ? "INSCREVER-SE" : "VER INSCRIÇÕES"}`}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
