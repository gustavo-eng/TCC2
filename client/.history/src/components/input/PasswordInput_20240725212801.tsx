import { forwardRef } from "react";
import { InputProps } from "./Input";


const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function ({ }) {


    return (
        <>Input password</>
    )
})


export default PasswordInput;