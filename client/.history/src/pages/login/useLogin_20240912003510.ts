import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCookie } from 'typescript-cookie';
import useAppSelector from '../../hooks/useAppSelector';
import { authSelector, login } from '../../store/auth/authReducer';
import { AuthLogin, authLoginSchema } from "../../store/auth/authTypes";
import { AppDispatch } from "../../store/store";

function useLogin() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [invalidCredentials, setInvalidCredentials] = useState(false);


    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {user, loading} = useAppSelector(authSelector);

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
            console.warn('responseAuth ', responseAuth)
            setCookie(responseAuth.token);
            toast.success('Autenticado com sucesso', {duration: 4000})
        } catch(err) {
            console.warn('errror ', err)
            toast.error('Credenciais Inválidas', {duration: 4000})
        } finally {
            //reset();
        }
    }

    //Utilizado apenas levar o usuario automaticamente para rota /
    /*
    useEffect(() => {
        const handleAuthentication = async () => {
            try {
                if(user) {
                    console.log('user ', user);
                    //navigate('/');
                    return;
                }
                const token = getCookie('authorization');

                if(!token && !loading) {
                    dispatch(login({ token }))
                }
            }catch(err) {
                console.error('Error during authentication:', err);
            }
        };

        handleAuthentication();
    }, [dispatch, loading, navigate, user]);
    */

    /*
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const result = await client.auth.post({email, password});
            console.warn('Result ', result);
            setCookie('authorization', result.token)
            let token = getCookie('authorization')
            console.log('TOKEN GERADO ', token)
        } catch(err) {
            setInvalidCredentials(true);
            setTimeout(() => {
              setInvalidCredentials(false);
            }, 25000);
            navigate('/login')
            console.log('Error no login. Error => ', err)
        }

    }
    */


    return {
        dispatch,
        invalidCredentials,

        setEmail,
        email,
        setPassword,
        register,
        handleSubmit,
        onSubmit,
        loading,
        user,
        errors,
        reset,
        navigate
    }


}

export default useLogin;
