import { twMerge } from "tailwind-merge";

interface GlobalTitleProps {
    title?: string;
    className?: string;
    classNameH1?: string;
}


function GlobalTile( {className, classNameH1, title}: GlobalTitleProps){
 return (
    <div className={twMerge("flex flex-col items-center font-medium text-green-700 text-[22px]", className)}>
        <h1 className={twMerge("mt-3  text-3xl font-bold  text-green-600", classNameH1)}>
          {title || 'Title Tab Here'}
        </h1>
      </div>
 )
}

export default GlobalTile;