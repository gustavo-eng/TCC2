
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import { setRegistration } from "../../store/registrations/registrationsReducer";
import { AppDispatch } from "../../store/store";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableRegisters from "./components/TableRegisters";

function TabRegisters() {
    const [registrations, setRegistrations] = useState<any>();
    let { user } = useAppSelector(authSelector);
    //const { idEvent } = useParams();
    const { idEvent } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    // params --> {idEvent: '3'}
    //idEvent
    //http://localhost:5173/registersAthlets/23/?tab=registersAthlets

    const getRegistrations = async () => {
        const response = await client.payments.getByGym(user?.idGym as string);
        setRegistrations(response.payload);
        if(response.status) {
            dispatch(setRegistration(response.payload))
        }

        console.log('registrations in redux')

    }

    useEffect(() => {
        getRegistrations();
    }, []);

    return (

        <div className="w-screen lg:w-full h-fit lg:h-[80vh] flex flex-col items-center p-3 ">
            <GlobalTile title="Inscricoes"/>
             {registrations && <TableRegisters tableJSON={registrations} /> }
        </div>
    );
}

export default TabRegisters;