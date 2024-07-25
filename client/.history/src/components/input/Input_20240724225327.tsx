
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    className?: string;
    icon?: ReactNode;
}


const Input = forwardRef<HTMLInputElement, InputProps>(function ({
    placeholder,
    label,
    errorMessage,
    className,
    ...props
}, ref) {

    return (
        <div className={twMerge('flex flex-col text-md items-start w-full', className)}>
            {label && (
                <label className="text-gray-500 text-sm">{label}</label>
            )}
        </div>
    )
})

export default Input;