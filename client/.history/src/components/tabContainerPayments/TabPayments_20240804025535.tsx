import Button from "../buttons/button";
import Modal from "../modal/Modal";
export default function TabPayments() {

    console.log(Button)


    return (

        <>
            <Modal isOpen={false} onClose={function (): void {
                throw new Error("Function not implemented.");
            }} />
            Tab Payment here to modal
        </>
    )
}