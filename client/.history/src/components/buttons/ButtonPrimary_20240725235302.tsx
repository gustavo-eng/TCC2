import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonColor?: string;
    className?: string;
    loading?: boolean;
    dataCy?: string;
}

type ConditionalProps =
    | {
        text: string;
        icon?: never;
        iconPosition?: never;
    }
    | {
        text: string;
        icon: React.ReactNode;
        iconPosition: 'left' | 'right';
    }
    | {
        text?: never;
        icon: React.ReactNode;
        iconPosition?: never;
    };

type ButtonProps = CommonProps & ConditionalProps;

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonProps>(function (
    {
        text,
        className,
        buttonColor = 'text-white bg-blue-500',
        icon,
        iconPosition,
        loading,
        disabled,
        dataCy,
        ...rest
    },
    ref,
) {

    return (
        <button
            ref={ref}
            {...rest}
            data-test={dataCy}
            disabled={disabled ?? loading}
            className={twMerge(
                `flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-base hover:brightness-90 focus:outline-none focus:brightness-90 ${disabled
                    ? 'cursor-not-allowed bg-blue-500/50'
                    : 'text-white bg-weg-1'
                } ${className}`,
                className,
            )}
        >
            {loading && (
                <>fdsa</>
            )}
            Component Button
        </button>
    )
})
