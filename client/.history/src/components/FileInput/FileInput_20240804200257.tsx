import { InputHTMLAttributes, useState } from "react";

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


interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    optional?: boolean;
    label?: string;
    onFileDrop?: (file: FileType) => void;
}

export default function FileInput({
    optional = true,
    label = 'Select a file',
    onFileDrop
}: FileInputProps) {
    console.log(optional, label, onFileDrop)

    const [file, setFile] = useState<any>(null);
    return (
        <div>
            file herefas
        </div>
    )
}