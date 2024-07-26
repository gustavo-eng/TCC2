import { LockSimple } from "@phosphor-icons/react";
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
            {label && <h4>{label}</h4>}
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
            </div>
        </div>
    )
})


export default PasswordInput;