import { useEffect } from "react";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";
import dataMocked from './Components/mock/dataListRegistrations.json';



function TabListRegistrations(){


    useEffect(() => {

    }, [])

    return (
        <div className="w-screen flex flex-col justify-center items-center p-3">
            <GlobalTile title="Pagamentos e inscrições"/>
            <TableListRegistrations tableJSON={dataMocked}/>
        </div>
    )
}

export default TabListRegistrations;