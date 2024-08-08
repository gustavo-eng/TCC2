import { TimePicker } from '@hilla/react-components/TimePicker.js';
import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
export default function TabSeminars() {

    const [date, setDate] = useState<Date | undefined>();


    return (
        <div className="">
            <TimePicker label="Alarm" value="07:00" className='bg-white' />
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
