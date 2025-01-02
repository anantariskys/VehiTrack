import { Icon } from "@iconify/react/dist/iconify.js";
import { FC, useEffect, useState } from "react";

interface ToastProps {
    message: string;
    status: "success" | "error" | null;
    duration?: number; // Durasi dalam milidetik
    onClose?: () => void;
}

const Toast: FC<ToastProps> = ({
    message,
    status,
    duration = 5000,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, duration);

        return () => clearTimeout(timeout);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div
            className={`lg:p-4 p-2 fixed flex gap-2 items-center bottom-4 md:text-base text-sm right-4 rounded-md shadow-lg cursor-pointer transition-opacity duration-300 ${
                status === "success"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
            }`}
        >
            <p>{message}</p>
            <Icon
                icon="material-symbols:close-rounded"
                onClick={() => {
                    setIsVisible(false);
                    onClose?.();
                }}
            />
        </div>
    );
};

export default Toast;
