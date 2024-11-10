import { LockSimple } from "@phosphor-icons/react";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import client, { responseGenericApi } from "../../../src/service/client";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function ForgotPassword() {
    const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);
    const [requestResetPassword, setRequestResetPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>('');
    const navigate = useNavigate();


    const sendEmail = async (email: string) => {
        try {
            const response: responseGenericApi = await client.resetPassword.sendEmailReset(String(email));
            console.log(`response send email `, response);
            if(response.status) {
                setShowPasswordFields(true);
            } else  {
                toast.error('Erro ao enviar email')
                setShowPasswordFields(false);
            }
        }catch(err) {
            console.error(`Error sendEmail `, err)
        }
    }


    return (
        <div className="flex flex-col gap-2">
            <Toaster />
            <h1 className="text-3xl font-bold text-green-700 mb-2">Redefinir senha</h1>
            {!showPasswordFields ? (
                <label className="text-base font-medium mb-6 text-green-800/80 ">
                    Informe seu e-mail para obter um link de redefinição de senha.
                    Caso o email for válido, o sistema irá liberar os campos para configura a nova senha.
                </label>
            ) : (
                <label className="text-base font-medium mb-6 w-full">
                    Reset password credentials
                </label>
            )}

            <Input
                label="Email:"
                placeholder="Informe seu email"
                onChange={(e: any) => setEmail(String(e?.target?.value) || null)}
                errorMessage={true && ''}
            />

            {showPasswordFields && (
                <Fragment>
                    <PasswordInput
                        label="Nova senha:"
                        className="w-full"
                        placeholder="Informe sua nova senha"
                        icon={<LockSimple size={16} weight="bold" />}
                        errorMessage={true && ''}
                    />
                </Fragment>
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
                onClick={() => sendEmail(email as string)}
            />
        </div>

    );
}