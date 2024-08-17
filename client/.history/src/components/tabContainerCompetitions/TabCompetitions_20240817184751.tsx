
import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import Button from "../../components/buttons/button";
import CardAction from "../card/CardAction";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
import Input from "../input/Input";
import Select from "../select/Select";


export default function TabCompetitions() {

    const options = [
        { value: 'US', label: 'Todos' },
        { value: 'US', label: 'Competicao estadual' },
        { value: 'US', label: 'Competicao nacional' },
        { value: 'US', label: 'Competicao internacional' },
        { value: 'CA', label: 'Seminario' },
        { value: 'FR', label: 'Cursos' },
    ];

    const [date, setDate] = useState<Date | undefined>();

    return (
        <div>
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
                <DatePickerSingle date={date} setDate={setDate} className="w-[4vw]"/>

                <Button className="ml-2 mb-0.5 bg-green-500 hover:bg-green-600 h-[4.5vh] w-fit p-2 rounded flex flex-row items-center " label="Evento">
                    <Plus  size={18} className="bg-green-600   p-0.5 rounded-xl ml-1"/>
                </Button>
            </div>
            <div className=" flex flex-wrap   w-full  ">
                <CardAction description="adsfafadsfadsfdaiojfoiajfoiajoifafasdfjaisojfoiajfoiajfoiajoifjaoifjaoijfoiajd" />
                <CardAction titleButton="inscrever-se" />
                <CardAction description="adsfauhasudhfdfuahfuaihi" />
                <CardAction description="adsfauhasudhfdfuahfuaihi" />
            </div>

        </div>

    )
}
