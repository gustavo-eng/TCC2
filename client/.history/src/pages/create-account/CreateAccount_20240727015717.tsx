import { EnvelopeSimple } from "@phosphor-icons/react";


export default function CreateAccount() {
    return (
        <>
            <h2 className="text-3xl font-bold my-2 text-green-700">Criar Conta</h2>
            <label className="text-base font-medium mb-6">Preencha os campos necessarios para criar sua conta</label>
            <form
                onSubmit={() => console.log('submit create-account')}
                className="flex flex-col w-full gap-4"
            >
                <Input
                    label="Email"
                    type="text"
                    placeholder="Digite seu email"
                    icon={< EnvelopeSimple size={20} weight="light" />}
                    errorMessage={(!true) ? "Error" : ""}
                />

            </form>
        </>
    )
}