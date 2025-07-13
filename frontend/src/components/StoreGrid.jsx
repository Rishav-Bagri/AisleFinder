import React, { useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Tile from './Tile';
import OverlayBlock from './OverlayBlock';
import User from './User';
import Controls from './Controls';
import Path from './Path';
import ProductMarker from './ProductMarker';

const COLS = 50;
const ROWS = 30;

// This is a helper component to handle the initial zoom effect.
function InitialZoom({ zoomToElement }) {
  useEffect(() => {
    const timer = setTimeout(() => zoomToElement('user-marker', 1.2, 200, 'easeOutQuad'), 100);
    return () => clearTimeout(timer);
  }, [zoomToElement]);
  return null; // This component does not render anything.
}

export default function StoreGrid({ userPosition, path, product, storeSections, onTileClick }) {
  return (
    <div className="flex-1 overflow-hidden bg-gray-300">
      <TransformWrapper initialScale={1.2}>
        {/* This is the render prop pattern. It provides the zoom functions directly. */}
        {({ zoomToElement, zoomToElements }) => (
          <React.Fragment>
            <InitialZoom zoomToElement={zoomToElement} />
            <TransformComponent
              wrapperStyle={{ width: '100%', height: '100%' }}
              contentStyle={{ width: COLS * 32, height: ROWS * 32 }}
            >
              <div className="relative">
                <div
                  className="grid absolute inset-0 z-0"
                  style={{
                    gridTemplateColumns: `repeat(${COLS}, 32px)`,
                    gridTemplateRows: `repeat(${ROWS}, 32px)`,
                  }}
                >
                  {Array.from({ length: COLS * ROWS }).map((_, i) => {
                    const x = i % COLS;
                    const y = Math.floor(i / COLS);
                    return <Tile key={i} onClick={() => onTileClick(x, y)} />;
                  })}
                </div>
                {storeSections.map((section, idx) => (
                  <OverlayBlock key={idx} {...section} />
                ))}
                <Path points={path} />
                <User position={userPosition} id="user-marker" />
                <ProductMarker
                  product={product}
                  onRender={() => {
                    // This callback ensures we only zoom after the marker is in the DOM.
                    // We also check if zoomToElements is a valid function before calling it.
                    if (typeof zoomToElements === 'function') {
                      zoomToElements(['#user-marker', '#product-marker'], { scale: 0.9, margin: 30 });
                    }
                  }}
                />
              </div>
            </TransformComponent>
            <Controls onCenterView={() => zoomToElement('user-marker', 1.2, 200, 'easeOutQuad')} />
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
