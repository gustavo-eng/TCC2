import Modal from "../Modal";
import { ModalProps } from "../types";


function ModalValidateRegistration({
    isOpen,
    onClose,
}:ModalProps) {
    return (
        <div>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              onClickOK={() => console.log('Modal')}
              onClickCancel={() => console.log('Cancel')}
              textHeader=" Validar explicando "
              hasFooter
              labelBtnCancel="Cancelar"
              labelBtnOk="Salvar"
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
                <div className="bg-green-400 w-full h-[22vh] rounded-md">

                </div>
                <div>
                    <p className="space-x-3">Orientação</p>
                </div>
             </div>
            </Modal>
        </div>
    )

}

export default ModalValidateRegistration;