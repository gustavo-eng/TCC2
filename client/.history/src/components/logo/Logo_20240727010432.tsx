import { FC } from "react";
import { twMerge } from "tailwind-merge";
import LogoFPRJ from '../../assets/logoFPRJ.webp';

interface LogoProps {
    isGreen?: boolean;
    className?: string;
    classNameImg?: string;
    description?: boolean;
}

const Logo: FC<LogoProps> = ({ className, classNameImg, description = false }) => {
    console.log(className)

    return (
        <div className={""}>
            <div className="flex flex-row items-center justify-center ">
                <img
                    src={LogoFPRJ}
                    alt="Logo FPRJ"
                    className={twMerge("w-20 h-20", classNameImg)}
                />
                {description &&
                    <div className="flex flex-col m-2 text-green-800">
                        <strong className="text-lg">FPRJ</strong>
                        <span className="text-sm whitespace-nowrap">Paraná Judô</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Logo;