import { useState } from "react";
import Button from "../buttons/button";

export default function TabTestModal() {

    const [isModalEventOpen, setModalEventOpen] = useState(false);
    const openModalEvent = () => setModalEventOpen(true);
    const closeModalEvent = () => setModalEventOpen(false);

    return (
        <div>
            <Button label="Modal Registration Event"  onClick={openModalEvent} />
        </div>
    )
}