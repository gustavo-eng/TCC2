
//todo Alterar esse codigo

import { EnvelopeSimple, Warning } from "@phosphor-icons/react";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function Login() {

    // ================ useComponent ================
    let invalidCredentials = false;
    // ================ useComponent ================
    return (
        <>
            <h1 className="text-4xl mb-2">Bem Vindo</h1>
            <label className="text-base text-purple-900">
                Entre com suas credenciais
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
                </div>

                <ButtonPrimary


                />

            </form>
        </>
    )
}