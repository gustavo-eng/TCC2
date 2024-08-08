import { TimePicker } from '@hilla/react-components/TimePicker.js';
import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";

import { Tooltip } from '@hilla/react-components/Tooltip.js';
import '@vaadin/icons';
export default function TabSeminars() {

    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<any>()

    console.log('Timee ', time)
    //https://hilla.dev/docs/react/components/time-picker
    return (
        <div className="">
            <TimePicker label="" value="07:00" onValueChanged={setTime} className='bg-white w-[100px]' style={{ backgroundColor: 'white' }} ><Tooltip slot="tooltip" text="Tooltip text" />

            </TimePicker>
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
