

export default function TabCompetitions() {
    // CardAction
    return (
        <div className="m-1 ">
            <div className="bg-white flex flex-col justify-between  h-[40vh] w-[28vw] rounded-md ">
                <div className="p-1">
                    <img
                        src="src\assets\olimpicGame.webp"
                        alt="img"
                        className="rounded h-fit w-full"
                    />

                </div>
                <div>
                    <p className="pr-1 pl-1 font-semibold text-sm ">Nome competicao</p>
                </div>
                <div className="pr-1 pl-1">
                    <p className="text-xs mb-1">Data</p>
                    <p className="text-[10px]">
                        Cidade: Cornélio Procópio - Bairro: Conjunto União -
                        Rua: Dario Ribeiro de carvalho
                        Numero: 23
                    </p>
                </div>
                <div className=" w-full">
                    <h1 className="text-sm font-semibold">Description</h1>
                    <p className="break-words text-sm">
                        fffffffffffffffffsafasfsdfafajfifffasodjfojfojaklf
                        fffffffffffffffffsafasfsdfafajfifffasodjfojfojaklf
                        fffffffffffffffffsafasfsdfafajfifffasodjfojfojaklf
                    </p>
                </div>
                <div className="pr-1 pl-1">
                    <button className="bg-green-600 w-full mb-1 rounded text-white font-normal text-sm hover:bg-green-800 ">
                        Ver inscricoes
                    </button>
                </div>
            </div>
        </div>

    )
}