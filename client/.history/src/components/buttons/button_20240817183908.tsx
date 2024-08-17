import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    label?: string;
    className?: string;
    classNameLabel?: string;
    props?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function Button({
    label,
    onClick,
    className,
    classNameLabel,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge("bg-green-600  text-white font-normal hover:bg-green-800", className)} onClick={onClick}>
            <span className={twMerge("text-sm", classNameLabel)}>{label || "Submit"}</span>
            {children}

        </button>
    )
}