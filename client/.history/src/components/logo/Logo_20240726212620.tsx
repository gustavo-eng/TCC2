import { FC } from "react";

interface LogoProps {
    isGreen?: boolean;
    className?: string;
}

const Logo: FC<LogoProps> = ({ isGreen = false, className }) => {
    console.log(className)
    console.log(isGreen)
    return (~
        <div>
            <div className="flex items-center">
                <img
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