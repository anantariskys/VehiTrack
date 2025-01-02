import { FC } from "react";

interface FormSelectProps {
    id: string;
    label: string;
    value: string | "company" | "rental" | "freight" | "passenger";
    options: {id:number|string,name:string}[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    multiple?: boolean
}

const FormSelect: FC<FormSelectProps> = ({
    id,
    label,
    value,
    options,
    onChange,
    error,
    multiple
}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium">
            {label}
        </label>
        <select
            id={id}
            multiple={multiple}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
            <option value="" disabled>{options.length >0 ? label:"Tidak ada data"}</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
        {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
);

export default FormSelect;
