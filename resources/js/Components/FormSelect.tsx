import { FC } from "react";

interface FormSelectProps {
    id: string;
    label: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
}

const FormSelect: FC<FormSelectProps> = ({
    id,
    label,
    value,
    options,
    onChange,
    error,
}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium">
            {label}
        </label>
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
            ))}
        </select>
        {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
);

export default FormSelect;
