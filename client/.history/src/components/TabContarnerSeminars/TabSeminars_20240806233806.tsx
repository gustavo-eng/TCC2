import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";

export default function TabSeminars() {

    const [date, setDate] = useState();

    return (
        <div className="">
            <DatePickerSingle date={date} setDate={setDate} />
        </div>
    )
}
