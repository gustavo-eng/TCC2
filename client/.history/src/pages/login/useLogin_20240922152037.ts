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
            if(result.status) {
                toast.success('Autenticado com sucesso', { duration: 4000 });
            }
            // Exibe a notificação de sucesso

            // Adiciona um atraso de 2 segundos antes de navegar
            setTimeout(() => {
                navigate('/');
            }, 2000); // 2000 milissegundos = 2 segundos

        } catch (err) {
            console.warn('error', err);
            toast.error('Credenciais Inválidas', { duration: 4000 });
        } finally {
            // Resetando o formulário (opcional, se desejado)
          //  reset();
        }
    };

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
