import React from 'react';
import PropTypes from 'prop-types';
import { FaCrosshairs, FaRegHandPaper } from 'react-icons/fa';

export default function Controls({ onCenterView, onToggleMoveMode, isMoveMode }) {
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={onToggleMoveMode}
        className={`p-2 rounded-full shadow-md ${!isMoveMode ? 'bg-yellow-100 text-white scale-105' : ' text-black'}`}
        aria-label="Toggle move mode"
      >
        <FaRegHandPaper className="w-5 h-5" color="black" />
      </button>
      <button
        onClick={onCenterView}
        className="p-2 rounded-full bg-white shadow-md"
        aria-label="Center view"
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
