interface CardActionProps {
  name?: string;
  startDate?: string;
  startHour?: string;
  endDate?: string;
  endHour?: string;
  showAmount?: boolean;
  description?: string;
  type?: string;
  status?: string;
  idEvent?: string;
  street?: string;
  price?: string;
  city?: string;
  neighborhood?: string;
  titleButton?: string;
  btn?: boolean;
  onClick?: () => void | any;
  children?: React.ReactNode;
}

import { useEffect, useState } from "react";
import Button from "../buttons/button";

export default function CardAction({
  name,
  startDate,
  price,
  startHour,
  endDate,
  endHour,
  description,
  type,
  idEvent,
  street,
  city,
  titleButton,
  neighborhood,
  children,
  btn = true,
  onClick,
}: CardActionProps) {
  const [srcImg, setSrcImg] = useState<string>("");

  const detectImg = () => {
    if (
      name?.trim().toLowerCase().includes("bra") ||
      name?.trim().toLowerCase().includes("nac")
    ) {
      setSrcImg("src/assets/cbj2.png");
    } else if (
      name?.trim().toLowerCase().includes("mund") ||
      name?.trim().toLowerCase().includes("int") ||
      name?.trim().toLowerCase().includes("cir") ||
      name?.trim().toLowerCase().includes("ijf")
    ) {
      setSrcImg("src/assets/ijf.webp");
    } else {
      setSrcImg("src/assets/fprj.webp");
    }
  };

  useEffect(() => {
    detectImg();
  }, []);

  return (
    <>
      <div className="bg-white flex flex-col justify-between  lg:w-[16vw] h-fit rounded-md m-1 shadow pb-1 ">
        <div className="hidden" id={idEvent}>
          {idEvent}
        </div>

        <div className="hidden">{type}</div>
        <div className="lg:p-1 p-0 m-0  h-fit">
          <img
            src={srcImg}
            alt="img"
            style={{ width: "100%", height: "255px" }}
            //className="lg:rounded w-full h-[70%]"
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className=" font-semibold text-sm ml-1">
            {name || "Nome da competicao"}
          </p>
          <p className="text-green-600 font-bold">
            R$ {price || "0.00"}
          </p>
        </div>
        <p>fads</p>
        <div className="pr-1 pl-1">
          <div className="flex flex-col mb-2 justify-stretch">
            <p className="text-sm mb-0">
              Data de inicio: {startDate || "xx/xx/xxxx"} Horário:{" "}
              {startHour || "hh:mm:yyyy"}
            </p>
            {endDate && (
              <p className="text-sm mt-1">
                Data de Fim: {endDate || "xx/xx/xxxx"} Horário:{" "}
                {endHour || "hh:mm:yyyy"}{" "}
              </p>
            )}
          </div>
          <p className="lg:text-[12px] text-[8px]">
            Cidade: {city || "Not Informed"} - Bairro:{" "}
            {neighborhood || "Not informed"} - Rua: {street || "Not Informed"}
            Numero: 23
          </p>
        </div>
        {description != "" && description && (
          <div className=" pr-1 pl-1 w-full">
            <h1 className="font-semibold  text-xs lg:text-sm">Descrição</h1>
            <p className="break-words text-[9px] lg:text-sm">{description}</p>
          </div>
        )}
        {btn ? (
          <div className="pr-1 pl-1">
            <Button
              className="w-full h-7   rounded-md bg-green-500 hover:bg-green-600/90 text-white font-normal text-xs lg:text-sm mb-1 mt-2"
              label={titleButton}
              classNameLabel="text-xs lg:text-md"
              onClick={onClick}
            />
          </div>
        ) : (
          children
        )}
      </div>
    </>
  );
}
