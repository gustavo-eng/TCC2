import React from 'react';
import Cards from "../components/Cards";
import SearchDate from "../components/SearchDate";

//import { Outlet } from 'react-router-dom';
const Event = () => {
    const handleDateChange = (date) => {
        const [selectedDate, setSelectedDate] = useState('');
        setSelectedDate(date);
    };
    return (
        <>
            <SearchDate />
            <div>
                <label htmlFor="datepicker">Selecione uma data:</label>
                <Datepicker
                    id="datepicker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            {/* items-center justify-between*/}
            <main className="mt-10 mx-auto w-screen flex flex-row flex-wrap">

                {Array.from({ length: 2 }, () => (
                    <div className=" mb-10 ml-2 mr-1 ">
                        <Cards />
                    </div>
                ))}
            </main>
        </>
    )
}

export default Event;