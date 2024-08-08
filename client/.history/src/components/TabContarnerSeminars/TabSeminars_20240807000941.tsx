import { TimePicker } from '@hilla/react-components/TimePicker.js';
import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
export default function TabSeminars() {

    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<string>("07:00"); // Estado para armazenar o valor do TimePicker

    /*
    const handleTimeChange = (event: CustomEvent) => {
        setTime(event.detail.value);
    };

    console.log('Timeee ', time )
    */
    //https://hilla.dev/docs/react/components/time-picker
    return (
        <div className="">
            <TimePicker label="" value="07:00" className='bg-white ' onValueChanged={handleTimeChange} helperText={'fasdfaf'} ></TimePicker>
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
