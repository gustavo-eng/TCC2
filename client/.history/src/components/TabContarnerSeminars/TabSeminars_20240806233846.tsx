import { useState } from "react";
import DatePickerSingle from "../datePickerSingle/DatePickerSingle";

export default function TabSeminars() {

    const [date, setDate] = useState();

    console.warn('Em tab seminars. Date ', date);

    return (
        <div className="">
            <DatePickerSingle date={date} setDate={() => setDate} />
        </div>
    )
}
