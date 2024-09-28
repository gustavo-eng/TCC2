import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { registrationSelector } from "../../store/registrations/registrationsReducer";
import { AppDispatch } from "../../store/store";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";



function TabListRegistrations(){
    const [registration, setRegistrations] = useState<any>();
        const selector = useAppSelector(registrationSelector);
    const {registrationUpdate} = selector;
    const dispatch = useDispatch<AppDispatch>();

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
    }, [registrationUpdate, dispatch])

    return (
        <div className="w-screen flex flex-col justify-center items-center p-3">
            <GlobalTile title="Pagamentos e inscrições"/>
            {registration && <TableListRegistrations tableJSON={registration || []}/> }
            {!registration && <TableListRegistrations tableJSON={[]}/> }
        </div>
    )
}

export default TabListRegistrations;