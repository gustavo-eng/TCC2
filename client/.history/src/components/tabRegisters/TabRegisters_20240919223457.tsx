
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableRegisters from "./components/TableRegisters";
import dataMock from './mock/registers.json';

function TabRegisters() {
    const [registrations, setRegistrations] = useState<any>();
    let { user } = useAppSelector(authSelector);
    //const { idEvent } = useParams();
    const { idEvent } = useParams();

    // params --> {idEvent: '3'}
    //idEvent
    //http://localhost:5173/registersAthlets/23/?tab=registersAthlets

    const getRegistrations = async () => {
        const response = await client.payments.getByGym(user?.idGym as string);
        setRegistrations(response.payload);
    }

    useEffect(() => {
        getRegistrations();
    }, []);

    return (

        <div className="w-screen lg:w-full h-fit lg:h-[80vh] flex flex-col items-center p-3 ">
            {JSON.stringify(registrations)}
            <GlobalTile title="Inscricoes"/>
             {registrations && <TableRegisters tableJSON={dataMock} /> }
        </div>
    );
}

export default TabRegisters;