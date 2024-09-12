import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "typescript-cookie";
import client from "../../service/client";
import { login } from '../../store/auth/authReducer';
import { AuthLogin, authLoginSchema } from "../../store/auth/authTypes";
import { AppDispatch } from "../../store/store";

function useLogin() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()

    let invalidCredentials = false;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AuthLogin>({
        resolver: zodResolver(authLoginSchema)
    })

    const onSubmit: SubmitHandler<AuthLogin> = async (data) => {
        try {
            const responseAuth = await dispatch(login(data)).unwrap();
            console.log('responseAuth ', responseAuth);


        } catch(err) {
            console.log(err)
        }
    }

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


    return {
        dispatch,
        invalidCredentials,
        handleLogin,
        setEmail,
        email,
        setPassword,
        navigate
    }


}

export default useLogin;
