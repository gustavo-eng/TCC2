import { FC } from "react";

interface ImageLoginProps {
    src?: string;
    title?: string;
    alt?: string;
    description?: string;
    url?: string;
    link?: string;
}

const ImageLogin: FC<ImageLoginProps> = ({
    src,
    title,
    alt,
    description,
    url,
    link
}) => {
    console.log(src, title, alt, description, url, link)
    return (
        <div className="hidden lg:block relative w-full">
            <div className="absolute inset-0 bg-black bg-opacity-55 pointer-events-none">

            </div>

        </div>
    )
}


export default ImageLogin;