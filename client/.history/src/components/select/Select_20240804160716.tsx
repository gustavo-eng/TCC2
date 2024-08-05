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
        <div className={twMerge("bg-white mt-7 w-full", className)}>
            {label && (
                <label htmlFor={props.id} className="block mb-0 text-sm font-medium text-gray-600">
                    {label} {!isOptional && <span className="text-red-600"> *</span>}
                </label>
            )}
            <select
                className={twMerge("outline-none font-normal text-green-800 bg-gray-100 border border-green-700 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-full p-1.5 dark:focus:ring-green-500 dark:focus:border-green-600", classNameSelect)}
                {...props}
            >
                <option value="" disabled selected>
                    Choose a country
                </option>
                {options?.map(option => (
                    <option key={option.value} value={option.value} className="bg-green-700 ">
                        {option.label}
                    </option>
                ))}
            </select>

        </div>
    )

}

/*

import { CaretDown } from '@phosphor-icons/react';

export default function Select() {
    return (
        <div className="relative bg-white mt-7 w-[190px]">
            <label htmlFor="countries" className="block mb-0 text-sm font-medium text-gray-600">Select an option <span className='text-red-600'>*</span></label>
            <div className="relative">
                <select id="countries" className="appearance-none outline-none font-normal text-gray-600 bg-gray-100 border border-green-700 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-full p-1 pr-10 dark:focus:ring-green-500 dark:focus:border-green-600">
                    <option selected className='text-green-600 '>Choose a country</option>
                    <option value="US" className='text-green-600 '>United States</option>
                    <option value="CA" className='text-green-600 '>Canada</option>
                    <option value="FR" className='text-green-600 '>France</option>
                    <option value="DE" className='text-green-600 '>Germany</option>
                </select>
                <CaretDown className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none text-gray-600" size={15} />
            </div>
        </div>
    );
}
    */
