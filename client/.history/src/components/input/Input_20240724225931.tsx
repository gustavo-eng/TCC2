
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    className?: string;
    icon?: ReactNode;
}

//todo adicionar title
const Input = forwardRef<HTMLInputElement, InputProps>(function ({
    placeholder,
    label,
    errorMessage,
    className,
    icon,
    ...props
}, ref) {

    return (
        <div className={twMerge('flex flex-col text-md items-start w-full', className)}>
            {label && (
                /* Adicionar title*/
                <label className="text-gray-500 text-sm">{label}</label>
            )}
            <div className="relative w-full rounded-md">
                {icon && (
                    <div>asfdsa</div>
                )}
            </div>
        </div>
    )
})

export default Input;