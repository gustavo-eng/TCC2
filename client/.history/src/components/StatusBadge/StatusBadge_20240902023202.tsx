import React from 'react';

type StatusBadgeProps = {
  status: "Pendente" | "Rejeitado" | "Aprovado" | "" | string;
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Pendente':
        return 'bg-gray-200 text-gray-800 border-gray-500 ';
      case 'Rejeitado':
        return 'bg-red-100 text-red-800 border-red-400 ';
      case 'Aprovado':
        return 'bg-green-100 text-green-800 border-green-400 ';
      default:
        return '';
    }
  };

  return (
    <div className="">
      <div className="p-0 lg:pl-1">
        <span
          className={`text-xs font-medium me-2 px-2  lg:px-2.5 py-0.5 rounded border ${getStatusClasses()}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default StatusBadge;
