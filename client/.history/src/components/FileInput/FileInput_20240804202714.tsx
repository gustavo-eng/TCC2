import { ChangeEvent, useState } from "react";
import Input from "../input/Input";


export default function FileInput() {


    const [file, setFile] = useState<any>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files.length) return;
        const inputedFile = e.target.files[0];
        //todo Terminar
    }


    const handleFileRemove = () => {
        setFile(null);
    };


    return (
        <div>
            <form action="">
                <Input type="file" accept="image/*" className="bg-red-400" />
                <input type="file" accept="image/*" />
            </form>
        </div>
    )

}