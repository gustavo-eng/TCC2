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
            <div className="absolute inset-0 bg-black bg-opacity-55 pointer-events-none"></div>
            <img src={src} alt={alt || "Image"} className="w-full h-screen object-cover" />
            <div className="absolute transform top-1 px-8 text-white">
                {title && <h2 className="text-4xl font-semibold">{title}</h2>}
                {description && (
                    <p className="text-base font-base py-4">{description}</p>
                )}
            </div>
        </div>
    )
}


export default ImageLogin;