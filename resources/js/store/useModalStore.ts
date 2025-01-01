import { Booking } from "@/types";
import { create } from "zustand";

export interface ModalState {
    isOpen: boolean;
    data: Booking | null;
    onOpen: (item: Booking) => void;
    onClose: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    data : null,
    onOpen: (item) => set({ isOpen: true , data: item }),
    onClose: () => set({ isOpen: false }),
}));