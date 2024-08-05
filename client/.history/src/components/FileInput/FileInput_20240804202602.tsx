import { ChangeEvent, useState } from "react";


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
                adsf
            </form>
        </div>
    )

}