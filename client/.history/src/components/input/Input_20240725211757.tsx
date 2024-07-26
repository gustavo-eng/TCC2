
import { Warning } from "@phosphor-icons/react";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    dataCy?: string;
    maxLength?: number;
    label?: string;
    errorMessage?: string;
    className?: string;
    inputClassName?: string;
    icon?: ReactNode;
}

//todo adicionar component title
const Input = forwardRef<HTMLInputElement, InputProps>(function ({
    placeholder = "Escreva aqui",
    maxLength = 50,
    label,
    errorMessage,
    className,
    inputClassName,
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
                    {...rest}
                    ref={ref}
                    placeholder={placeholder}
                    aria-label={placeholder}
                    maxLength={maxLength}
                    className={twMerge(
                        `w-full h-10 border text-sm text-gray-700 rounded-lg dark:bg-blockDark  brightness-105 px-2 disabled:cursor-not-allowed focus:outline-0 ${errorMessage
                            ? 'border-red-500 focus:border-red-500/70 dark:border-red-400 dark:focus:border-red-400/70'
                            : 'border-gray-500 hover:border-green-900   focus:outline-none focus:ring-[0.8px] focus:ring-green-300'
                        } ${icon ? 'pl-10 pb-1' : ''}`,
                        inputClassName,
                    )}
                />
            </div>
            <span
                className={
                    'flex items-center gap-2 px-1 py-1 text-sm font-medium text-red-500 dark:text-red-400'
                }
            >fsaffasfd
                {errorMessage && (
                    <div>
                        <Warning size={16} weight="bold" /> {errorMessage}
                    </div>
                )}
            </span>
        </div>
    )
})

export default Input;