import React, { useState } from 'react';
import Datepicker from 'tailwindcss-datepicker';
import 'tailwindcss-datepicker/dist/tailwind-datepicker.css';

const SearchDate2 = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <label htmlFor="datepicker">Selecione uma data:</label>
            <Datepicker
                id="datepicker"
                value={selectedDate}
                onChange={handleDateChange}
                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default SearchDate2;
