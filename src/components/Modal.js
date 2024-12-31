import React from "react";

export default function Modal({
  isVisible,
  title,
  message,
  onClick,
  buttonLabel,
}) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-3/4 tablet:w-1/3">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{message}</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClick}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
