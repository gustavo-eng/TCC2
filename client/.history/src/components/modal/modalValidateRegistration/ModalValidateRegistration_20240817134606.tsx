import Modal from "../Modal";
import { ModalProps } from "../types";


function ModalValidateRegistration({
    isOpen,
    onClose,
}:ModalProps, name: string) {
    console.log(name)
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
                    <span className="font-medium">Nome do aluno: Gustavo</span>
                    <span className="font-medium">Nome do aluno: Gustavo</span>
                </div>

             </div>
            </Modal>
        </div>
    )

}

export default ModalValidateRegistration;