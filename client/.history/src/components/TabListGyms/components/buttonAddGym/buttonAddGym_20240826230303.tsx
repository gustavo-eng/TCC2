import { Plus } from '@phosphor-icons/react'; // Assumindo que você está usando a biblioteca de ícones @phosphor-icons/react
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonAddGym: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
    >fasd
      <span>{text}</span>
      <Plus size={20} className="ml-2" />
    </button>
  );
};

export default ButtonAddGym;
