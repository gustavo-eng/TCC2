import { FC } from "react";

interface LogoProps {
    isGreen?: boolean;
    className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
    console.log(className)

    return (~
        <div className={className}>
            <div className="flex items-center">
                <img
                    src={'f'}
                />
                <div>
                    <strong className="text-lg">FPRJ</strong>
                    <span className="text-sm whitespace-nowrap">Paraná Judô</span>
                </div>
            </div>
        </div>
    )
}

export default Logo;