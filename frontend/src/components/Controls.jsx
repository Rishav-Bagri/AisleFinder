import React from 'react';
import PropTypes from 'prop-types';
import { FaCrosshairs, FaRegHandPaper } from 'react-icons/fa';

export default function Controls({ onCenterView, onToggleMoveMode, isMoveMode }) {
  return (
    <div className="absolute bottom-6 right-6 flex flex-col gap-3">
      <button
        onClick={onToggleMoveMode}
        className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
          isMoveMode 
            ? 'bg-blue-500 text-white transform scale-110' 
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        aria-label={isMoveMode ? 'Exit move mode' : 'Move mode'}
      >
        <FaRegHandPaper className="w-5 h-5" />
      </button>
      <button
        onClick={onCenterView}
        className="p-3 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-50 transition-all duration-200"
        aria-label="Center view on user"
        title="Center view on user"
      >
        <FaCrosshairs className="w-5 h-5" />
      </button>
    </div>
  );
}

Controls.propTypes = {
  onCenterView: PropTypes.func.isRequired,
  onToggleMoveMode: PropTypes.func.isRequired,
  isMoveMode: PropTypes.bool.isRequired,
};
