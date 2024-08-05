
export default function Select() {
    return (
        <div className="max-w-sm mx-auto bg-white mt-7">
            <label htmlFor="countries" className="block mb-0 text-sm font-medium text-gray-600 ">Select an option</label>
            <select id="countries" className="text-black bg-gray-200  border-gray-700  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5   dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected className="text-black">Choose a country</option>
                <option value="US" className="text-black">United States</option>
                <option value="CA" className="text-black">Canada</option>
                <option value="FR" className="text-black">France</option>
                <option value="DE" className="text-black">Germany</option>
            </select>
        </div>
    )
}