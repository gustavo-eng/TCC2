
import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import Button from "../../components/buttons/button";
import CardAction from "../card/CardAction";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
import Input from "../input/Input";
import ModalRegistration from "../modal/modalRegistration/ModalRegistration";
import ModalRegistrationEvent from "../modal/modalRegistrationEvent/ModalRegistrationEvent";
import Select from "../select/Select";


export default function TabCompetitions() {

    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const [isFprj, setFprj] = useState<boolean>(true);
    const [isModalRegistration, setModalRegistration] = useState<boolean>(false);
    const [idEvent, setIdEvent] = useState<string>('');

    //Event
    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    const options = [
        { value: 'US', label: 'Todos' },
        { value: 'US', label: 'Competicao estadual' },
        { value: 'US', label: 'Competicao nacional' },
        { value: 'US', label: 'Competicao internacional' },
        { value: 'CA', label: 'Seminario' },
        { value: 'FR', label: 'Cursos' },
    ];

    const handleOpenModalRegistration = (id: string) => {
        setIdEvent(id?.toString());
        setModalRegistration(true);
    }

    const closeModalRegistration = () => {
        setModalRegistration(false);
    }

    const [date, setDate] = useState<Date | undefined>();

    return (
        <div>
            {/*Modais para cadastro */}
            <ModalRegistration isOpen={isModalRegistration} onClose={closeModalRegistration} idEvent={idEvent?.toString()}/>
            <ModalRegistrationEvent isOpen={isModalEventOpen} onClose={closeModalEvent}/>
            <div className=" flex flex-col items-center font-medium text-green-700 text-[22px] mt-6">Eventos</div>
            <div className=" flex flex-row   justify-center items-end  mb-5 pr-2 flex-wrap">
                <Input className=" flex flex-row items-end w-[40%] " inputClassName="h-[35px] rounded" label="Buscar" isOptional />
                <Select
                    id="hours"
                    name="hours"
                    label="Tipo do evento"
                    options={options}
                    onChange={(e) => console.log(e.target.value)}
                    className=" w-1/5 mr-2 bg-gray-50"
                    classNameSelect="rounded bg-white  border-neutral-500"
                />
                <DatePickerSingle date={date} setDate={setDate}/>
                {isFprj && (
                    <Button className="ml-2 mb-0.5 mt-2  lg:mt-0 bg-green-500 hover:bg-green-600 h-[3.6vh] w-fit  lg:w-fit p-2 rounded flex flex-row items-center " label="Evento">
                        <Plus  size={18} className="bg-green-600   p-0.5 rounded-xl ml-1"/>
                    </Button>
                )}
            </div>
            <div className=" flex flex-wrap   w-full  ">
                {/* Renderizar de acordo com os dados */}
                <CardAction titleButton="inscrever-se"  idEvent="1" onClick={() => handleOpenModalRegistration("1")} description="adsfafadsfadsfdaiojfoiajfoiajoifafasdfjaisojfoiajfoiajfoiajoifjaoifjaoijfoiajd" />
                <CardAction titleButton="inscrever-se" idEvent="2"  onClick={() => handleOpenModalRegistration("2")}/>
                <CardAction description="adsfauhasudhfdfuahfuaihi"  titleButton="inscrever-se"/>
                <CardAction description="adsfauhasudhfdfuahfuaihi"  titleButton="inscrever-se"/>
            </div>

        </div>

    )
}