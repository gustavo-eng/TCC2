import { TimePicker } from '@hilla/react-components/TimePicker.js';
import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";

import { Tooltip } from '@hilla/react-components/Tooltip.js';
import '@vaadin/icons';
export default function TabSeminars() {

    const [date, setDate] = useState<Date | undefined>();
    //https://hilla.dev/docs/react/components/time-picker
    return (
        <div className="">
            <TimePicker label="" value="07:00" className='bg-white w-[103px]' style={{ backgroundColor: 'white' }} ><Tooltip slot="tooltip" text="Tooltip text" />

            </TimePicker>
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
