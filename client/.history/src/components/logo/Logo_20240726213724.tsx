import { FC } from "react";
import { twMerge } from "tailwind-merge";
import LogoFPRJ from '../../assets/logoFPRJ.webp';

interface LogoProps {
    isGreen?: boolean;
    className?: string;
    classNameImg?: string;
}

const Logo: FC<LogoProps> = ({ className, classNameImg }) => {
    console.log(className)

    return (
        <div className={className}>
            <div className="flex items-center">
                <img
                    src={LogoFPRJ}
                    alt="Logo FPRJ"
                    className={twMerge("w-20 h-20", classNameImg)}
                />


            </div>
        </div>
    )
}

export default Logo;