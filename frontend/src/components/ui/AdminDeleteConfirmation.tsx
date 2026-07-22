import React, { useEffect } from 'react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  dangerouslySetConfirmTextColor?: boolean;
  className?: string;
}

export default function DeleteConfirmation({
  isOpen,
  onClose,
  title = 'Confirm deletion',
  message = 'Are you sure you want to delete this item?',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  onConfirm,
  dangerouslySetConfirmTextColor = false,
  className = '',
}: DeleteConfirmationProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm`}
        onClick={onClose}
      >
        {/* Dialog */}
        <div className={`${className} relative z-50 w-full max-w-md mx-4 p-4`}>
          <div className="bg-white rounded-lg shadow-xl w-full">
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600">{message}</p>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onCancel}
                  className={`px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded`}
                >
                  {cancelText}
                </button>
                <button
                  type="button"
                  onClick={onConfirm}
                  className={`px-4 py-2 ${
                    dangerouslySetConfirmTextColor
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  } rounded`}
                >
                  {confirmedText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}