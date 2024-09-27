import { useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";
import dataMocked from './Components/mock/dataListRegistrations.json';



function TabListRegistrations(){
    const [registration, setRegistrations] = useState<any>();

    const getRegistrations = async () => {
        const response = client.payments.listAll();
    }

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