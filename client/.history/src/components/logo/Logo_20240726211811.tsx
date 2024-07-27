import { FC } from "react";

interface LogoProps {
    isGreen?: boolean;
    className?: string;
}

const Logo: FC<LogoProps> = ({ isGreen = false, className }) => {
    return (
        <div>

        </div>
    )
}

export default Logo;