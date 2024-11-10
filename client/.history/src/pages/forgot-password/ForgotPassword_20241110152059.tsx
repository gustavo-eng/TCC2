import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function ForgotPassword() {
    const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);
    const [requestResetPassword, setRequestResetPassword] = useState<boolean>(false);
    const navigate = useNavigate();
    //todo ao clicar no botao aparecer os campos

    return (
        <>
            <h1 className="text-3xl font-bold text-green-700 mb-2">Redefinir senha</h1>
            {!showPasswordFields ? (
                <label className="text-base font-medium mb-6">
                    Informe seu e-mail para obter um link de redefinição de senha
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

            {/*========= A FAZER =========*/}
            {requestResetPassword && (
                <div className="flex">
                    <label ></label>
                </div>
            )}
            <ButtonPrimary
                className="w-full h-9 rounded-md"
                type="submit"
                text={'Resetar senha'}
                loading={false}
                dataCy="reset-password-button"
                onClick={() => navigate('/login')}
            />
        </>

    );
}