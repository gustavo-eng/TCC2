import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { registrationSelector } from "../../store/registrations/registrationsReducer";
import { AppDispatch } from "../../store/store";
import { isNumber } from "../../utils/isNumber";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";


function TabListRegistrations(){
    const [registrationNew, setRegistrations] = useState<any>();
    const selector = useAppSelector(registrationSelector);
    const { idEvent } = useParams();
    const {registration} = selector;
    const dispatch = useDispatch<AppDispatch>();

    const getRegistrations = async () => {
        try {
            console.log('idEventssss', idEvent)
            let response;
            if(isNumber(idEvent as string)) {
                response = await client.payments.getSpecific(idEvent as string)
            } else {
                response =  await client.payments.listAll();
            }

            if(response.status) {
                setRegistrations(response.payload)
            } else {
                setRegistrations([])
            }
        }catch(err) {
            console.error('err ',err)
            setRegistrations([])
        }

    }

    useEffect(() => {
        getRegistrations();
        console.warn('registrationNew ', registrationNew)
    }, [registration, dispatch])

    return (
        <div className="w-screen flex flex-col justify-center items-center p-3">
            <GlobalTile title={`${registrationNew && isNumber(idEvent as string) ?  `Inscrição do evento: ${registrationNew?.[0]?.Event?.description || ""}` : `Inscricoes e pagamentos`}`}/>
            {registrationNew && <TableListRegistrations tableJSON={registrationNew || []}
            /> }
            {!registrationNew && <TableListRegistrations tableJSON={[]}/> }
        </div>
    )
}

export default TabListRegistrations;