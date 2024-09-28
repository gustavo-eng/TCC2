import { useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";



function TabListRegistrations(){
    const [registration, setRegistrations] = useState<any>();

    const getRegistrations = async () => {
        try {
            const response =  await client.payments.listAll();
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
            <GlobalTile title="Pagamentos e inscrições"/>ddd
            {registration && <TableListRegistrations tableJSON={registration || []}/> }
            {!registration && <TableListRegistrations tableJSON={[]}/> }
        </div>
    )
}

export default TabListRegistrations;