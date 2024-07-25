
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    className?: string;
    icon?: ReactNode;
}

//todo adicionar component title
const Input = forwardRef<HTMLInputElement, InputProps>(function ({
    placeholder,
    label,
    errorMessage,
    className,
    icon,
    ...rest // resto dos atributos que vai no input
}, ref) {

    return (
        <div className={twMerge('flex flex-col text-md items-start w-full', className)}>
            {label && (
                /* Adicionar title*/
                <label className="text-gray-500 text-sm">{label}</label>
            )}
            <div className="relative w-full rounded-md">
                {icon && (
                    <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3 z-10">
                        <span className="text-gray-500 sm:text-sm">{icon}</span>
                    </div>
                )}fadsfdafffffffffff
            </div>
        </div>
    )
})

export default Input;