
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    dataCy?: string;
    label?: string;
    errorMessage?: string;
    className?: string;
    inputClassName?: string;
    icon?: ReactNode;
}

//todo adicionar component title
const Input = forwardRef<HTMLInputElement, InputProps>(function ({
    placeholder = "Escreva aqui",
    label,
    errorMessage,
    className,
    icon,
    dataCy,
    type = "text",
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
                )}
                <input
                    type={type}
                    data-cy={dataCy}
                    ref={ref}
                    placeholder={placeholder}
                    aria-label={placeholder}
                    maxLength={23}
                />
            </div>
        </div>
    )
})

export default Input;