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
    const [inputType, setInputType] = useState<string>('password');
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
                    f
                </div>
            </div>
        </div>
    )
})


export default PasswordInput;