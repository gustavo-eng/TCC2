import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import useAppSelector from "../../hooks/useAppSelector";
import { userSelector } from "../../store/user/userReducer";
import CardAction from "../card/CardAction";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
import Input from "../input/Input";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";
import Select from "../select/Select";

export default function TabCompetitions() {


  const navigate = useNavigate();
  const user = useAppSelector(userSelector)

  const [isModalEventOpen, setModalEventOpen] = useState(false);
  const [isModalRegistration, setModalRegistration] = useState<boolean>(false);
  const [idEvent, setIdEvent] = useState<string>("");

  const [isGym, setIsGym] = useState<boolean>(true);
  const [isFprj, setFprj] = useState<boolean>(false); // Adicionar no redux
  const [isAthlet, setIsAthlet] = useState<boolean>(false); // Adicionar no redux
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
    if(user.role === "athlet") {
      setIdEvent(id?.toString());
      setModalRegistration(true);
    } else if(user.role === "gym") {
      navigate(`/${id}?tab=registersAthlets`)
    } else {
      console.log('handleCardAction To FPRJ')

    }

  }

  const closeModalRegistration = () => {
    setModalRegistration(false);
  };

  const [date, setDate] = useState<Date | undefined>();

  return (
    <div>

      {/* Modais para cadastro */}
      <ModalRegistration
        isOpen={isModalRegistration}
        onClose={closeModalRegistration}
        idEvent={idEvent?.toString()}
        textHeader={ "Inscrição"}
      />
      <ModalRegistrationEvent
        isOpen={isModalEventOpen}
        onClose={closeModalEvent}
      />
      <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
        <h1 className="mt-4  text-3xl font-bold  text-green-600">
          Eventos
        </h1>
      </div>
      <div className=" flex flex-row   justify-center items-end  mb-5 pr-2 flex-wrap">
        <Input
          className=" flex flex-row items-end w-[40%] "
          inputClassName="rounded-md border-gray-400 hover:border-green-500  h-[35px] "
          //inputClassName="rounded-md border-gray-400 hover:border-green-500 w-full lg:w-[18vw] h-[4vh] mr-[-4px]"
          label="Buscar"
          isOptional
        />
        <Select
          id="hours"
          name="hours"
          label="Tipo do evento"
          options={options}
          onChange={(e) => console.log(e.target.value)}
          className=" w-1/5 mr-2 bg-gray-50"
          classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500  "
        />
        <DatePickerSingle date={date} setDate={setDate}/>
        {user.role == "fprj" && (
          <Button
            className="   lg:mt-0 bg-green-500 hover:bg-green-600 h-[3.6vh] w-fit  lg:w-fit p-2 rounded flex flex-row items-center "
            label="Evento"
            onClick={openModalEvent}
          >
            <Plus size={18} className="bg-green-600   p-0.5 rounded-xl ml-1" />
          </Button>
        )}
      </div>
      <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-1 ">
        {/* Renderizar de acordo com os dados */}
        <CardAction
          idEvent="1" // Passar id do evento como parametro
          onClick={() => handleCardAction("1")}
          description="adsfafadsfadsfdaiojfoiajfoiajoifafasdfjaisojfoiajfoiajfoiajoifjaoifjaoijfoiajd"
          titleButton={`${isAthlet ? "INSCREVER-SE" : "VER INSCRIÇÕES"}`}
        />
        <CardAction
          titleButton={`${isAthlet ? "INSCREVER-SE" : "VER INSCRIÇÕES"}`}
          idEvent="2"
          onClick={() => handleCardAction("2")}
        />
        <CardAction
          description="adsfauhasudhfdfuahfuaihi"
          titleButton={`${isAthlet ? "INSCREVER-SE" : "VER INSCRIÇÕES"}`}
        />
        <CardAction
          description="adsfauhasudhfdfuahfuaihi"
          titleButton={`${isAthlet ? "INSCREVER-SE" : "VER INSCRIÇÕES"}`}
        />
      </div>
    </div>
  );
}