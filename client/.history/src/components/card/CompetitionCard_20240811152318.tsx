import React from 'react';

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
      <div className="bg-gray-300 h-fit mt-4 rounded ">asfdapospfasfk</div>
      <div className="flex justify-between items-center mt-4">
        <span className={`px-2 py-1 rounded-full text-sm ${status === 'Rejeitado' ? 'bg-gray-300' : status === 'Aprovado' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {status}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Editar
          </button>
          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
