
//todo Alterar esse codigo

import { EnvelopeSimple } from "@phosphor-icons/react";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function Login() {

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
                />

            </form>
        </>
    )
}