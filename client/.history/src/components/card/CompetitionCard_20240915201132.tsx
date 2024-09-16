import React, { useEffect, useState } from 'react';
import Button from '../buttons/button';
import StatusBadge from '../StatusBadge/StatusBadge';

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
  voucherPath?: string;
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
  voucherPath,
}) => {


  const [idAthlete, setIdAthlete] = useState<string | null | any>(null);


  useEffect(() => {
    try {
      const user = window.sessionStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user); // Certifica que o item é convertido para um objeto
        setIdAthlete(parsedUser?.idAthlete || null); // Acessa a propriedade idAthlete de forma segura
      } else {
        setIdAthlete(null); // Caso o user não exista no sessionStorage
      }
    } catch (error) {
      console.error('Error parsing user from sessionStorage:', error);
      setIdAthlete(null); // Em caso de erro, seta idAthlete como null
    }

  }, [voucherPath]); // Atualiza o efeito se voucherPath mudar


  return (
    <div className="bg-white shadow flex flex-col justify-start  lg:w-[15vw] rounded-md m-1 h-fit p-1">
      {String(voucherPath).split('\\').pop()}
      <div id={idPayment?.toString()} className=''>Id: {idPayment}</div>
      <div className="flex justify-between items-center w-full flex-wrap">
        <h3 className="text-green-600 font-bold text-md">{name}</h3>
        <span className="text-green-600 text-md font-bold">{price} R$</span>
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
          src={`http://localhost:3001/${idAthlete}/${String(voucherPath).split('\\').pop()}` || "src/assets/olimpicGame.webp"}
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
          <StatusBadge status={status || "Pendente"} />
        </div>
      </div>
      {status !== 'Aprovado' && (
        <div className="flex flex-col items-center justify-end p-1">
          <Button
            className="w-full h-8 rounded-md bg-green-500 hover:bg-green-600/90 text-white font-normal text-xs lg:text-sm"
            classNameLabel="text-[14px]"
            label="Editar"
            onClick={onEdit}
          />
          <Button
            className="w-full h-8 m-1 rounded-md bg-red-400 hover:bg-red-500/80  text-white font-normal text-xs lg:text-sm"
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
