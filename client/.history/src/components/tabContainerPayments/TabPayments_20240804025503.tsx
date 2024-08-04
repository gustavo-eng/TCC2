import Modal from "../modal/Modal";

export default function TabPayments() {
    return (

        <>
            <Modal isOpen={true} onClose={function (): void {
                throw new Error("Function not implemented.");
            }} />
            Tab Payment here to modal
        </>
    )
}