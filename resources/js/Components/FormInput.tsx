import { FC } from "react";

interface FormInputProps {
    id: string;
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    error?: string;
}

const FormInput: FC<FormInputProps> = ({
    id,
    label,
    value,
    onChange,
    type = "text",
    error,
}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
);

export default FormInput;
