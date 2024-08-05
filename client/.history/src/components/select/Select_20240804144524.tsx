export default function Select() {
    return (
        <div className="max-w-sm mx-auto bg-white mt-7">
            <label htmlFor="countries" className="block mb-0 text-sm font-medium text-gray-600">Select an option</label>
            <select
                id="countries"
                className="text-black bg-gray-200 border border-gray-700 text-sm rounded focus:ring-0 focus:border-gray-700 block w-full p-1.5"
            >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    )
}
