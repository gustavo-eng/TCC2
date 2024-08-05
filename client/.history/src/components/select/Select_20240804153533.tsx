


export default function Select() {
    return (
        <div className=" bg-white mt-7 w-full">
            <label htmlFor="countries" className="block mb-0 text-sm font-medium text-gray-600 ">Select an option</label>
            <select id="countries" className="outline-none font-normal text-gray-600 bg-red-100 border border-green-900  text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-1   dark:focus:ring-green-500 dark:focus:border-green-600">
                <option selected >Choose a country</option>
                <option value="US" >United States</option>
                <option value="CA" >Canada</option>
                <option value="FR" >France</option>
                <option value="DE" >Germany</option>
            </select>
        </div>
    )
}