import React, { useState } from "react";
export default function Login() {
    const [typeUser, setTypeUsar] = useState("user");

    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-48 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/*
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                */}
                <img className="mx-auto h-30 w-auto" src="https://static.wixstatic.com/media/5b4b97_a2e5c36cfd584f3aa512ad8b07f30727~mv2.png/v1/fill/w_83,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NOVVA%20LOGO%20COM%20EFEITO%20SEM%20SOMBRA.png" alt="Your Company" />
                {/*<h2 className="mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900">Login</h2> */}
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* Tirar este action e executar uma funcao externa a aplicacao */}
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-600">Email</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600">Senha</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-green-900 hover:text-green-900">Esqueceu senha ?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                    </div>

                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Não possui conta:
                    {/* Adicionar aqui a rota para a rota especifica daquele cliente ou posso generalizar*/}
                    <a href="#" className="font-semibold leading-6 text-blue-800"> Cadastrar </a>
                </p>
            </div>
        </div>

    );


}
