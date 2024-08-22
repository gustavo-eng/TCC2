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
            >

            </Modal>
        </div>
    )
}

export default ModalEditAthlet;