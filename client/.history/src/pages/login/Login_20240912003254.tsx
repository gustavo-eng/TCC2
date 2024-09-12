
//todo Alterar esse codigo

import { Toaster } from "react-hot-toast";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import useLogin from "./useLogin";


export default function Login() {

    const {

        navigate,
        register,
        handleSubmit,
        loading,
        errors,
        onSubmit,
    } = useLogin();



    return (
        <>
            <h1 className="text-4xl font-bold mb-4  text-green-700/80  w-full">Bem vindo</h1>
            <Toaster position="bottom-center" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-4"
            >
                <Input
                    label="Email"
                    type="text"
                    placeholder="Digite seu email"
                    //onChange={(e) => setEmail(e.target.value)}
                    errorMessage={errors.email?.message && errors.password?.message}
                    {...register('email')}
                />

                <PasswordInput
                    label="Senha"
                    placeholder="**********"
                    className="mb-0"
                    //onChange={(e) => setPassword(e.target.value)}
                    errorMessage={errors.password?.message &&errors.password?.message }
                    {...register('password')}
                />



                <div className="flex justify-end">
                    <button
                        onClick={() => navigate("/forgot-password")}
                        className="text-base font-semibold text-green-900 ms-1"

                    >
                        Esqueceu a senha?
                    </button>

                </div>
                <ButtonPrimary
                    type="submit"
                    text={true ? 'Entrar' : 'continue'}
                    loading={loading}
                />
            </form>
            <div className="flex w-full justify-center mt-6">
                <label className="text-base font-semibold text-gray-600">
                    Não tem conta?
                </label>

                <button
                    onClick={() => navigate("/create-account")}
                    className="text-base font-semibold ms-1 text-green-700"

                >
                    Criar conta agora
                </button>

            </div>
        </>
    )
}