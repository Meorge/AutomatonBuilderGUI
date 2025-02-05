import { createPortal } from "react-dom";
const ConfirmationDialog: React.FC<{
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}> = ({ onConfirm, onCancel, message }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded"
            onClick={onConfirm}
          >
            YES
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={onCancel}
          >
            NO
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmationDialog;
