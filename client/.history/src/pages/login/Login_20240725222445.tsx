
//todo Alterar esse codigo

import { EnvelopeSimple, Warning } from "@phosphor-icons/react";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";

export default function Login() {

    // ================ useComponent ================
    let invalidCredentials = false;
    // ================ useComponent ================
    return (
        <>
            <div className="flex lg:flex-shrink-0 lg:w-2/3 justify-center items-center">
                <img
                    src='https://scontent.fbnu1-1.fna.fbcdn.net/v/t39.30808-6/326487997_455875243283526_5495169521508801798_n.png?stp=dst-png_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF7D_Gyyjexmxz2bUbb6mnHKij_RnBKVBQqKP9GcEpUFM5GZAFNxtODvnPUwBpXvJZKJSxHeIH1gFM5RKxjqGcg&_nc_ohc=s2bsUQS-AggQ7kNvgHhcY98&_nc_ht=scontent.fbnu1-1.fna&gid=AJ7-QBRAr64SrME4g6vAIW-&oh=00_AYDg5naYWODQW_Xkexh9eBWDiRfBJtHzD5Y5qrEq_KI0Tg&oe=66A8C501'
                //title="WEG Motion Fleet Management"
                //description={t('mfm_description')}
                //link={t('contact_us')}
                //url="https://www.weg.net/institutional/US/pt/contact/contact-us"
                />
            </div>
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


            </form>
        </>
    )
}