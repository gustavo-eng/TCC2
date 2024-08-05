import { twMerge } from "tailwind-merge";


interface FileInputProps {
    label?: string;
    classNameForms?: string
}

export default function FileInput({
    label,
    classNameForms,
}: FileInputProps) {
    return (
        <div>
            {label && <label htmlFor="" className="text-gray-600 text-sm font-semibold" >{label} <span className="text-red-600">*</span></label>}
            <form action=""
                className={twMerge("bg-gray-200 flex flex-col justify-center items-center h-[200px] rounded-md border-2 border-dashed cursor-pointer border-green-700", classNameForms)}
                onClick={() => alert('Forms FileInput')}
            >
                <input type="file" accept="image/*" />

            </form>
        </div>
    )

}