import React from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";
import { useNotificationModalStore } from "@/store/useNotificationModalStore";

const Modal: React.FC<{closeButton?:boolean}> = ({closeButton}) => {
  const { isModalOpen, modalMessage, onConfirm, closeModal, } =
    useNotificationModalStore();

  return (
    <div
      className={`fixed inset-0 bg-gray-800  bg-opacity-50 container z-40 flex justify-center items-center transition-opacity duration-300 ${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => closeModal()}
    >
      <div
        className={`bg-white p-8 rounded-lg shadow-lg  max-w-lg transition-transform duration-300 transform ${
          isModalOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center mb-4">
          <Icon icon="mdi:alert-circle" className="text-red-500 text-4xl" />
        </div>
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold text-primary">
            {modalMessage}
          </h3>
        </div>
        <div className="flex justify-center gap-4">
          {onConfirm && (
            <Button
         variant="primary"
              onClick={() => {onConfirm(),closeModal()}}
            >
              Ya
            </Button>
          )}

            <Button
            variant="secondary"
              onClick={() => closeModal()}
            >
              Tidak
            </Button>

          {onConfirm && closeButton && <Button variant="secondary" onClick={() => closeModal()}>Close</Button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;