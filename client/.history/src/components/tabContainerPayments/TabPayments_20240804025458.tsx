import Modal from "../modal/Modal";

export default function TabPayments() {
    return (

        <>
            <Modal isOpen={false} onClose={function (): void {
                throw new Error("Function not implemented.");
            }} />
            Tab Payment here to modal
        </>
    )
}