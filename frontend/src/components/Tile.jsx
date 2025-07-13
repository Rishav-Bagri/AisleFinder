import React from 'react';

/**
 * Renders a single grid tile with a clean, modern design.
 */
export default function Tile({ onClick }) {
  return (
    <div
      className="w-8 h-8 bg-white border border-gray-100 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full bg-grid-pattern opacity-5 hover:opacity-10 transition-opacity" />
    </div>
  );
}
