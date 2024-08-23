import React from 'react';
import Button from '../buttons/button';

interface CompetitionCardProps {
  name?: string;
  price?: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  description?: string;
  status?: 'Pendente' | 'Aprovado' | 'Rejeitado';
  onEdit: () => void;
  onRemove: () => void;
  idPayment?: string | number;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  name,
  price,
  startDate,
  endDate,
  startTime,
  endTime,
  city,
  neighborhood,
  street,
  number,
  status,
  description,
  onEdit,
  onRemove,
  idPayment,
}) => {
  return (
    <div className="bg-white flex flex-col justify-start w-[30vw] lg:w-[18vw] rounded-md m-1  h-fit p-1">
      <div id={idPayment?.toString()} className=''>Id:f {idPayment}</div>
      <div className="flex justify-between items-center w-full flex-wrap">
        <h3 className="font-bold text-md">{name}</h3>
        <span className="text-md font-bold">{price} R$</span>
      </div>
      <div className="text-sm text-gray-700">
        <p className="text-xs font-medium">
          Data início: {startDate} {startTime}
        </p>
        {endDate && (
          <p className="text-xs font-medium mt-1">
            Data fim: {endDate} {endTime}
          </p>
        )}
        <p className="text-xs mt-1">
          {city} • {neighborhood} • {street}, {number}
        </p>
      </div>
      <div className="mt-2 h-36">
        <img
          src="src\assets\olimpicGame.webp"
          alt="img"
          className="h-full w-full rounded"
        />
      </div>
      {status == 'Rejeitado' && description && (
        <div className="p-1  lg:h-fit">
          <h1 className="text-[10px] lg:text-sm font-normal">Descrição</h1>
          <p className="text-[8px] lg:text-xs break-words max-w-full">{description}</p>
        </div>
      )}
      <div className="flex justify-between items-end mt-4 h-fit flex-wrap">
        <div className="pl-1 mb-1.5">
          {status == 'Pendente' && (
            <span className="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-gray-400 border border-gray-500">
              {status}
            </span>
          )}
          {status == 'Rejeitado' && (
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-red-400 border border-red-400">
              {status}
            </span>
          )}
          {status == 'Aprovado' && (
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-green-400 border border-green-400 m-1">
              {status}
            </span>
          )}
        </div>
      </div>
      {status !== 'Aprovado' && (
        <div className="flex flex-col items-center justify-end p-1">
          <Button
            className="w-full h-7 rounded text-white font-normal text-xs lg:text-sm"
            classNameLabel="text-[14px]"
            label="Editar"
            onClick={onEdit}
          />
          <Button
            className="w-full h-7 m-1 bg-red-400 hover:bg-red-700 rounded text-white font-normal text-xs lg:text-sm"
            classNameLabel="text-[14px]"
            label="Remover"
            onClick={onRemove}
          />
        </div>
      )}
    </div>
  );
};

export default CompetitionCard;
