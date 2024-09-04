
import { useParams } from "react-router-dom";
import TableRegisters from "./components/TableRegisters";
import dataMock from './mock/registers.json';

function TabRegisters() {
    //const { idEvent } = useParams();
    const params = useParams();
    //idEvent
    //console.warn('paramsfff ', params)
    //http://localhost:5173/registersAthlets/23/?tab=registersAthlets
    return (
        <div className="w-screen lg:w-full h-screeen lg:h-[80vh] flex flex-col items-center p-3 ">
            <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
                <h1 className="mt-1 mb-4 text-3xl font-bold  text-green-600">
                  Incrições
                  { /* Incrições  {idEvent && ` - ${idEvent}`} */}
                </h1>
            </div>
            <TableRegisters tableJSON={dataMock} />
        </div>
    );
}

export default TabRegisters;