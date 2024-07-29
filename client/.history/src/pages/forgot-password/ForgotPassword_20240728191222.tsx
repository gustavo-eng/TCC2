import { EnvelopeSimple } from "@phosphor-icons/react";
import Input from "../../components/input/Input";

export default function ForgotPassword() {
    let showPasswordFields = false

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
                errorMessage={!true && 'Error'}
            />
        </>

    );
}