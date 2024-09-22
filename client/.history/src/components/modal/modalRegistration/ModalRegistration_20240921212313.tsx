import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getSession } from "../../../lib/axios";
import client from "../../../service/client";
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
    idPayment?: string | number;
    idAthlete?: string | number;
    idCategory?: string | number;
}

let mockData = [
    { idEvent: '1', nameCompetition: 'Evento de id 1' },
    { idEvent: '2', nameCompetition: 'Evento de id 2' },
];

function findEventById(mockData: any, id: any) {
    return mockData.find((event: { idEvent: any; }) => event.idEvent === id);
}

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
    idPayment
}: ModalRegistrationProps) {
    const [classCategory, setClassCategory] = useState<string | undefined>();
    const [gender, setGender] = useState<string | undefined>();
    const [category, setCategory] = useState<string | undefined>();
    const [file, setFile] = useState<any>(null);
    const user: any = getSession('user');

    if (!isOpen) {
        return null;
    }

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
    ];

    const handleRegistration = async () => {
        const formData = new FormData();
        formData.append('idAthlete', user?.idAthlete);
        formData.append('idEvent', idEvent as any);
        formData.append('idCategory', category as any);
        formData.append('file', file);

        client.payments.post(formData).then(el => {
            if (el?.status) {
                toast.success('Inscrição enviada com sucesso', { duration: 4000 });
            } else {
                toast.error('Erro ao enviar inscrição', { duration: 4000 });
            }
        }).catch(() => toast.error('Erro ao enviar inscrição', { duration: 4000 }));
    };

    return (
        <>
            <Toaster />
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={handleRegistration}
                onClickCancel={onClose}
                textHeader={textHeader || "Register"}
                hasFooter
                labelBtnCancel="Cancelar"
                labelBtnOk="Salvar"
            >
                <div className="w-full h-full p-1">
                    <div className="p-0.5">
                        <h1 className="text-gray-500 font-medium text-[18px] ">
                            {findEventById(mockData, idEvent?.toString())?.nameCompetition || nameCompetition}
                        </h1>
                    </div>
                    {startDate && (
                        <div className="flex flex-row">
                            {startDate && <div className="mr-10">Data inicio: {startDate} às {startTime}</div>}
                            {endDate && <div className="">Data fim: {endDate} às {endTime}</div>}
                        </div>
                    )}
                    {description && (
                        <div>
                            <h1 className="font-semibold text-gray-700">Descricao</h1>
                            <p className="text-[15px] break-words">
                                {description}
                            </p>
                        </div>
                    )}
                    <div className="flex flex-col">
                        <Select
                            id="gender"
                            name="gender"
                            options={optionsGender}
                            label="Sexo"
                            isOptional={false}
                            className="mt-2"
                            onChange={(e) => {
                                const value = e?.target?.value;
                                setGender(value);
                                if (!value) {
                                    setClassCategory(undefined);
                                    setCategory(undefined);
                                }
                            }}
                            disabled={false}
                        />
                        <Select
                            id="classCategory"
                            name="classCategory"
                            options={optionsClassCategory}
                            isOptional={false}
                            label="Selecione a classe"
                            className="mt-2"
                            onChange={(e) => {
                                const value = e.target.value;
                                setClassCategory(value);
                                if (!value) {
                                    setCategory(undefined);
                                }
                            }}
                            disabled={!gender} // Desabilita se o gênero não estiver selecionado
                        />
                        <Select
                            id="weight"
                            name="weight"
                            options={optionsCategory}
                            label="Categoria (Kg)"
                            className="mt-2"
                            onChange={(e) => setCategory(e?.target?.value)}
                            disabled={!classCategory} // Desabilita se a classe não estiver selecionada
                        />
                    </div>
                    <div className="mt-2 ">
                        <FileInput label="Anexe o comprovante" onFileDrop={setFile} />
                    </div>
                </div>
            </Modal>
        </>
    );
}
