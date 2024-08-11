import React from 'react';

interface CompetitionCardProps {
  name: string;
  price: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  status: 'Pending' | 'Approved' | 'Rejected';
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
    <div className="p-4 bg-gray-100 rounded shadow-lg w-80 m-1">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <span className="text-xl font-bold">{price} R$</span>
      </div>
      <div className="text-sm text-gray-600 mt-2">
        <p className='bg-green-300 text-xs font-medium'> Data fim • Horário início - Horário fim
            Data início: {startDate} • Data fim:
        </p>
        {/*
        <p>
          {startDate} - {endDate} • {startTime} - {endTime}
        </p>
        */}
        <p>
          {city} • {neighborhood} • {street} • {number}
        </p>
      </div>
      <div className="bg-gray-300 h-24 mt-2 rounded-lg"></div>
      <div className="flex justify-between items-center mt-4">
        <span className={`px-2 py-1 rounded-full text-sm ${status === 'Pending' ? 'bg-gray-300' : status === 'Approved' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
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
