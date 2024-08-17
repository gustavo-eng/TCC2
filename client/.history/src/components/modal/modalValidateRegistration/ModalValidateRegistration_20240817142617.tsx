import comprovante from '../../../images/comprovante.jpeg';
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
                <span className="font-medium">Comprovante</span>
                <div className="bg-green-200 w-full h-[22vh] rounded-md border-dashed flex justify-center">
                    <img src={comprovante} className='h-full '/>
                </div>
                <div className="">
                    <p className="mt-3 font-medium text-[17px]">Orientação</p>
                    <textarea className="w-full   border-[1px] border-green-800 rounded-md"  rows={4}/>
                </div>
             </div>
            </Modal>
        </div>
    )

}

export default ModalValidateRegistration;