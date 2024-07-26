import { forwardRef } from "react";

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
        >

        </button>
    )
})
