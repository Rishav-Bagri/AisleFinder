import React, { useEffect } from 'react';

export default function ProductMarker({ product, onRender }) {
  useEffect(() => {
    // When the product prop is set and the component has rendered, call the callback
    // to signal that it is safe to zoom to this element.
    if (product && onRender) {
      onRender();
    }
  }, [product, onRender]);

  if (!product) {
    return null;
  }

  return (
    <div
      id="product-marker"
      className="absolute z-30 flex flex-col items-center"
      style={{
        left: product.real.x * 32 + 16, // Center horizontally
        top: product.real.y * 32,      // Position above the tile
        transform: 'translate(-50%, -100%)', // Adjust to float directly above
      }}
    >
      {/* Tooltip Body */}
      <div className="relative bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap">
        {product.name}
        {/* Triangle */}
        <div 
          className="absolute left-1/2 w-0 h-0 -bottom-2"
          style={{
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid white',
          }}
        ></div>
        {/* Triangle Border */}
         <div 
          className="absolute left-1/2 w-0 h-0 -bottom-[9px]"
          style={{
            transform: 'translateX(-50%)',
            borderLeft: '9px solid transparent',
            borderRight: '9px solid transparent',
            borderTop: '9px solid #E5E7EB', // Same as border-gray-200
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
}
