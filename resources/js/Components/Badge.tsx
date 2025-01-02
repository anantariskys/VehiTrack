import { FC, ReactNode } from "react";

interface Props {
    color?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "warning"
        | "success"
        | "danger";
    children: ReactNode;
}
const Badge: FC<Props> = ({ color = "primary", children }) => {
    let className = "";
    switch (color) {
        case "primary":
            className = "bg-primary text-white";
            break;
        case "secondary":
            className = "bg-secondary text-white";
            break;
        case "tertiary":
            className = "bg-neutral-600 text-white";
            break;
        case "warning":
            className = "bg-yellow-500 text-white";
            break;
        case "success":
            className = "bg-green-500 text-white";
            break;
        case "danger":
            className = "bg-red-500 text-white";
            break;
        default:
            className = "bg-primary text-white";
            break;
    }
    return (
        <div className={`${className} px-2 py-1 rounded-md text-sm `}>
            {children}
        </div>
    );
};

export default Badge;
