import { useState } from "react";
import Modal from "../Modal";
import { ModalProps } from "../types";

function ModalValidateRegistration({
    isOpen,
    onClose,
    path
}:ModalProps) {

    const [loading, setLoading] = useState<boolean>(false);

    /*
    const {

    } = useForm()
    */
    return (
        <div>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              onClickOK={() => console.log('Modal')}
              onClickCancel={() => console.log('Cancel')}
              textHeader=" Validar explicando "
              hasFooter
              labelBtnCancel="Reprovar"
              labelBtnOk="Aprovar"
            >
             <div>
                <div className="w-full flex  flex-col p-1 ">
                    {/*Genero - Classe - Categoria  */}
                    <span className="font-medium">Nome do aluno: Gustavo</span>
                    <div className="flex flex-row justify-start mt-2">
                        <span className="font-medium mr-3">Genero</span>
                        <span className="font-medium mr-3">classe</span>
                        <span className="font-medium">categoria</span>
                    </div>
                </div>
                <span className="font-medium">Comprovante</span>
                <div className="bg-green-50 h-[35vh] rounded-md border-[1px] border-green-800 border-dashed flex justify-center">
                    <img
                    src={`http://localhost:3001/${path?.Athlet?.idAthlete}/${String(path?.voucherPath).split('\\').pop()}` || "src/assets/olimpicGame.webp"}
                    alt="img"
                        className="h-full w-full rounded"
                    />
                </div>
                <div className="">
                    <p className="mt-3 font-medium text-[17px]">Orientação</p>
                    <textarea className="w-full p-2  border-[1px] border-green-800 rounded-md"  rows={4} onChange={() => console.log('Change')}/>
                </div>
             </div>
            </Modal>
        </div>
    )
}

export default ModalValidateRegistration;