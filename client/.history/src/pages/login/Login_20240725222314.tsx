
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
            <div className="flex lg:flex-shrink-0 lg:w-2/3 justify-center items-center">
                <img
                    src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FFPRJUDO%2F&psig=AOvVaw2Hkzf6dQrWN9JtDSpdB2k0&ust=1722043348652000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODwnMLFw4cDFQAAAAAdAAAAABAE'
                //title="WEG Motion Fleet Management"
                //description={t('mfm_description')}
                //link={t('contact_us')}
                //url="https://www.weg.net/institutional/US/pt/contact/contact-us"
                />
            </div>
        </>
    )
}