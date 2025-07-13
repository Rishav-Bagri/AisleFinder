import React from 'react';
import { FaCrosshairs } from 'react-icons/fa';

export default function Controls({ onCenterView }) {
  return (
        <div className="absolute bottom-8 right-3 sm:bottom-5 sm:right-5 z-20">
      <button
        onClick={onCenterView}
                className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Center on user"
      >
                <FaCrosshairs className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      </button>
    </div>
  );
}
