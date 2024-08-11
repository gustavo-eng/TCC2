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
}) => {
  return (
    <div className=" bg-gray-100 rounded shadow-lg w-[20vw] m-1 flex flex-col ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-md ml-1">{name}</h3>
        <span className="text-md font-bold mr-1">{price} R$</span>
      </div>
      <div className="text-sm text-gray-700 ">
        <p className='bg-gray-200 text-xs font-medium'>
            Data início: {startDate} {startTime}
        </p>
        {endDate && (
            <p className='bg-gray-200 text-xs font-medium mt-1'>
                Data fim: {endDate} {endTime}
            </p>
        )}
        <p className='text-xs mt-1'>
          {city} • {neighborhood} • {street}, {number}
        </p>
      </div>
      <div className="bg-gray-300 mt-2 h-36">
        <img
            src="src\assets\olimpicGame.webp"
            alt="img"
            className=" h-full w-full"
        />
      </div>
      { /* Alterar apenas a cor da borda */ }
      {/* Description here */}
    {status == 'Rejeitado' && description && (
      <div className='p-1 w-[150px] bg-slate-500'>
            <h1 className='text-sm font-normal'>Descrição</h1>
            <p className='text-xs break-words max-w-full'>{description}</p>
      </div>
    )}
      <div className="flex justify-between items-end mt-4 h-full">
        <div className='pl-1 mb-1.5'>
            {status == 'Pendente' &&  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-gray-400 border border-gray-500">{status}</span>}
            {status == 'Rejeitado' && <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-red-400 border border-red-400">{status}</span>}
            {status == 'Aprovado' &&  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-green-400 border border-green-400 m-1">{status}</span>}
        </div>
        {status !== 'Aprovado' && (
            <div className='flex flex-row  w-full items-center justify-end ml-6'>
                <Button className="w-[80px]  h-7 rounded text-white font-normal text-xs lg:text-sm" classNameLabel='text-[14px]'  label={"Editar"} onClick={onEdit}/>
                <Button className="w-[80px]  h-7 m-1 bg-red-400 hover:bg-red-700 rounded text-white font-normal text-xs lg:text-sm " classNameLabel='text-[14px]' label={"Remover"} onClick={onRemove}/>
            </div>
        )}
      </div>
    </div>
  );
};

export default CompetitionCard;
