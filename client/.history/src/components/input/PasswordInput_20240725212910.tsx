import { forwardRef } from "react";
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
    FSADF
) {


    return (
        <>Input password</>
    )
})


export default PasswordInput;