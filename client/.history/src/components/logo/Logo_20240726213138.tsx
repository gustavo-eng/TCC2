import { FC } from "react";
import LogoFPRJ from '../../assets/logoFPRJ.webp';

interface LogoProps {
    isGreen?: boolean;
    className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
    console.log(className)

    return (
        <div className={className}>
            <div className="flex items-center">
                <img
                    src={LogoFPRJ}
                    alt="Logo FPRJ"
                    className="w-20 h-20"
                />
                <div className="flex flex-col m-2 text-green-800">
                    <strong className="text-lg">FPRJ</strong>
                    <span className="text-sm whitespace-nowrap">Paraná Judô</span>
                </div>
            </div>
        </div>
    )
}

export default Logo;