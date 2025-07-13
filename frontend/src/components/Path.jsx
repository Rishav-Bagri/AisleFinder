import React from 'react';

export default function Path({ points = [] }) {
  if (!points || points.length === 0) {
    return null;
  }

  return (
    <>
      {points.filter(p => p).map(({ x, y }, index) => (
        <div
          key={index}
          className="absolute bg-blue-500 opacity-50 rounded-full"
          style={{
            left: x * 32 + 8, // Center the dot in the tile
            top: y * 32 + 8,  // Center the dot in the tile
            width: 16,
            height: 16,
            zIndex: 25, // Display below user but above sections
          }}
        />
      ))}
    </>
  );
}
