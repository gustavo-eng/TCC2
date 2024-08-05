
export default function Select() {
    return (
        <>
            <form className="max-w-sm mx-auto">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="countries" className="text-black bg-gray-100  border-gray-700  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected className="text-black">Choose a country</option>
                    <option value="US" className="text-black">United States</option>
                    <option value="CA" className="text-black">Canada</option>
                    <option value="FR" className="text-black">France</option>
                    <option value="DE" className="text-black">Germany</option>
                </select>
            </form>
        </>
    )
}