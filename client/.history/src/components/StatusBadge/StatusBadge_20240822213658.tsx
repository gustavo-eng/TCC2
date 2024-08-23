import React from 'react';

type StatusBadgeProps = {
  status: 'Pendente' | 'Rejeitado' | 'Aprovado';
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Pendente':
        return 'bg-gray-200 text-gray-800 border-gray-500 dark:bg-gray-700 dark:text-gray-400';
      case 'Rejeitado':
        return 'bg-red-100 text-red-800 border-red-400 dark:bg-gray-700 dark:text-red-400';
      case 'Aprovado':
        return 'bg-green-100 text-green-800 border-green-400 dark:bg-gray-700 dark:text-green-400';
      default:
        return '';
    }
  };

  return (
    <div className=" mt-4 h-fit flex-wrap">
      <div className="pl-1 mb-1.5">
        <span
          className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded border ${getStatusClasses()}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default StatusBadge;
