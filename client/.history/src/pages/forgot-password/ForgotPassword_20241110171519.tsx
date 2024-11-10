import { LockSimple } from "@phosphor-icons/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import client, { responseGenericApi } from "../../../src/service/client";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function ForgotPassword() {

    const { resetToken } = useParams();
    const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>('');
    const [newPassword, setNewPassword] = useState<string | null>(null);
    const navigate = useNavigate();
    const [errorPassword, setErrorPassword] = useState<string | null>(null);
    const sendEmail = async (email: string) => {
        try {
            const response: responseGenericApi = await client.resetPassword.sendEmailReset(String(email));
            if(response.status) {
                if(!response.payload.token)  {
                    toast.error('Não foi gerado um token correto')
                }else {
                    setShowPasswordFields(true);
                }
            } else  {
                toast.error('Erro ao enviar email')
                setShowPasswordFields(false);
            }
        }catch(err) {
            console.error(`Error sendEmail `, err)
        }
    }

    const changePassword = async () => {
        if(!newPassword || newPassword.length < 5){
            if(!newPassword) setErrorPassword('Deve inserir uma senha. ');
            if(newPassword && newPassword.length < 5) setErrorPassword('A senha deve conter no mínimo 5 caracteres. ');
        }else{
            if(resetToken) {
                const response = await client.resetPassword.resetPassord(String(resetToken), String(newPassword))
                if(response.status) {
                    navigate('/login');
                } else {
                    toast.error('Erro ao resetar senha. ')
                }
            }else {
                toast.error('Esta faltando token para resetar senha')
            }
        }
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
                        onChange={(e: any) => setNewPassword(String(e?.target?.value) || null)}
                        errorMessage={true && 'fdasfaf'}
                    />
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