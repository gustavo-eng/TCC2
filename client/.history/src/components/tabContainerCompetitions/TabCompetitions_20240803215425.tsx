

export default function TabCompetitions() {
    // CardAction
    return (
        <div className=" m-1 ">
            <div className="bg-white h-[40vh] w-[28vw] rounded-md ">
                <div className="p-1">
                    <img
                        src="src\assets\olimpicGame.webp"
                        alt="img"
                        className="rounded h-fit w-full"
                    />

                </div>
                <p className="ml-1 font-semibold text-sm ">Nome competicao</p>
                <div className="bg-gray-200">
                    <p className="text-xs mb-1">Data</p>
                    <p className="text-[10px]">
                        Cidade: Cornélio Procópio - Bairro: Conjunto União -
                        Rua: Dario Ribeiro de carvalho
                        Numero: 23
                    </p>
                </div>
                <div className="bg-gray-400">
                    Description
                </div>
            </div>
        </div>
    )
}