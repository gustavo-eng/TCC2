import { CloudArrowUp } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "../input/Input";


interface FileInputProps {
    label?: string;
    classNameForms?: string
}

export default function FileInput({
    label,
    classNameForms,
}: FileInputProps) {

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState<string | undefined | null>("No selected file");

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormClick = () => {
        if (inputRef?.current) inputRef?.current.click();
    }

    return (
        <div>
            {label && <label htmlFor="" className="text-gray-600 text-sm font-semibold" >{label} <span className="text-red-600">*</span></label>}
            <form action=""
                className={twMerge("bg-green-50 flex flex-col justify-center items-center h-[200px] rounded-md border-2 border-dashed cursor-pointer border-green-700", classNameForms)}
                onClick={handleFormClick}
            >
                <Input ref={inputRef} type="file" accept="image/*" className="input-field" hidden />
                {image ? <img src={image} width={100} height={100} alt={fileName?.toString()} /> :
                    <CloudArrowUp size={35} color="green" alt="Upload" />
                }
            </form>
        </div>
    )
}