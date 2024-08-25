
import { useParams } from "react-router-dom";
import TableRegisters from "./components/TableRegisters";
import dataMock from './mock/registers.json';

function TabRegisters() {
    const { idEvent } = useParams();
    const params = useParams();
    //idEvent
    console.warn('paramsfff ', params)
    //http://localhost:5173/registersAthlets/23/?tab=registersAthlets
    return (
        <div className="w-full h-fit lg:h-[80vh] flex flex-col items-center p-3 ">
            <h1 className="mt-4 mb-4 font-semibold  text-green-700 text-xl">Incrições  {idEvent && ` - ${idEvent}`} </h1>
            <TableRegisters tableJSON={dataMock} />
        </div>
    );

}

export default TabRegisters;