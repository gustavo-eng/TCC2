
import { useParams } from "react-router-dom";
import TableRegisters from "./components/TableRegisters";

function TabRegisters() {

    const params = useParams();
    //idEvent
    console.warn('params ', params?.nameCompetition)

    //console.log('Params');

    return (
        <div className="w-full h-fit lg:h-[80vh] flex flex-col items-center p-3 ">
            <h1 className="mt-4 mb-4 font-semibold  text-green-700 text-xl">Incrições {params?.nameCompetition || "fff"} </h1>
            <TableRegisters />
        </div>
    );

}

export default TabRegisters;