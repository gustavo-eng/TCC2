
import { useParams } from "react-router-dom";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableRegisters from "./components/TableRegisters";
import dataMock from './mock/registers.json';

function TabRegisters() {
    //const { idEvent } = useParams();
    const params = useParams();
    // params --> {idEvent: '3'}
    //idEvent
    console.warn('params /////////////////////', params)
    //http://localhost:5173/registersAthlets/23/?tab=registersAthlets
    return (
        <div className="w-screen lg:w-full h-fit lg:h-[80vh] flex flex-col items-center p-3 ">
            <GlobalTile title="Inscricoes"/>
            <TableRegisters tableJSON={dataMock} />
        </div>
    );
}

export default TabRegisters;