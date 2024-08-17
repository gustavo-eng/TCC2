import { Edit, Trash } from "lucide-react";
import TableListAthlet from "./components/TableListAthlets/TableListAthlets";



function TabListAthlets() {
    return (
        <div className="w-full h-full">
            <div className="bg-gray-200 w-[123px] h-[42px] flex flex-row justify-around">
                <button className="w-[45px] border-2 border-green-700 flex flex-col justify-center items-center bg-green-100 rounded-md text-green-900">
                    <Edit width={20}/>
                </button>
                <button className="w-[45px] border-2 border-red-700 flex flex-col justify-center items-center bg-red-100 rounded-md">
                    <Trash width={20} additive="sum"/>
                </button>
            </div>
            aopfksdpokpfasdfas TAAABvsdfvsvsdf
            <TableListAthlet />
        </div>
    )
}

export default TabListAthlets;