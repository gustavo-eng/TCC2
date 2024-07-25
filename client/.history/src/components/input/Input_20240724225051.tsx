
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    className?: string;
}


const Input = forwardRef<HTMLInputElement, InputProps>(function () {

    return (
        <>Input</>
    )
})

export default Input;