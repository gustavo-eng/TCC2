import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    label?: string;
    onClick?: () => void;
    className?: string;
    props?: string;
}

export default function Button({
    label,
    onClick,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge("bg-green-600  text-white font-normal hover:bg-green-800", className)} onClick={onClick}>
            <span className={twMerge("text-md ")}>{label || "Submit"}</span>
        </button>
    )
}