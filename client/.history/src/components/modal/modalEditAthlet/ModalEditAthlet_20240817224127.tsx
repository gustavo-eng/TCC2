import Modal from "../Modal";

interface ModalEditAthletProps {
    isOpen: boolean;
    onClose: () => void;
}


function ModalEditAthlet({
    isOpen,
    onClose,
}:ModalEditAthletProps ) {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onClickOK={() => console.log('ok')}
                onClickCancel={() => console.log('Cancel')}
                textHeader="Cadastro da academia"
                hasFooter={true}
                labelBtnCancel="Cancelar"
                labelBtnOk="Cadastrar"
            >

            </Modal>
        </div>
    )
}

export default ModalEditAthlet;