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
      className="flex items-center tex px-2 h-full bg-green-500 text-white rounded-lg hover:bg-green-600  focus:ring-green-700 "
    >
      <span>{text}</span>
      <Plus size={20} className="ml-2" />
    </button>
  );
};

export default ButtonAddGym;
