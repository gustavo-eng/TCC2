import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
export default function TabSeminars() {

    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<string>("07:00"); // Estado para armazenar o valor do TimePicker


    const handleTimeChange = (event: any) => {
        console.log(event)
        setTime(event.detail.value);
    };


    //https://hilla.dev/docs/react/components/time-picker
    return (
        <div className="">
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
