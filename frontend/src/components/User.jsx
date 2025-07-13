import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function User({ position, id }) {
  return (
        <div id={id}
      className="absolute z-30"
      style={{
        left: position.x * 32,
        top: position.y * 32,
      }}
    >
      <FaUserCircle size={32} className="text-red-600 bg-white rounded-full" />
    </div>
  );
}
