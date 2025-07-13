import React from 'react';

/**
 * Renders a single grid tile with a light grey background and a very light border.
 */
export default function Tile({ onClick }) {
  return (
    <div
      className="w-8 h-8 bg-gray-200 border-r border-b border-gray-300 hover:bg-gray-300 cursor-pointer"
      onClick={onClick}
    ></div>
  );
}
