import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ProductMarker({ product, onRender }) {
  useEffect(() => {
    if (product && onRender) {
      onRender();
    }
    // We only want this to run once when the component mounts with a product.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (!product) {
    return null;
  }

  return (
    <div
      id="product-marker"
      className="absolute z-30 flex flex-col items-center"
      style={{
        left: product.real.x * 32 + 16,
        top: product.real.y * 32,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <div className="relative bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap">
        {product.name}
        <div 
          className="absolute left-1/2 w-0 h-0 -bottom-2"
          style={{
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid white',
          }}
        ></div>
         <div 
          className="absolute left-1/2 w-0 h-0 -bottom-[9px]"
          style={{
            transform: 'translateX(-50%)',
            borderLeft: '9px solid transparent',
            borderRight: '9px solid transparent',
            borderTop: '9px solid #E5E7EB',
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
}

ProductMarker.propTypes = {
  product: PropTypes.object,
  onRender: PropTypes.func,
};
