import { FC } from "react";

interface LogoProps {
    isGreen?: boolean;
    className?: string;
}

const Logo: FC<LogoProps> = ({ isGreen = false, className }) => {
    console.log(className)
    console.log(isGreen)
    return (
        <div>

        </div>
    )
}

export default Logo;