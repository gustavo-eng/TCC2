import { twMerge } from "tailwind-merge";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    isOptional?: boolean;
    className?: string;
    classNameSelect?: string;
    classNameOptions?: string;
    options?: { value: string | number; label?: string }[];
}

export default function Select({
    label,
    isOptional = true,
    options,
    className,
    classNameSelect,
    classNameOptions,
    ...props
}: SelectProps) {
    return (
        <div className={twMerge("bg-white mt-7 w-[12px]", className)}>
            {label && (
                <label htmlFor={props.id} className="block mb-0 text-sm font-medium text-gray-600">
                    {label} {!isOptional && <span className="text-red-600"> *</span>}
                </label>
            )}
            <select
                className={twMerge("outline-none font-normal text-gray-700 bg-gray-100 border border-green-700 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-full p-1.5 dark:focus:ring-green-500 dark:focus:border-green-600", classNameSelect)}
                {...props}
            >

                {options?.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-100">
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )

}
