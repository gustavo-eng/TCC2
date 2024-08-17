import React from "react";

export interface ToggleOption {
  label: string;
  value: string;
}

export interface ToggleGroupProps {
  options: ToggleOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {options.map((option, index) => (
        <button
          key={option.value}
          type="button"
          className={`px-4 py-2 text-sm font-medium border border-gray-200 ${
            selectedValue === option.value
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-900"
          } ${index === 0 ? "rounded-l-lg" : ""} ${
            index === options.length - 1 ? "rounded-r-lg" : ""
          } hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-blue-600 focus:text-blue-600`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;