import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAppSelector from '../../hooks/useAppSelector';
import { authClient, authSelector } from '../../store/auth/authReducer';
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
            // Dispara a ação de login e espera a resposta
            let result = await dispatch(authClient.login(data)).unwrap();
            console.log('dispatch(authClient.login(data)', result);

            // Exibe a notificação de sucesso
            toast.success('Autenticado com sucesso', { duration: 4000 });

            // Adiciona um atraso de 2 segundos antes de navegar
            setTimeout(() => {
                navigate('/');
            }, 2000); // 2000 milissegundos = 2 segundos

        } catch (err) {
            console.warn('error', err);
            toast.error('Credenciais Inválidas', { duration: 4000 });
        } finally {
            // Resetando o formulário (opcional, se desejado)
            reset();
        }
    };


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
