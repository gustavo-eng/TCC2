import { useRef } from "react";
import { twMerge } from "tailwind-merge";


interface FileInputProps {
    label?: string;
    classNameForms?: string
}

export default function FileInput({
    label,
    classNameForms,
}: FileInputProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFormClick = () => {
        if (inputRef?.current) inputRef?.current.click();
    }

    return (
        <div>
            {label && <label htmlFor="" className="text-gray-600 text-sm font-semibold" >{label} <span className="text-red-600">*</span></label>}
            <form action=""
                className={twMerge("bg-gray-200 flex flex-col justify-center items-center h-[200px] rounded-md border-2 border-dashed cursor-pointer border-green-700", classNameForms)}
                onClick={handleFormClick}
            >
                <input type="file" accept="image/*" className="input-field" hidden />

            </form>
        </div>
    )
}