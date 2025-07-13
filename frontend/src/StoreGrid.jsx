import React from "react";

const COLS = 30;
const ROWS = 15;

export default function StoreGrid() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 24px)`,
          gridTemplateRows: `repeat(${ROWS}, 24px)`,
          gap: "1px",
          background: "#d1d5db", // Tailwind gray-300
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300"
            style={{ width: 24, height: 24 }}
          />
        ))}
      </div>
    </div>
  );
}
