import React from 'react';

/**
 * Renders a simple, solid-colored block at a specific grid position.
 * It uses hardcoded inline styles to ensure visibility and avoid CSS build issues.
 */
export default function OverlayBlock({ position, size, name, color }) {
  const style = {
    position: 'absolute',
    left: `${position.x * 32}px`,
    top: `${position.y * 32}px`,
    width: `${size.w * 32}px`,
    height: `${size.h * 32}px`,
    backgroundColor: color || '#fde047', // Default to yellow-300
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1f2937', // gray-800
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    border: '1px solid rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={style}>
      <span>{name}</span>
    </div>
  );
}
