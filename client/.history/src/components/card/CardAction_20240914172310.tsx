
interface CardActionProps {
    name?: string;
    startDate?: string;
    startHour?: string;
    endDate?: string;
    endHour?: string;
    description?: string;
    type?: string;
    status?: string;
    idEvent?: string;
    street?: string;
    city?: string;
    neighborhood?: string;
    titleButton?: string;
    btn?: boolean;
    onClick?: () => void | any;
    children?: React.ReactNode
}

let mockData = [
    {id: 1, name: 'Brasileiro'},
    {id: 1, name: 'Paranaense'},
]


import Button from "../buttons/button";

export default function CardAction({
    name,
    startDate,
    startHour,
    endDate,
    endHour,
    description,
    type,
    idEvent,
    street,
    city,
    titleButton,
    neighborhood,
    children,
    btn = true,
    onClick

}: CardActionProps) {


    return (
        <>
            <div className="bg-white flex flex-col justify-between  lg:w-[16vw] rounded-md m-1 shadow pb-1 ">
                <div className="hidden" id={idEvent} >{idEvent}</div>
                <div className="hidden" >{type}</div>
                <div className="lg:p-1 p-0">
                    <img
                        src="src\assets\olimpicGame.webp"
                        alt="img"
                        className="lg:rounded "
                    />
                </div>
                <div>
                    <p className=" font-semibold text-sm ml-1">{name || "Nome da competicao"}</p>
                </div>
                <div className="pr-1 pl-1">
                    <div className="flex flex-col mb-2 justify-stretch">
                        <p className="text-xs mb-0">Data de inicio: {startDate || "xx/xx/xxxx"} Horário: {startHour || "hh:mm:yyyy"}</p>
                        {endDate && <p className="text-xs mt-1">Data de Fim: {endDate || "xx/xx/xxxx"} Horário: {endHour || "hh:mm:yyyy"} </p>}
                    </div>
                    <p className="lg:text-[10px] text-[8px]">
                        Cidade: {city || 'Not Informed'} - Bairro: {neighborhood || 'Not informed'} -
                        Rua: {street || 'Not Informed'}
                        Numero: 23
                    </p>
                </div>
                {description != "" && description && (
                    <div className=" pr-1 pl-1 w-full">
                        <h1 className="font-semibold  text-xs lg:text-sm">Descrição</h1>
                        <p className="break-words text-[9px] lg:text-sm" >
                            {description}
                        </p>
                    </div>
                )}
                {btn ? (
                    <div className="pr-1 pl-1">
                        <Button
                            className="w-full h-7   rounded-md bg-green-500 hover:bg-green-600/90 text-white font-normal text-xs lg:text-sm mb-1 mt-2"
                            label={titleButton}
                            classNameLabel="text-xs lg:text-md"
                            onClick={onClick}
                        />
                    </div>
                ) : children}
            </div>
        </>
    )
}