import { useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";
import dataMocked from './Components/mock/dataListRegistrations.json';

interface PropsResponse {
    status?: boolean,
    payload?: object
}


function TabListRegistrations(){
    const [registration, setRegistrations] = useState<any>();

    const getRegistrations = async () => {
        try {
            const response = client.payments.listAll();
            setRegistrations(response.payload)
        }catch(err) {

        }

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