import { FC } from "react";

interface StatusBadgeProps {
    item:"pending" | "approved" | "rejected" | "done" | "ongoing" | "available" | "unavailable" | "maintenance";
    
}
const StatusBadge: FC<StatusBadgeProps> = ({ item }) => {
    let text = "";
    let className = "";
    switch (item) {
        case "approved":
            text = "Disetujui";
            className = "bg-primary";
            break;
        case "pending":
            text = "Proses";
            className = "bg-gray-400";
            break;
        case "rejected":
            text = "Ditolak";
            className = "bg-secondary";
            break;
        case "done":
            text = "Selesai";
            className = "bg-green-500";
            break;
        case "ongoing":
            text = "Berjalan";
            className = "bg-yellow-500";
            break;
        case "available":
            text = "Tersedia";
            className = "bg-green-500";
            break;
        case "unavailable":
            text = "Digunakan";
            className = "bg-red-500";
            break;
        case "maintenance":
            text = "Perbaikan";
            className = "bg-yellow-500";
            break;
        default:
            break;
    }
    return (
        <small className={`${className} text-tertiary py-1 px-3 rounded-lg`}>
            {text}
        </small>
    );
};

export default StatusBadge;
