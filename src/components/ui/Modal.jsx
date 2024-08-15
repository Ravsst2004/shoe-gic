import React from "react";

export default function Modal({ show = false, children, onClose }) {
  if (!show) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 cursor-pointer"
    >
      <div className="relative mx-20 md:mx-60 w-full max-w-2xl max-h-screen cursor-default">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
