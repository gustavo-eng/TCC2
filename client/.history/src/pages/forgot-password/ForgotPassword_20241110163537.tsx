import { LockSimple } from "@phosphor-icons/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import client, { responseGenericApi } from "../../../src/service/client";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function ForgotPassword() {

    const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);
    const [requestResetPassword, setRequestResetPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>('');
    const [resetToken, setResetToken] = useState<string | null>(null);
    //const navigate = useNavigate();


    const sendEmail = async (email: string) => {
        try {
            const response: responseGenericApi = await client.resetPassword.sendEmailReset(String(email));
            if(response.status) {
                if(!response.payload.token)  {
                    toast.error('Não foi gerado um token correto')
                }else {
                    setShowPasswordFields(true);
                    setResetToken(response.payload.token as string || null);
                }
            } else  {
                toast.error('Erro ao enviar email')
                setShowPasswordFields(false);
            }
        }catch(err) {
            console.error(`Error sendEmail `, err)
        }
    }

    const changePassword = () => {
        console.log(' Function changePassword() ');
    }


    return (
        <div className="flex flex-col gap-2 w-full">
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
                <div className="">
                    <PasswordInput
                        label="Nova senha:"
                        className="w-full"
                        placeholder="Informe sua nova senha"
                        icon={<LockSimple size={16} weight="bold" />}
                        errorMessage={true && ''}
                    />
                </div>
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
                onClick={() => !showPasswordFields ? sendEmail(email as string) : changePassword()}
            />
        </div>

    );
}