import { Eye, EyeSlash, LockSimple, Warning } from "@phosphor-icons/react";
import { forwardRef, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { InputProps } from "./Input";


const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function (
    {
        label,
        placeholder,
        errorMessage,
        dataCy,
        className,
        inputClassName,
        pattern,
        maxLength = 32,
        ...rest
    },
    ref,
) {
    const [showingPassword, setShowingPassword] = useState<boolean>(false)
    const [inputType, setInputType] = useState<'password' | 'text'>('password');
    const inError = useMemo(() => !!errorMessage, [errorMessage]);

    const togglePasswordVisibility = () => {
        setShowingPassword(!showingPassword);
        setInputType(showingPassword ? 'password' : 'text');
    };

    return (
        <div className={twMerge("flex flex-col text-md items-start", className)}>
            {label && (
                /* Adicionar title*/
                <label className="text-gray-500 text-sm font-bold">{label}</label>
            )}
            <div className="relative w-full rounded-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                        <LockSimple />
                    </span>
                </div>
                <input
                    ref={ref}
                    type={inputType}
                    data-test={dataCy}
                    {...rest}
                    placeholder={placeholder}
                    aria-label={placeholder}
                    maxLength={maxLength}
                    className={twMerge(
                        `w-full h-10 border text-sm text-gray-700 rounded-lg dark:bg-blockDark  brightness-105 px-2 disabled:cursor-not-allowed focus:outline-0 ${inError
                            ? 'border-red-500 focus:border-red-500/70 dark:border-red-400 dark:focus:border-red-400/70'
                            : 'border-gray-500 hover:border-green-900   focus:outline-none focus:ring-[0.8px] focus:ring-green-300'
                        } `,
                        inputClassName,
                    )}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center ${inError && 'text-red-500 dark:text-red-400'
                        }`}
                >
                    {showingPassword ? <Eye /> : <EyeSlash />}
                </button>
            </div>
            {inError && (
                <span
                    className={
                        'flex items-center gap-2 px-1 py-1 text-sm font-medium text-red-500 dark:text-red-400'
                    }
                >
                    <Warning size={16} weight="bold" /> {errorMessage}
                </span>
            )}
        </div>
    )
})


export default PasswordInput;