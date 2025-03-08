import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-background  rounded-lg ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lg z-20"
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
