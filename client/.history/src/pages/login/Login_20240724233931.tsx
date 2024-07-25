
//todo Alterar esse codigo

import Input from "../../components/input/Input";

export default function Login() {

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
                <Input className="bg-red-500 placeholder:fasfasfasdf" />
            </form>
        </>
    )
}