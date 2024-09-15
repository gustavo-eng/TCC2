import { CloudArrowUp, FileArrowDown, TrashSimple } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "../input/Input";

export interface FileType {
    applicationId?: string;
    authorId?: string;
    authorType?: string;
    contentType: string;
    creationDate?: Date;
    fileSize: number;
    id?: string;
    lastUpdated?: Date;
    name: string;
    parentDirectory?: string;
    status?: string;
    type?: string;
    url: string;
    _type?: string;
  }


interface FileInputProps {
    label?: string;
    classNameForms?: string;
    onFileDrop?: (file: FileType) => void;
}

export default function FileInput({
    label,
    classNameForms,
}: FileInputProps) {

    const [image, setImage] = useState<any>(null);
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
                <Input ref={inputRef}
                    type="file"
                    accept="image/*"
                    className="input-field" hidden
                    onChange={({ target: { files } }) => {
                        (files?.length || files) && setFileName(files[0].name)
                        if (files) {
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                />
                {image ?
                    <div className="w-full h-full flex flex-col items-center justify-center ">
                        <img src={image} height={100} alt={fileName?.toString()} className=" h-full p-1.5 pt-0" />
                    </div> :
                    <div className="flex flex-col items-center justify-center">
                        <CloudArrowUp size={35} color="green" alt="Upload" />
                        <p className="text-gray-500 "> Upload Voucher </p>
                    </div>
                }
            </form>
            <section
                className={`w-full flex flex-row justify-between  mt-1.5 p-1 rounded items-center ${image ? 'bg-blue-50' : 'bg-red-50'} `}>
                <div className="flex">
                    <FileArrowDown size={20} className={`${image ? 'text-blue-800' : 'text-red-600'}`} />
                    <span className="flex text-xs items-center">{fileName}</span>
                </div>
                <span className="flex flex-row items-center  ">
                    <TrashSimple
                        size={22}
                        className="cursor-pointer text-red-700 ml-2"

                        onClick={() => {
                            setFileName("No selected file");
                            setImage(null);
                        }} />
                </span>
            </section>

        </div>
    )
}