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
                    <span className="font-medium space-x-2">Nome do aluno: Gustavo</span>
                    <div className="bg-gray-400">
                        <span className="font-medium">Genero</span>
                        <span className="font-medium">classe</span>
                        <span className="font-medium">categoria</span>
                    </div>
                </div>

             </div>
            </Modal>
        </div>
    )

}

export default ModalValidateRegistration;