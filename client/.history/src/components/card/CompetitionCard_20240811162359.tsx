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
  onEdit,
  onRemove,
}) => {
  return (
    <div className=" bg-gray-100 rounded shadow-lg w-fit m-1">
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
            className="lg:rounded h-full w-full"
        />
      </div>
      { /* Alterar apenas a cor da borda */ }
      <div className="flex justify-between items-center mt-4 ">

        {/*${status === 'Rejeitado' ? 'border-red-400' : status === 'Aprovado' ? 'border-green-500 ' : 'border-red-500 '}
            <span className={`px-2 py-1 rounded-full text-sm bg-white text-black  border-red-500 border-2 `}>
            {status}sfas
            </span>
        */}

        <div className='pl-1'>
            {status == 'Pendente' &&  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-gray-400 border border-gray-500">{status}</span>}
            {status == 'Rejeitado' && <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-red-400 border border-red-400">{status}</span>}
            {status == 'Aprovado' &&  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded !dark:bg-gray-700 !dark:text-green-400 border border-green-400 m-1">{status}</span>}
        </div>
        <Button className="w-full h-5 lg:h-7 mb-1 mt-2 rounded text-white font-normal text-xs lg:text-sm "  label={"Editar"} onClick={onEdit}/>
        <Button className="w-full h-5 lg:h-7 m-1 rounded text-white font-normal text-xs lg:text-sm "  label={"Editar"} onClick={onEdit}/>
        <div className="flex space-x-2">
          {/*

          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Editar
          </button>
          */}
         {/*

         <button
           onClick={onRemove}
           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
         >
           Remover
         </button>

         */}
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
