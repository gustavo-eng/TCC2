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
            className={twMerge("bg-green-600 w-full h-5 lg:h-7 mb-1 mt-2 rounded text-white font-normal text-xs lg:text-sm hover:bg-green-800", className)} onClick={onClick}>
            {label || "Submit"}
        </button>
    )
}