import React from 'react';

interface CardProps {
  professor: string;
  email: string;
  cidade: string;
  bairro: string;
  numero: string;
  telefone: string;
  titulo: string;
}

const CardsGym: React.FC<CardProps> = ({
  professor,
  email,
  cidade,
  bairro,
  numero,
  telefone,
  titulo
}) => {
  return (
    <div className="m-1 w-fit p-2 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-start">
        <div className="h-full bg-green-500 rounded-l-lg" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-500">
            <div className=''>
              <p className="font-semibold">Professor</p>
              <p>{professor}</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>{email}</p>
            </div>
            <div>
              <p className="font-semibold">Cidade</p>
              <p>{cidade}</p>
            </div>
            <div>
              <p className="font-semibold">Bairro</p>
              <p>{bairro}</p>
            </div>
            <div>
              <p className="font-semibold">Número</p>
              <p>{numero}</p>
            </div>
            <div>
              <p className="font-semibold">Telefone</p>
              <p>{numero}</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-1'>
            <p className="mt-2 text-lg font-semibold text-gray-700">{telefone}</p>
            <button className="  bg-green-500 text-white rounded-lg hover:bg-green-600">
                Alunos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGym;
