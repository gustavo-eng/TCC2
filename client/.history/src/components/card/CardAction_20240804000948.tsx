
interface CardActionProps {
    name?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    type?: string;
    status?: string;
    id?: string;
    street?: string;
    city?: string;
    titleButton?: string;
}

export default function CardAction({
    name,
    startDate,
    endDate,
    description,
    type,
    status,
    id,
    street,
    city,
    titleButton,

}: CardActionProps) {
    return (
        <>
            <div className="bg-white flex flex-col  w-[30vw] lg:w-[18vw] rounded-md m-1 shadow">
                <div className="lg:p-1 p-0">
                    <img
                        src="src\assets\olimpicGame.webp"
                        alt="img"
                        className="lg:rounded "
                    />
                </div>
                <div>
                    <p className=" font-semibold text-sm ">Nome competicao</p>
                </div>
                <div className="pr-1 pl-1">
                    <p className="text-xs mb-1">Data</p>
                    <p className="lg:text-[10px] text-[8px]">
                        Cidade: Cornélio Procópio - Bairro: Conjunto União -
                        Rua: Dario Ribeiro de carvalho
                        Numero: 23
                    </p>
                </div>
                {(description != "") && (
                    <div className=" pr-1 pl-1 w-full">
                        <h1 className="font-semibold  text-xs lg:text-sm">Description</h1>
                        <p className="break-words text-[9px] lg:text-sm">
                            {description || "No description"}

                        </p>
                    </div>
                )}
                <div className="pr-1 pl-1">
                    <button className="bg-green-600 w-full h-5 lg:h-7 mb-1 mt-2 rounded text-white font-normal text-xs lg:text-sm hover:bg-green-800 ">
                        Ver inscricoes
                    </button>
                </div>
            </div>
        </>
    )
}