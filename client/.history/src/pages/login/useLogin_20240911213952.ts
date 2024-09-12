import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "typescript-cookie";
import client from "../../service/client";
import { AppDispatch } from "../../store/store";

function useLogin() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()

    let invalidCredentials = false;

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const result = await client.auth.post({email, password});
            console.warn('Result ', result);
            setCookie('authorization', result.token)
            let token = getCookie('authorization')
            console.log('TOKEN GERADO ', token)
        } catch(err) {
            console.log('Error no login. Error => ', err)
        }

    }


    return {dispatch, invalidCredentials, handleLogin, setEmail, email, setPassword, navigate}


}

export default useLogin;