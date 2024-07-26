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
                        `w-full h-10 border rounded-lg pl-10 placeholder:text-gray-400 sm:text-sm disabled:cursor-not-allowed focus:outline-0 dark:bg-slate-500/30 ${inError
                            ? 'border-red-500 focus:border-red-500/70 dark:border-red-400 dark:focus:border-red-400/70'
                            : 'border-gray-500 hover:border-weg-1/80 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset'
                        }`,
                        inputClassName,
                    )}
                />
            </div>
        </div>
    )
})


export default PasswordInput;