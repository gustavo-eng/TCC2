
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import { registrationSelector, setRegistration } from "../../store/registrations/registrationsReducer";
import { AppDispatch } from "../../store/store";
import { isNumber } from "../../utils/isNumber";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableRegisters from "./components/TableRegisters";

function TabRegisters() {

    const [registrations, setRegistrations] = useState<any>();
    let { user } = useAppSelector(authSelector);
    let {registration} = useAppSelector(registrationSelector)
    const { idEvent } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const getRegistrations = async () => {
        let response;
        if(isNumber(idEvent as string)) {
            response = await client.payments.getSpecificOfGym(idEvent as string, user?.idGym as string);
        } else {
            response = await client.payments.getByGym(user?.idGym as string);
        }
        setRegistrations(response.payload);
        if(response.status) {
            dispatch(setRegistration(response.payload))
            //console.log('registrationssss', registration)
        } else {
            dispatch(setRegistration([]))
        }


    }

    useEffect(() => {
        getRegistrations();

    }, [dispatch]);

    return (

        <div className="w-screen lg:w-full h-fit lg:h-[80vh] flex flex-col items-center p-3 ">
            <GlobalTile title="Inscricoes"/>
            {JSON.stringify(registrations)}
             {registrations && <TableRegisters tableJSON={registrations} /> }
             {!registrations && <TableRegisters tableJSON={[]}/>}
        </div>
    );
}

export default TabRegisters;