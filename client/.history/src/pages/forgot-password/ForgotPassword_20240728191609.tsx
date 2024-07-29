import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function ForgotPassword() {
    let showPasswordFields = false

    //todo ao clicar no botao aparecer os campos

    return (
        <>
            <h1 className="text-3xl font-bold text-green-700 mb-2">Redefinir senha</h1>
            {!showPasswordFields ? (
                <label className="text-base font-medium mb-6">
                    Preencha os campos
                </label>
            ) : (
                <label className="text-base font-medium mb-6">
                    Reset password credentials
                </label>
            )}

            <Input
                label="Email:"
                placeholder="Informe seu email"
                icon={<EnvelopeSimple size={16} weight="bold" />}
                errorMessage={true && ''}
            />

            {showPasswordFields && (
                <>
                    <PasswordInput
                        label="Nova senha:"
                        className="w-full"
                        placeholder="Informe sua nova senha"
                        icon={<LockSimple size={16} weight="bold" />}
                        errorMessage={true && ''}
                    />
                    <PasswordInput
                        label="Confirme sua senha:"
                        className="w-full mt-2"
                        placeholder="Informe sua nova senha"
                        icon={<LockSimple size={16} weight="bold" />}
                        errorMessage={true && ''}
                    />
                </>
            )}
        </>

    );
}