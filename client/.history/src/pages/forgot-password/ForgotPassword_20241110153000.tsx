import { LockSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function ForgotPassword() {
    const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);
    const [requestResetPassword, setRequestResetPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>('');
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-2">
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
                onChange={(e: any) => setEmail(String(e?.target?.value) || null)}
                errorMessage={true && ''}
            />

            {!showPasswordFields && (
                <>
                    <PasswordInput
                        label="Nova senha:"
                        className="w-full"
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
                text={!showPasswordFields ?  'Enviar ' : 'Resetar senha'}
                loading={false}
                dataCy="reset-password-button"
                onClick={() => navigate('/login')}
            />
        </div>

    );
}