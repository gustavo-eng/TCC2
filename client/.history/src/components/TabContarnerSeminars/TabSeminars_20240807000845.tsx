import { TimePicker } from '@hilla/react-components/TimePicker.js';
import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";
export default function TabSeminars() {

    const [date, setDate] = useState<Date | undefined>();
    //https://hilla.dev/docs/react/components/time-picker
    return (
        <div className="">
            <TimePicker label="" value="07:00" className='bg-white ' helperText={'fasdfaf'} ></TimePicker>
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
