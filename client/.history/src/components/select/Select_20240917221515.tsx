import { twMerge } from "tailwind-merge";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  isOptional?: boolean;
  className?: string;
  classNameSelect?: string;
  classNameOptions?: string;
  classNameLabel?: string;
  options?: { value: string | number; label?: string }[];
  selected: string | number; // Propriedade para o valor selecionado
  setSelect: (value: string | number) => void; // Função para definir o valor selecionado
}

export default function Select({
  label,
  isOptional = true,
  options,
  className,
  classNameSelect,
  classNameOptions,
  classNameLabel,
  selected,
  setSelect,
  ...props
}: SelectProps) {
  // Função para lidar com a mudança de seleção
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value); // Atualiza o valor selecionado
  };

  return (
    <div className={twMerge("bg-white mt-7", className)}>
      {label && (
        <label
          htmlFor={props.id}
          className={twMerge("block mb-0 text-sm font-medium text-gray-600", classNameLabel)}
        >
          {label} {!isOptional && <span className="text-red-600"> *</span>}
        </label>
      )}
      <select
        className={twMerge(
          "outline-none font-normal text-gray-700 bg-gray-100 border border-green-700 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-full p-1.5 dark:focus:ring-green-500 dark:focus:border-green-600",
          classNameSelect
        )}
        value={selected} // Define o valor selecionado
        onChange={handleChange} // Lida com a mudança de seleção
        {...props}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value} className="bg-gray-100">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
