import { useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";
import dataMocked from './Components/mock/dataListRegistrations.json';



function TabListRegistrations(){
    const [registration, setRegistrations] = useState<any>();

    const getRegistrations = async () => {
        try {
            const response =  await client.payments.listAll();
            console.log('response ', response);
            if(response.status) {
                setRegistrations(response.payload)
            } else {
                setRegistrations([])
            }
        }catch(err) {
            setRegistrations([])
        }

    }

    useEffect(() => {
        getRegistrations();
    }, [])

    return (
        <div className="w-screen flex flex-col justify-center items-center p-3">
            <GlobalTile title="Pagamentos e inscrições"/>
            {registration && <TableListRegistrations tableJSON={dataMocked || []}/> }
        </div>
    )
}

export default TabListRegistrations;