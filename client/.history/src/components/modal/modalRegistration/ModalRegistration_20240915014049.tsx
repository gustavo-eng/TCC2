import FileInput from "../../FileInput/FileInput";
import Select from "../../select/Select";
import Modal from "../Modal";


interface ModalRegistrationProps {
    isOpen: boolean;
    nameCompetition?: string;
    startDate?: string;
    textHeader?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    onClose: () => void;
    description?: string;
    idEvent?: string;
    idPayment?: string  | number;
    idAthlete?: string  | number;
    idCategory?: string | number;
}



let mockData = [
    {idEvent: '1', nameCompetition: 'Evento de id 1'},
    {idEvent: '2', nameCompetition: 'Evento de id 2'},
];

function findEventById(mockData: any, id: any) {
    return mockData.find((event: { idEvent: any; }) => event.idEvent === id);
}

let result = findEventById(mockData, '2');
console.log(result); // {idEvent: '1', nameCompetition: 'Evento de id 1'}


export default function ModalRegistration({
    isOpen = false,
    nameCompetition = 'Nome da competicao',
    description,
    startDate,
    endDate,
    startTime,
    endTime,
    onClose,
    textHeader,
    idEvent,
}: ModalRegistrationProps) {

    if (!isOpen) return null;

    const startConversationOK = () => alert("CONVERSATION");

    const optionsClassCategory = [
        { value: '1', label: 'Senior' },
        { value: '2', label: 'Mirim' },
    ];

    const optionsGender = [
        { value: 'men', label: 'Masculino' },
        { value: 'woman', label: 'Feminino' },
    ];

    const optionsCategory = [
        { value: '1', label: '-55' },
        { value: '2', label: '-60' },
    ]





    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={startConversationOK}
                onClickCancel={onClose}
                textHeader= {textHeader || "Register"}
                hasFooter
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"
            >
                <div className=" w-full h-full p-1">
                    Id do evento {idEvent}
                    <div className="p-0.5">
                        <h1 className="text-gray-500 font-medium text-[18px] ">{findEventById(mockData, idEvent?.toString())?.nameCompetition || nameCompetition}</h1>
                    </div>
                    {startDate && (
                        <div className=" flex flex-row">
                            {/* Obrigatorio pois eh para competicao */}
                            {startDate && <div className="mr-10">Data inicio: {startDate} às {startTime} </div>}
                            {endDate && <div className="">Data fim: {endDate} às {endTime}</div>}
                        </div>
                    )}
                    {description && (
                        <div >
                            <h1 className="font-semibold text-gray-700">Descricao</h1>
                            <p className="text-[15px] break-words">
                                {description}
                            </p>
                        </div>
                    )}
                    <div className=" flex flex-col ">
                        <div className="">
                            <Select
                                id="gender"
                                name="gender"
                                options={optionsGender}
                                label="Sexo"
                                isOptional={false}
                                className="mt-2 "
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <Select
                                id="classCategory"
                                name="classCategory"
                                options={optionsClassCategory}
                                isOptional={false}
                                label="Selecione a classe"
                                className="mt-2"
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <Select
                                id="weight"
                                name="weight"
                                isOptional={false}
                                options={optionsCategory}
                                label="Categoria (Kg)"
                                className="mt-2"
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <div>
                            <FileInput label="Anexe o comprovante" />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

