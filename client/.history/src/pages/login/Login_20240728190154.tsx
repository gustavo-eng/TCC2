
//todo Alterar esse codigo

import { EnvelopeSimple, Warning } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function Login() {
    const navigate = useNavigate();
    // ================ useComponent ================
    let invalidCredentials = false;
    // ================ useComponent ================
    return (
        <>
            <h1 className="text-4xl font-bold mb-1  text-green-700/80  w-full">Bem vindo</h1>
            <label className="text-base font-normal mb-6 w-full  text-center">
            </label>
            <form
                onSubmit={() => console.log('submit')}
                className="flex flex-col w-full gap-4"
            >
                <Input
                    label="Email"
                    type="text"
                    placeholder="Digite seu email"
                    icon={< EnvelopeSimple size={20} weight="light" />}
                    errorMessage={(!true) ? "Error" : ""}
                />

                <PasswordInput
                    label="Senha"
                    placeholder="**********"
                    className="mb-0"
                    errorMessage={(!true) ? "Error" : ""}
                />
                {invalidCredentials && (
                    <div className="flex">
                        <label className="flex items-center text-sm mx-1 gap-2 font-normal text-red-500">
                            <Warning size={23} weight="light" />
                        </label>
                    </div>
                )}

                <div className="flex justify-end">
                    <a
                        href="/login"
                        className="text-base font-semibold text-green-900 ms-1"
                    >
                        Esqueceu a senha?
                    </a>
                    <button
                        onClick={() => navigate("/create-account")}
                        className="text-base font-semibold ms-1 text-green-700"

                    >
                        Criar conta agora
                    </button>

                </div>

                <ButtonPrimary
                    // type="submit"
                    text={true ? 'Entrar' : 'continue'}
                    loading={false}

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