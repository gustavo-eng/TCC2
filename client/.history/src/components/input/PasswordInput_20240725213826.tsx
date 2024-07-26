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

        </div>
    )
})


export default PasswordInput;