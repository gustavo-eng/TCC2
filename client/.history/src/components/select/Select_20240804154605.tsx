

import { CaretDown } from '@phosphor-icons/react';

export default function Select() {
    return (
        <div className="relative bg-white mt-7 w-[190px]">
            <label htmlFor="countries" className="block mb-0 text-sm font-medium text-gray-600">Select an option</label>
            <div className="relative">
                <select id="countries" className="appearance-none outline-none font-normal text-gray-600 bg-gray-100 border border-green-700 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-full p-1 pr-10 dark:focus:ring-green-500 dark:focus:border-green-600">
                    <option selected>Choose a country</option>
                    <option value="US" className='text-green-600 font-semibold'>United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <CaretDown className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none text-gray-600" size={15} />
            </div>
        </div>
    );
}
