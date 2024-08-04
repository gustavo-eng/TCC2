import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    icon?: React.ReactNode;
    label?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    label,
    onClick,
    className,
}: ButtonProps) {
    return (
        <button
            className={twMerge("bg-green-600  text-white font-normal hover:bg-green-800", className)} onClick={onClick}>
            {label || "Submit"}
        </button>
    )
}