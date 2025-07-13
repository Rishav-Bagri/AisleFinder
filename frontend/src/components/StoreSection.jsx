// src/components/StoreSection.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * StoreSection renders a labeled block (department, shelf, etc.) on the store grid
 * Props:
 * - name: label
 * - position: { x, y } (top-left grid cell)
 * - size: { w, h } (width and height in grid cells)
 * - color: Tailwind color class
 * - access: [{ x, y }] (optional; access points)
 */
export default function StoreSection({ name, position, size, color, access, zIndex = 20 }) {
  return (
    <div
      className={`absolute ${color || 'bg-yellow-400'} flex items-center justify-center text-base font-bold font-mono text-gray-900 select-none shadow-md`}
      style={{
        left: position.x * 32,
        top: position.y * 32,
        width: size.w * 32,
        height: size.h * 32,
        zIndex,
      }}
    >
      <span className="px-1 text-center leading-tight w-full whitespace-pre-line drop-shadow-sm">{name}</span>
      {access && access.map((pt, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full border-2 border-white"
          style={{
            left: (pt.x - position.x) * 32 + 12,
            top: (pt.y - position.y) * 32 + 12,
          }}
        />
      ))}
    </div>
  );
}

StoreSection.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }).isRequired,
  size: PropTypes.shape({ w: PropTypes.number, h: PropTypes.number }).isRequired,
  color: PropTypes.string,
  access: PropTypes.arrayOf(
    PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
  ),
};
